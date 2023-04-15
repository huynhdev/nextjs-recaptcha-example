import React, { useMemo } from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { Text } from '@components/atoms/Text'
import { Icon, IconProps } from '@components/atoms/Icon'

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  iconProps?: IconProps
  buttonType?: AntButtonProps['type']
}

const Button = (props: ButtonProps) => {
  const { buttonType = 'primary', iconProps, className, children, ...rest } = props

  const buttonIcon = useMemo(() => {
    if (!iconProps) {
      return
    }
    return <Icon {...iconProps} />
  }, [iconProps])

  const component = useMemo(() => {
    if (typeof children === 'string') {
      return <Text>{children}</Text>
    }
    return children
  }, [children])

  return (
    <AntButton type={buttonType} icon={buttonIcon} {...rest} className={className}>
      {component}
    </AntButton>
  )
}

export { Button }
