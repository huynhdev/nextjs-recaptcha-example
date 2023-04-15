import axios from 'axios'
import authenticationSession from '@utils/authenticationSession'
import publicConfigs from '@constants/env'
import { refreshToken } from '@services/authentication/requests'
import { STORAGE_KEYS } from '@constants/storage'

export const request = axios.create()

request.interceptors.request.use(function (config) {
  config.baseURL = publicConfigs.NEXT_PUBLIC_API_URL
  config.headers['Accept'] = 'application/json'
  return config
})

export const requestAuthenticated = axios.create()

let refreshProcess: Promise<unknown> | undefined

requestAuthenticated.interceptors.request.use(async function (config) {
  if (authenticationSession.initialProcessing()) {
    await authenticationSession.initialProcessing()
  }
  let authenticationInfo = authenticationSession.getAuthentication()
  config.baseURL = publicConfigs.NEXT_PUBLIC_API_URL
  config.headers['Accept'] = 'application/json'

  if (!authenticationInfo) {
    return config
  }
  let tokenCreatedTime
  if (typeof localStorage !== 'undefined') {
    localStorage.getItem(STORAGE_KEYS.TOKEN_CREATED_TIME)
  }
  authenticationInfo = await refreshProcessHandler(
    !!tokenCreatedTime &&
      Date.now() + +(publicConfigs.ACCESS_TOKEN_THRESHOLD || 0) >=
        +tokenCreatedTime + authenticationInfo.expiresIn * 1000
  )
  config.headers['Accept'] = 'application/json'
  if (authenticationInfo?.accessToken) {
    config.headers['Authorization'] = `Bearer ${authenticationInfo.accessToken}`
  }
  return config
})

requestAuthenticated.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    // Try to refresh token in this case
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 401 &&
      error.config &&
      !('_retry' in error.config && !error.config._retry)
    ) {
      const authenticationInfo = await refreshProcessHandler(true)
      if (error.config?.headers) {
        error.config.headers['Authorization'] = `Bearer ${authenticationInfo?.accessToken}`
      }
      // @ts-ignore
      error.config._retry = true
      return request.request(error.config || {})
    }
    return Promise.reject(error)
  }
)

async function refreshProcessHandler(condition: boolean) {
  let authenticationInfo = authenticationSession.getAuthentication()
  if (!refreshProcess && condition) {
    refreshProcess = refreshToken().then((result) => {
      refreshProcess = undefined
      return result
    })
  }
  if (refreshProcess) {
    authenticationInfo = await refreshProcess
  }
  return authenticationInfo
}
