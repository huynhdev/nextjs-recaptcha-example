import { Text } from '@components/atoms/Text'
import React from 'react'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

type DefaultHeaderMenuProps = DefaultPageProps & {
  className?: string
}

function DefaultHeaderMenu(props: DefaultHeaderMenuProps): JSX.Element {
  return (
    <div className={`${styles.header_menu_molecule_0} ${props.className}`}>
      <div className={styles.header_menu_molecule_box_0}>
        <Text
          href={'https://jitera.com'}
          textType="Link"
          className={styles.header_menu_molecule_home_0}
        >
          {'Home'}
        </Text>
        <Text
          href={'https://jitera.com'}
          textType="Link"
          className={styles.header_menu_molecule_home_0}
        >
          {'News'}
        </Text>
        <Text
          href={'https://jitera.com'}
          textType="Link"
          className={styles.header_menu_molecule_home_0}
        >
          {'Contact Us'}
        </Text>
        <Text
          href={'https://jitera.com'}
          textType="Link"
          className={styles.header_menu_molecule_home_0}
        >
          {'About'}
        </Text>
      </div>
    </div>
  )
}

export default DefaultHeaderMenu
