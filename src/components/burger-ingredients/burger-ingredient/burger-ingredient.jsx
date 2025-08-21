import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientStyles from './burger-ingredient.module.css'

export default function BurgerIngredient({ _id, image, price, name, type, counter, onClick }) {
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: 'ingredient',
		item: { _id, image, price, name, type },
		collect: (monitor) => ({ isDragging: monitor.isDragging() }),
	}), [_id, image, price, name, type])

	return (
		<div
		className={BurgerIngredientStyles.ingredientContainer}
		onClick={onClick}
		ref={dragRef}
		style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}
		>
		{counter > 0 && <div className={BurgerIngredientStyles.counter}>{counter}</div>}

		<div className='mr-4 ml-4'>
			<div className={BurgerIngredientStyles.imageContainer}>
			<img src={image} alt={name} />
			</div>
		</div>

		<div className='mt-1 mb-1'>
			<div className={BurgerIngredientStyles.priceContainer}>
			<p className='text text_type_digits-default'>{price}</p>
			<CurrencyIcon type='primary' />
			</div>
		</div>

		<div className={BurgerIngredientStyles.textContainer}>
			<p className='text text_type_main-default'>{name}</p>
		</div>
		</div>
	)
}

BurgerIngredient.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
  counter: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}