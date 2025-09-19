import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import IndexStyles from './index.module.css'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import Notification from '../notification/notification'


export default function Index() {
  const { loading, error } = useSelector(state => state.ingredients)

  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  useEffect(() => {
    if (error) setNotificationIsVisible(true)
  }, [error])

  return (
    <main>
      {notificationIsVisible && (
        <Notification error={error} handleClose={() => setNotificationIsVisible(false)} />
      )}

      <AppHeader />

      <div className={IndexStyles.contentWrapper}>
        {loading ? (
          <div className={IndexStyles.loader}>Loading...</div>
        ) : (
            <>
                <BurgerIngredients />
                <BurgerConstructor />
            </>
        )}
      </div>
    </main>
  )
}
