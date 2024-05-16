import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Filter from '../components/Filter'
import NotificationInformation from '../components/NotificationInformation'
import PopupAddBalance from '../components/popups/PopupAddBalance'
import Expenses from '../components/Expenses'

// stores
import { useUserStore } from '../stores/Auth.store'
import { usePopupAddBalance } from '../hooks/usePopupAddBalance'
import { useLocation } from 'react-router-dom'
import AlertSnackbar from '../components/UI/Alerts/SnackBar'
import { AnimatePresence } from 'framer-motion'

const HomePage = () => {
  const { infos } = useUserStore((state) => state.user)
  const [dismissPopupAddBalance, togglePopupBalance] = usePopupAddBalance()

  const location = useLocation()
  const [referPage, setReferPage] = useState(location.state?.path === '/login')

  return (
    <>
      {/* show pop up add balance if the use don't have a currency yet */}
      {!infos?.currency && !dismissPopupAddBalance && (
        <PopupAddBalance onClickOverlay={togglePopupBalance} />
      )}
      {/* notification bar there ! */}
      <NotificationInformation />
      {/* header */}
      <Header />
      {/* hero section */}
      <Hero />
      {/* filter */}
      <Filter />
      {/* empty OR Note */}
      <Expenses />
      {/* snackbar */}
      <AnimatePresence exitBeforeEnter>
        {referPage && (
          <AlertSnackbar onClick={() => setReferPage(false)}>
            <AlertSnackbar.Text>Welcome Back !</AlertSnackbar.Text>
          </AlertSnackbar>
        )}
      </AnimatePresence>
    </>
  )
}

export default HomePage
