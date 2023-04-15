import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import authenticationSession from '@utils/authenticationSession'
import { REFRESH_TOKEN_REJECTED_ERROR } from '@constants/error'
import { logout } from '@services/authentication/requests'
import { ModalComponent } from '@components/atoms/Modal'
import { ToastContainer } from '@components/atoms/Toast'

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const session = useSession()
  useEffect(() => {
    if (session.status === 'loading') {
      authenticationSession.initial()
      return
    }
    authenticationSession.setAuthentication(session.data)
    if (session.data?.user?.error === REFRESH_TOKEN_REJECTED_ERROR) {
      logout()
    }
  }, [session])
  return (
    <>
      {children}
      <ModalComponent />
      <ToastContainer />
    </>
  )
}

export default AppProvider
