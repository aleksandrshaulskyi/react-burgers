import PropTypes from 'prop-types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredient from './burger-ingredient/burger-ingredient'
import BurgerIngredientsStyles from './burger-ingredients.module.css'
import { SELECTED_INGREDIENT_CHANGED } from '../../services/actions/selected-ingredient'
import IngredientDetails from './ingredient-details/ingredient-details'
import Modal from '../modal/modal'

export default function BurgerIngredients({ data }) {
	const dispatch = useDispatch()
	const selectedIngredient = useSelector(state => state.selectedIngredient.selectedIngredient)
	const constructorIngredients = useSelector(state => state.burgerConstructor.constructorIngredients || [])

	const containerRef = useRef(null)
	const bunsRef = useRef(null)
	const saucesRef = useRef(null)
	const fillingsRef = useRef(null)
	const [activeTab, setActiveTab] = useState('buns')

	const buns = data.filter(item => item.type === 'bun')
	const sauces = data.filter(item => item.type === 'sauce')
	const fillings = data.filter(item => item.type === 'main')

	const counters = useMemo(() => {
		const map = Object.create(null)
		let bunId = null
		for (const it of constructorIngredients) {
		if (it.type === 'bun') {
			bunId = it._id
		} else if (it._id) {
			map[it._id] = (map[it._id] || 0) + 1
		}
		}
		if (bunId) map[bunId] = 2
		return map
	}, [constructorIngredients])

	const handleIngredientClick = (ingredient) => {
		dispatch({ type: SELECTED_INGREDIENT_CHANGED, payload: ingredient })
	}

	const handleClose = () => {
		dispatch({ type: SELECTED_INGREDIENT_CHANGED, payload: null })
	}

	useEffect(() => {
		const el = containerRef.current
		if (!el) return

		let ticking = false
		const onScroll = () => {
		if (ticking) return
		ticking = true
		requestAnimationFrame(() => {
			ticking = false
			const containerTop = el.getBoundingClientRect().top

			const d = (r) => {
			if (!r?.current) return Number.POSITIVE_INFINITY
			return Math.abs(r.current.getBoundingClientRect().top - containerTop)
			}

			const distances = [
			{ key: 'buns', dist: d(bunsRef) },
			{ key: 'sauces', dist: d(saucesRef) },
			{ key: 'filling', dist: d(fillingsRef) },
			]

			const nearest = distances.reduce((a, b) => (a.dist <= b.dist ? a : b))
			if (nearest.key !== activeTab) setActiveTab(nearest.key)
		})
		}

		onScroll()
		el.addEventListener('scroll', onScroll, { passive: true })
		return () => el.removeEventListener('scroll', onScroll)
	}, [activeTab])

	const scrollTo = (key) => {
		const map = { buns: bunsRef, sauces: saucesRef, filling: fillingsRef }
		const target = map[key]?.current
		if (target) {
		target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<section className={BurgerIngredientsStyles.section}>
		<div className='mt-10'>
			<p className='text text_type_main-large'>Соберите бургер</p>
		</div>

		<div className='mt-5'>
			<div className={BurgerIngredientsStyles.tabsWrapper}>
			<div className={BurgerIngredientsStyles.tab}>
				<Tab value='buns' active={activeTab === 'buns'} onClick={() => scrollTo('buns')}>
				Булки
				</Tab>
			</div>
			<div className={BurgerIngredientsStyles.tab}>
				<Tab value='sauces' active={activeTab === 'sauces'} onClick={() => scrollTo('sauces')}>
				Соусы
				</Tab>
			</div>
			<div className={BurgerIngredientsStyles.tab}>
				<Tab value='filling' active={activeTab === 'filling'} onClick={() => scrollTo('filling')}>
				Начинки
				</Tab>
			</div>
			</div>
		</div>

		<div className='mt-10'>
			<div ref={containerRef} className={BurgerIngredientsStyles.mainIngredientsContainer}>
			<p ref={bunsRef} className='text text_type_main-medium'>Булки</p>
			<div className='mt-6 mr-4 mb-10 ml-4'>
				<div className={BurgerIngredientsStyles.ingredientsContainer}>
				{buns.map(ingredient => (
					<BurgerIngredient
					key={ingredient._id}
					_id={ingredient._id}
					type={ingredient.type}
					image={ingredient.image}
					price={ingredient.price}
					name={ingredient.name}
					counter={counters[ingredient._id] || 0}
					onClick={() => handleIngredientClick(ingredient)}
					/>
				))}
				</div>
			</div>

			<p ref={saucesRef} className='text text_type_main-medium'>Соусы</p>
			<div className='mt-6 mr-4 mb-10 ml-4'>
				<div className={BurgerIngredientsStyles.ingredientsContainer}>
				{sauces.map(ingredient => (
					<BurgerIngredient
					key={ingredient._id}
					_id={ingredient._id}
					type={ingredient.type}
					image={ingredient.image}
					price={ingredient.price}
					name={ingredient.name}
					counter={counters[ingredient._id] || 0}
					onClick={() => handleIngredientClick(ingredient)}
					/>
				))}
				</div>
			</div>

			<p ref={fillingsRef} className='text text_type_main-medium'>Начинки</p>
			<div className='mt-6 mr-4 mb-10 ml-4'>
				<div className={BurgerIngredientsStyles.ingredientsContainer}>
				{fillings.map(ingredient => (
					<BurgerIngredient
					key={ingredient._id}
					_id={ingredient._id}
					type={ingredient.type}
					image={ingredient.image}
					price={ingredient.price}
					name={ingredient.name}
					counter={counters[ingredient._id] || 0}
					onClick={() => handleIngredientClick(ingredient)}
					/>
				))}
				</div>
			</div>
			</div>
		</div>

		{selectedIngredient && (
			<Modal header='Детали ингридиента' handleClose={handleClose}>
			<IngredientDetails selectedIngredient={selectedIngredient} />
			</Modal>
		)}
		</section>
	)
	}

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
		_id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		type: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
		image_large: PropTypes.string,
		calories: PropTypes.number,
		proteins: PropTypes.number,
		fat: PropTypes.number,
		carbohydrates: PropTypes.number,
		})
	).isRequired,
}
