import type { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { QueryClient } from 'react-query'
import authenticationSession from '@utils/authenticationSession'
import { AxiosError } from 'axios'

export async function initServerInfo(
  context: NextPageContext,
  options: { session?: boolean } = { session: true }
) {
  const queryClient = new QueryClient()
  if (!options?.session) {
    return { queryClient, session: null }
  }
  const session = await getSession(context)
  authenticationSession.setAuthentication(session)
  return { queryClient, session }
}

export function errorHandler(error: unknown) {
  // Display 404 page if the error is 404
  const errorStatus = (error as AxiosError)?.response?.status
  const handleErrors = {
    404: { notFound: true },
    401: {
      redirect: {
        destination: '/500',
        permanent: false
      }
    }
  }
  if (errorStatus && handleErrors[errorStatus]) {
    return handleErrors[errorStatus]
  }
  // Display 500 page for other errors in production mode
  throw error
}
