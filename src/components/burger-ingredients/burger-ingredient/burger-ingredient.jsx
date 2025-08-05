import PropTypes from 'prop-types'
import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientStyles from './burger-ingredient.module.css'


class BurgerIngredient extends React.Component {
    render() {
        const Image = this.props.image
        const Price = this.props.price
        const Name = this.props.name
        const Counter = this.props.counter

        return (
            <div className={BurgerIngredientStyles.ingredientContainer}>
                {
                Counter > 0 ? (
                    <div className={BurgerIngredientStyles.counter}>
                        {Counter}
                    </div>
                    )
                    : null
                }
                <div className='mr-4 ml-4'>
                    <div className={BurgerIngredientStyles.imageContainer}>
                        <img src={Image} alt={Name}></img>
                    </div>
                </div>
                <div className='mt-1 mb-1'>
                    <div className={BurgerIngredientStyles.priceContainer}>
                        <p className='text text_type_digits-default'>{Price}</p>
                        <CurrencyIcon type='primary' />
                    </div>
                </div>
                <div className={BurgerIngredientStyles.textContainer}>
                    <p className='text text_type_main-default'>{Name}</p>
                </div>
            </div>
        )
    }
}

BurgerIngredient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  counter: PropTypes.number // optional
};

export default BurgerIngredient;
