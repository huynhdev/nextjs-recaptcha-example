import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { QueryClient, QueryObserver, QueryKey } from 'react-query'
import { requestAuthenticated } from '@utils/request'

export function fetchToServiceResponse<T>(
  queryClient: QueryClient,
  queryKey: QueryKey
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const observer = new QueryObserver(queryClient, { queryKey })
      const unsubscribe = observer.subscribe((result) => {
        if (result.status === 'error') {
          unsubscribe && unsubscribe()
          reject(result.error)
        }
        if (result.status === 'success') {
          unsubscribe && unsubscribe()
          resolve(result.data as T)
        }
      })
    }, 0)
  })
}

export const fetchResponseToServiceData = (res: AxiosResponse, model: string) => {
  return res.data?.[model]
}

export const serviceFetch = async (options: AxiosRequestConfig, model?: string) => {
  const res = await requestAuthenticated(options)
  if (!model) {
    return res.data
  }
  return fetchResponseToServiceData(res, model)
}

export const objectToFormData = (obj: any, formData?: FormData, namespace?: string): FormData => {
  formData = formData || new FormData()
  for (const property in obj) {
    if (!obj.hasOwnProperty(property) || !obj[property]) {
      continue
    }

    const formKey = namespace ? `${namespace}[${property}]` : property

    if (obj[property] instanceof FileList) {
      for (let i = 0; i < obj[property].length; i++) {
        formData.append(`${formKey}[${i}]`, obj[property][i])
      }
    } else if (obj[property] instanceof File) {
      formData.append(formKey, obj[property])
    } else if (typeof obj[property] === 'object') {
      if (obj[property] instanceof Date) {
        formData.append(formKey, obj[property].toISOString())
      } else {
        objectToFormData(obj[property], formData, formKey)
      }
    } else {
      formData.append(formKey, obj[property].toString())
    }
  }
  return formData
}
