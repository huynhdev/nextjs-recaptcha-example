import DefaultHeader from '@components/molecules/DefaultHeader'
import { Row } from '@components/atoms/Row'
import { Text } from '@components/atoms/Text'
import { Button } from '@components/atoms/Button'
import DefaultFooter from '@components/molecules/DefaultFooter'
import React from 'react'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

type Page500Props = DefaultPageProps & {
  className?: string
}

function Page500(props: Page500Props): JSX.Element {
  return (
    <div className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <div className={styles.box_0}>
        <div className={styles.box_0}>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row_0}>
            <Text textType="Text" className={styles.text_0}>
              {'500'}
            </Text>
          </Row>
          <Row gutter={[30, 28]} justify="center" align="top" className={styles.row_0}>
            <Text textType="Text" className={styles.text_0}>
              {'System Error'}
            </Text>
          </Row>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row_0}>
            <Text textType="Text" className={styles.text_0}>
              {'Description about system error'}
            </Text>
          </Row>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row_0}>
            <Button buttonType="primary" className={styles.button_0}>
              {'Redirect to home'}
            </Button>
          </Row>
        </div>
      </div>
      <DefaultFooter className={styles.defaultheader_1} />
    </div>
  )
}

export default Page500
