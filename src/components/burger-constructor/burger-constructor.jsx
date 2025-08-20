import { useMemo, useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerConstructorStyles from './burger-constructor.module.css'

import { addIngredient, moveIngredient, removeIngredient } from '../../services/actions/constructor'
import Modal from '../modal/modal'
import OrderDetails from './order-details/order-details'
import placeOrder from '../../utils/place-order'
import ConstructorItem from './constructor-item/constructor-item'

export default function BurgerConstructor() {
	const dispatch = useDispatch()

	const constructorIngredients = useSelector(
		state => state.burgerConstructor.constructorIngredients
	)
	const orderData = useSelector(state => state.order.orderData)

	const bun = useMemo(
		() => constructorIngredients.find(it => it.type === 'bun') || null,
		[constructorIngredients]
	)
	const fillings = useMemo(
		() => constructorIngredients.filter(it => it.type !== 'bun'),
		[constructorIngredients]
	)

	const moveFilling = useCallback((from, to) => {
		dispatch(moveIngredient(from, to))
	}, [dispatch])

	const handleRemoveFilling = useCallback((uid) => {
		dispatch(removeIngredient(uid))
	}, [dispatch])

	const [{ isOver }, dropRef] = useDrop(() => ({
		accept: 'ingredient',
		collect: monitor => ({ isOver: monitor.isOver() }),
		drop: (item) => {
		dispatch(addIngredient(item))
		},
	}), [dispatch])

	const [orderDetailsIsVisible, setOrderDetailsIsVisible] = useState(false)

	const total = useMemo(() => {
		const fillingsSum = fillings.reduce((acc, it) => acc + (it?.price || 0), 0)
		const bunPrice = bun ? bun.price * 2 : 0
		return fillingsSum + bunPrice
	}, [fillings, bun])

	const ingredientIds = useMemo(() => {
		if (!bun && fillings.length === 0) return []
		const ids = []
		if (bun) ids.push(bun._id)
		fillings.forEach(f => ids.push(f._id))
		if (bun) ids.push(bun._id)
		return ids
	}, [bun, fillings])

	const handlePlaceOrder = useCallback(() => {
		dispatch(placeOrder({'ingredients': ingredientIds}))
	}, [dispatch, ingredientIds])

	useEffect(() => {
		if (orderData) setOrderDetailsIsVisible(true)
	}, [orderData])

	const className = `${BurgerConstructorStyles.constructorContainer} ${
		isOver ? BurgerConstructorStyles.over : ''
	}`

	return (
		<section className={BurgerConstructorStyles.section}>
		<div className='mt-25 mr-4 ml-4'>
			<div
			className={className}
			ref={dropRef}
			>
			{bun && (
				<div className='mb-4 mr-8 ml-8'>
					<div className={BurgerConstructorStyles.elementContainer}>
						<ConstructorElement
						type='top'
						isLocked
						text={`${bun.name} (верх)`}
						price={bun.price}
						thumbnail={bun.image}
						/>
					</div>
				</div>
			)}

			<div className={BurgerConstructorStyles.constructorScrolledContainer}>
				{fillings.map((element, index) => (
				<div key={element.uid} className='mb-4 mr-8 ml-8'>
					<ConstructorItem
					element={element}
					index={index}
					moveFilling={moveFilling}
					onRemove={handleRemoveFilling}
					/>
				</div>
				))}
			</div>

			{bun && (
				<div className='mb-4 mr-8 ml-8'>
					<div className={BurgerConstructorStyles.elementContainer}>
						<ConstructorElement
						type='bottom'
						isLocked
						text={`${bun.name} (низ)`}
						price={bun.price}
						thumbnail={bun.image}
						/>
					</div>
				</div>
			)}
			</div>

			{constructorIngredients.length > 0 && (
			<div className='mt-10'>
				<div className={BurgerConstructorStyles.priceContainer}>
				<div className='mr-10'>
					<div className={BurgerConstructorStyles.priceGroup}>
					<p className='text text_type_digits-medium'>{total}</p>
					<CurrencyIcon />
					</div>
				</div>
				<Button
					htmlType='button'
					type='primary'
					size='large'
					onClick={handlePlaceOrder}
				>
					Оформить заказ
				</Button>
				</div>
			</div>
			)}
		</div>

		{orderDetailsIsVisible && orderData && (
			<Modal header='' handleClose={() => setOrderDetailsIsVisible(false)}>
				<OrderDetails orderNumber={orderData.order.number} />
			</Modal>
		)}
		</section>
	)
}