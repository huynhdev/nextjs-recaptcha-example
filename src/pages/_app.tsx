import '@styles/app.css'
import 'antd/dist/antd.css'
import { useMemo, FunctionComponent } from 'react'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation, SSRConfig } from 'next-i18next'
import AppProvider from '@components/AppProvider'

type PageProps = {
  dehydratedState: unknown
  session: Session
  seo: { title: string; description: string }
} & SSRConfig
const MyApp: FunctionComponent<AppProps<PageProps>> = ({ Component, pageProps }) => {
  const queryClient = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <NextSeo title={pageProps?.seo?.title} description={pageProps?.seo?.description} />
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </SessionProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
