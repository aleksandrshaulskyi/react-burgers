import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Index from '../index'
import Login from '../../pages/login'
import Register from '../../pages/register'
import ForgotPassword from '../../pages/forgot-password'
import ResetPassword from '../../pages/reset-password'
import IngredientPage from '../burger-ingredients/ingredient-page'
import Modal from '../modal/modal'
import Profile from '../../pages/profile'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'
import { SELECTED_INGREDIENT_CHANGED } from '../../services/actions/selected-ingredient'
import fetchIngredients from '../../utils/fetch-ingredients'
import { getUser } from '../../utils/get-user'
import { getCookie } from '../../utils/get-cookie'
import { refreshTokens } from '../../utils/refresh-tokens'
import setCookie from '../../utils/set-cookie'
import { AnonymousOnly } from '../../utils/anonymous-only'
import { AuthenticatedOnly } from '../../utils/authenticated-only'


function AppRoutes() {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const ingredients = useSelector(state => state.ingredients.ingredients)

	const backgroundLocation = location.state?.backgroundLocation

	useEffect(() => {
		dispatch(fetchIngredients())
	}, [dispatch])

	useEffect(() => {
		async function refreshTokenPair() {
			const accessToken = getCookie('accessToken')
			const refreshToken = getCookie('refreshToken')

			try {
				await dispatch(getUser(accessToken))
			} catch (error) {
				if (refreshToken) {
					const responseData = await refreshTokens(refreshToken)

					const newAccessToken = responseData.accessToken.split(' ')[1]
					const newRefreshToken = responseData.refreshToken

					setCookie('accessToken', newAccessToken, 20 / (24 * 60))
					setCookie('refreshToken', newRefreshToken, 1)
				}
			}
		}

		refreshTokenPair()
	}, [dispatch, navigate])

	const handleCloseModal = () => {
		dispatch({ type: SELECTED_INGREDIENT_CHANGED, payload: null })
		if (window.history.state && window.history.length > 1) {
		navigate(-1)
		} else {
		navigate('/')
		}
	}

	return (
		<>
		<Routes location={backgroundLocation || location}>
			<Route path='/' element={<Index />} />
			<Route element={<AnonymousOnly />}>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path='/reset-password' element={<ResetPassword />} />
			</Route>
			<Route path='/ingredients/:id' element={<IngredientPage />} />
			<Route element={<AuthenticatedOnly />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>

		{backgroundLocation && (
			<Routes>
			<Route
				path='/ingredients/:id'
				element={
				<Modal header='Детали ингридиента' handleClose={handleCloseModal}>
					<IngredientDetailsWrapper />
				</Modal>
				}
			/>
			</Routes>
		)}
		</>
	)

	function IngredientDetailsWrapper() {
		const id = location.pathname.split('/').pop()
		const selected = ingredients.find(it => it._id === id)
		if (!selected) return null
		return <IngredientDetails selectedIngredient={selected} />
	}
}

export default function App() {
	return (
		<main>
		<BrowserRouter>
			<DndProvider backend={HTML5Backend}>
			<AppRoutes />
			</DndProvider>
		</BrowserRouter>
		</main>
	)
}