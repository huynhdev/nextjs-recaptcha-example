import React from 'react'
import dynamic from 'next/dynamic'
import { IconBaseProps, IconType } from 'react-icons/lib'

export enum IconSet {
  All = 'all',
  Antd = 'antd',
  Bootstrap = 'bootstrap',
  Feather = 'feather',
  FontAwesome = 'font-awesome',
  Material = 'material'
}

export function getIconComponent(iconName: string, props: IconBaseProps = {}) {
  if (iconName.startsWith('Md')) {
    const Icon = dynamic(async () => {
      const result = await import('react-icons/md')
      return result[iconName as keyof typeof result] as IconType
    })
    return <Icon {...props} />
  } else if (iconName.startsWith('Fa')) {
    const Icon = dynamic(async () => {
      const result = await import('react-icons/fa')
      return result[iconName as keyof typeof result] as IconType
    })
    return <Icon {...props} />
  } else if (iconName.startsWith('Bs')) {
    const Icon = dynamic(async () => {
      const result = await import('react-icons/bs')
      return result[iconName as keyof typeof result] as IconType
    })
    return <Icon {...props} />
  } else if (iconName.startsWith('Fi')) {
    const Icon = dynamic(async () => {
      const result = await import('react-icons/fi')
      return result[iconName as keyof typeof result] as IconType
    })
    return <Icon {...props} />
  } else if (iconName.startsWith('Ai')) {
    const Icon = dynamic(async () => {
      const result = await import('react-icons/ai')
      return result[iconName as keyof typeof result] as IconType
    })
    return <Icon {...props} />
  }
  return null
}

export function assertUnreachable(value: never): never {
  throw new Error(`Should not reach with ${value}`)
}

export interface IconProps extends IconBaseProps {
  iconName: string
}

export const Icon = (props: IconProps) => {
  const { className, style, iconName, color, size } = props
  return (
    <span
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      className={className}
    >
      {getIconComponent(iconName, {
        color,
        size
      })}
    </span>
  )
}
