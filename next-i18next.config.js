const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeDetection: false
  },
  localePath: typeof window === "undefined"
    ? path.resolve("./public/locales")
    : "/public/locales",
  defaultNS: ["common"],
  fallbackNS: true
}
