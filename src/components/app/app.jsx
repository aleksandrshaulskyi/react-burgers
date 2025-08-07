import { useEffect, useState } from 'react';

import AppStyles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import Notification from '../notification/notification'


const YA_API_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(YA_API_URL)

          if (!response.ok) {
            throw new Error('Failed to fetch the data.')
          }

          const response_data = await response.json()

          setData(response_data.data)
        } catch(error) {
          setError(error.message || 'Something went wrong...')
          setNotificationIsVisible(true)
        }
      }

      fetchData()
    },
    []
  )

  return (
    <main>
        {
          notificationIsVisible && (
            <Notification error={error} handleClose={() => setNotificationIsVisible(false)} />
          )
        }
      <AppHeader />
      <div className={AppStyles.contentWrapper}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default App;
