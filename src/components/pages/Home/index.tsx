import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'

import DefaultHeader from '@components/molecules/DefaultHeader'
import { Text } from '@components/atoms/Text'
import { ControlledInput } from '@components/atoms/ControlledInput'
import { Button } from '@components/atoms/Button'
import DefaultFooter from '@components/molecules/DefaultFooter'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

type HomeProps = DefaultPageProps & {
  className?: string
}

interface FormDataProps {
  email: string
}

function Home(props: HomeProps): JSX.Element {
  const formForm1 = useForm1()
  const recaptchaRef = React.createRef()

  const { handleSubmit } = formForm1

  const onSubmit = (data: FormDataProps) => {
    event.preventDefault()
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute()
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    const { email: email } = formForm1.getValues()
    if (!captchaCode) {
      return
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        // If the response is ok than show the success alert
        alert('Email registered successfully')
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      alert(error?.message || 'Something went wrong')
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset()
      formForm1.reset()
    }
  }

  return (
    <div className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <div className={styles.box_0}>
        <form className={styles.form_1}>
          <Text textType="Text" className={styles.form_1_name}>
            {'Registration'}
          </Text>
          <div className={styles.email_container}>
            <div className={styles.email_inner}>
              <Text textType="Text" className={styles.email_label}>
                {'Email'}
              </Text>
              <Text textType="Text" className={styles.email_required}>
                {'*'}
              </Text>
            </div>
            <ControlledInput
              placeholder={'Placeholder'}
              className={styles.email}
              control={formForm1.control}
              formField="email"
              inputStyle={{
                backgroundColor: 'rgb(255, 255, 255)',
                width: '100%',
                fontWeight: '500',
                border: '1px solid rgb(217, 217, 217)'
              }}
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
          <Button
            buttonType="primary"
            type="submit"
            className={styles.form_1_button}
            onClick={handleSubmit(onSubmit)}
          >
            {'Submit'}
          </Button>
        </form>
      </div>
      <DefaultFooter className={styles.defaultheader_1} />
    </div>
  )
}

const useForm1 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().notRequired()
      }),
    []
  )
  return useForm<FormDataProps>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange'
  })
}
export default Home
