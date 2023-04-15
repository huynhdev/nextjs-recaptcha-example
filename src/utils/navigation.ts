export function parseParamUrl(url: string, params?: Record<string, string | number | undefined>) {
  Object.keys(params || {}).forEach((key) => {
    url = url.replace(`:${key}`, `${params?.[key] || ''}`)
  })
  return url
}
