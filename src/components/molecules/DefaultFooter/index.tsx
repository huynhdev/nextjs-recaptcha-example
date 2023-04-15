import Image from 'next/image'
import DefaultFooterMenu from '@components/molecules/DefaultFooterMenu'
import React from 'react'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

type DefaultFooterProps = DefaultPageProps & {
  className?: string
}

function DefaultFooter(props: DefaultFooterProps): JSX.Element {
  return (
    <div className={`${styles.footer_molecule_0} ${props.className}`}>
      <div className={styles.footer_molecule_box_0}>
        <div className={styles.footer_molecule_box_1}>
          <div className={styles.footer_molecule_box_2}>
            <Image
              className={styles.footer_molecule_image_0}
              width="100"
              height="0"
              src="https://studio.jitera.app/jitera-white-logo.svg"
              alt="footer_molecule_image_0"
            />
          </div>
          <DefaultFooterMenu className={styles.defaultfootermenu_1} />
        </div>
      </div>
    </div>
  )
}

export default DefaultFooter
