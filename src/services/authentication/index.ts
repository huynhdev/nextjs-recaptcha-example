import { useMutation, MutateOptions } from 'react-query'
import { useSession } from 'next-auth/react'

import { logout, SuccessResponse, TokenResponse } from './requests'

export const useLogoutMutation = (
  options: MutateOptions<unknown, unknown, unknown, unknown> = {}
) => useMutation(logout, options)

export const useAuthenticationData = () => {
  const { data } = useSession()
  return data
}
