import Image from 'next/image'
import DefaultHeaderMenu from '@components/molecules/DefaultHeaderMenu'
import DefaultHamburgerMenu from '@components/molecules/DefaultHamburgerMenu'
import React from 'react'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

type DefaultHeaderProps = DefaultPageProps & {
  className?: string
}

function DefaultHeader(props: DefaultHeaderProps): JSX.Element {
  return (
    <div className={`${styles.header_0} ${props.className}`}>
      <div className={styles.header_box_0}>
        <div className={styles.box_2}>
          <div className={styles.header_box_1}>
            <Image
              className={styles.header_image_0}
              width="100"
              height="0"
              src="https://studio.jitera.app/jitera-white-logo.svg"
              alt="header_image_0"
            />
          </div>
        </div>
        <div className={styles.box_3}>
          <DefaultHeaderMenu className={styles.header_defaultheadermenu_0} />
        </div>
        <div className={styles.box_4}>
          <DefaultHamburgerMenu className={styles.header_defaulthamburgermenu_1} />
        </div>
      </div>
    </div>
  )
}

export default DefaultHeader
