import { useRouter } from 'next/router'
import { parseParamUrl } from '@utils/navigation'

export const useNavigateService = () => {
  const navigateService = useRouter()

  return {
    navigate: (url: string, params?: Record<string, string | number | undefined>) => {
      if (navigateService) {
        navigateService.push({
          pathname: parseParamUrl(url, params),
          query: params
        })
      } else {
        window.open(parseParamUrl(url, params), '_self')
      }
    },
    replace: (url: string, params?: Record<string, string | number | undefined>) => {
      if (navigateService) {
        navigateService.replace({
          pathname: parseParamUrl(url, params),
          query: params
        })
      } else {
        window.open(parseParamUrl(url, params), '_self')
      }
    },
    goBack: () => {
      if (navigateService) {
        navigateService.back()
      } else {
        history.back()
      }
    },
    reload: () => {
      if (navigateService) {
        navigateService.reload()
      } else {
        window.location.reload()
      }
    },
    openExternalLink: (
      url: string,
      isNewTab?: boolean,
      params?: Record<string, string | number | undefined>
    ) => {
      if (isNewTab) {
        window.open(parseParamUrl(url, params), '_blank')
      } else {
        window.open(parseParamUrl(url, params), '_self')
      }
    }
  }
}
