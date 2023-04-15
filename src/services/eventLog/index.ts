interface LogEvent {
  action: string
}

export const log = ({ action }: LogEvent) => {
  window.gtag('event', action)
}
