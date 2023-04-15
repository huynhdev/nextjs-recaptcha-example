import React, { useState } from 'react'
import { Drawer, DrawerProps } from 'antd'

import { Button, ButtonProps } from '@components/atoms/Button'
import { Icon, IconProps } from '@components/atoms/Icon'

export enum HamburgerDrawerPlacementEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export interface HamburgerDrawerProps
  extends Omit<DrawerProps, 'headerStyle' | 'bodyStyle' | 'footerStyle' | 'title'> {
  headerVisible?: boolean
}

export interface HamburgerMenuProps {
  className?: string
  drawerTitle?: string
  buttonProps?: Omit<ButtonProps, 'style'>
  buttonStyle?: ButtonProps['style']
  drawerProps?: HamburgerDrawerProps
  headerStyle?: DrawerProps['headerStyle']
  bodyStyle?: DrawerProps['bodyStyle']
  iconProps?: IconProps
  children?: React.ReactNode
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const {
    buttonProps,
    buttonStyle,
    drawerTitle,
    drawerProps,
    headerStyle,
    bodyStyle,
    iconProps,
    children,
    className
  } = props
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { headerVisible, closable, ...restDrawerProps } = (drawerProps ||
    {}) as HamburgerDrawerProps

  const handleButtonClick = () => {
    setDrawerVisible(true)
  }

  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  const defaultDrawerProps: DrawerProps = !headerVisible
    ? { title: undefined, closable: false }
    : { title: drawerTitle, closable }

  return (
    <div className={className} style={{ width: 'fit-content' }}>
      <Button onClick={handleButtonClick} style={buttonStyle} {...buttonProps}>
        <Icon iconName="MdMenu" {...iconProps} />
      </Button>
      <Drawer
        {...defaultDrawerProps}
        visible={drawerVisible}
        onClose={handleDrawerClose}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        {...restDrawerProps}
      >
        {children}
      </Drawer>
    </div>
  )
}

export { HamburgerMenu }
