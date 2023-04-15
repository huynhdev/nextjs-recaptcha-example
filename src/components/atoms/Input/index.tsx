import React, { useMemo, CSSProperties } from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import { Icon, IconProps } from '@components/atoms/Icon'

export interface Props extends AntInputProps {
  inputStyle?: Record<string, unknown> | string
  isPasswordField?: boolean
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  prefixIconProps?: IconProps
  suffixIconProps?: IconProps
}

const Input = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    style = {},
    inputStyle = {},
    errorMessage,
    isPasswordField,
    className,
    prefixIconProps,
    suffixIconProps,
    ...rest
  } = props

  const InternalInput = useMemo(
    () => (isPasswordField ? AntInput.Password : AntInput),
    [isPasswordField]
  )

  const inputStyleProps = useMemo(() => {
    return typeof inputStyle === 'object'
      ? {
          style: inputStyle as CSSProperties
        }
      : {
          className: inputStyle
        }
  }, [inputStyle])

  const prefixIcon = useMemo(() => {
    if (!prefixIconProps) {
      return
    }
    return <Icon {...prefixIconProps} />
  }, [prefixIconProps])

  const suffixIcon = useMemo(() => {
    if (!suffixIconProps) {
      return
    }
    return <Icon {...suffixIconProps} />
  }, [suffixIconProps])

  return (
    <div style={style as CSSProperties} className={className} ref={ref}>
      <InternalInput {...inputStyleProps} prefix={prefixIcon} suffix={suffixIcon} {...rest} />
    </div>
  )
})

export { Input }
