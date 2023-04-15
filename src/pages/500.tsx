import type { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page500Page from '@components/pages/Page500'

export async function getStaticProps(context: NextPageContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      seo: {
        title: 'Recaptcha Example',
        description: ''
      }
    }
  }
}

export default Page500Page
