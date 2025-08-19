import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch, useSelector } from 'react-redux'

import AppStyles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import fetchIngredients from '../../utils/fetch-ingredients'
import Notification from '../notification/notification'

function App() {
  const dispatch = useDispatch()
  const { ingredients, loading, error } = useSelector(state => state.ingredients)

  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [dispatch])

  useEffect(() => {
    if (error) setNotificationIsVisible(true)
  }, [error])

  return (
    <main>
      {notificationIsVisible && (
        <Notification error={error} handleClose={() => setNotificationIsVisible(false)} />
      )}

      <AppHeader />

      <div className={AppStyles.contentWrapper}>
        {loading ? (
          <div className={AppStyles.loader}>Loading...</div>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <>
              <BurgerIngredients data={ingredients} />
              <BurgerConstructor />
            </>
          </DndProvider>
        )}
      </div>
    </main>
  )
}

export default App
