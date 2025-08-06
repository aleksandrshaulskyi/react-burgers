import PropTypes from 'prop-types'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientStyles from './burger-ingredient.module.css'


export default function BurgerIngredient({ image, price, name, counter, onClick }) {
    return (
        <div className={BurgerIngredientStyles.ingredientContainer} onClick={onClick}>
            {
            counter > 0 ? (
                <div className={BurgerIngredientStyles.counter}>
                    {counter}
                </div>
                )
                : null
            }
            <div className='mr-4 ml-4'>
                <div className={BurgerIngredientStyles.imageContainer}>
                    <img src={image} alt={name}></img>
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
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  counter: PropTypes.number // optional
};
