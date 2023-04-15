import React from 'react'
import { Row as AntRow, RowProps as AntRowProps } from 'antd'

export interface RowProps extends AntRowProps {}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <AntRow {...rest} className={className} ref={ref}>
      {children}
    </AntRow>
  )
})

export { Row }
