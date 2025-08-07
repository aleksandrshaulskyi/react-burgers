import PropTypes from 'prop-types';
import { useState } from 'react'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredient from './burger-ingredient/burger-ingredient'
import BurgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientDetails from './ingredient-details/ingredient-details'
import Modal from '../modal/modal'


export default function BurgerIngredients(props) {
    const data = props.data
    const buns = data.filter(item => item.type === 'bun')
    const sauces = data.filter(item => item.type === 'sauce')
    const fillings = data.filter(item => item.type === 'main')

    const [selectedIngredient, setSelectedIngredient] = useState(null)

    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient)
    }

    const handleClose = () => {
        setSelectedIngredient(null)
    }

    return (
        <section className={BurgerIngredientsStyles.section}>
            <div className='mt-10'>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <div className='mt-5'>
                <div className={BurgerIngredientsStyles.tabsWrapper}>
                    <div className={BurgerIngredientsStyles.tab}>
                        <Tab value='buns'>
                            Булки
                        </Tab>
                    </div>
                    <div className={BurgerIngredientsStyles.tab}>
                        <Tab value='sauces'>
                            Соусы
                        </Tab>
                    </div>
                    <div className={BurgerIngredientsStyles.tab}>
                        <Tab value='filling'>
                            Начинки
                        </Tab>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className={BurgerIngredientsStyles.mainIngredientsContainer}>
                    <p className='text text_type_main-medium'>
                        Булки
                    </p>
                    <div className='mt-6 mr-4 mb-10 ml-4'>
                        <div className={BurgerIngredientsStyles.ingredientsContainer}>
                            {
                                buns.map(
                                    ingredient => (
                                        <BurgerIngredient
                                            key={ingredient._id}
                                            image={ingredient.image}
                                            price={ingredient.price}
                                            name={ingredient.name}
                                            onClick={() => handleIngredientClick(ingredient)}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                    <p className='text text_type_main-medium'>
                        Соусы
                    </p>
                    <div className='mt-6 mr-4 mb-10 ml-4'>
                        <div className={BurgerIngredientsStyles.ingredientsContainer}>
                            {
                                sauces.map(
                                    ingredient => (
                                        <BurgerIngredient
                                            key={ingredient._id}
                                            image={ingredient.image}
                                            price={ingredient.price}
                                            name={ingredient.name}
                                            onClick={() => handleIngredientClick(ingredient)}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                    <p className='text text_type_main-medium'>
                        Начинки
                    </p>
                    <div className='mt-6 mr-4 mb-10 ml-4'>
                        <div className={BurgerIngredientsStyles.ingredientsContainer}>
                            {
                                fillings.map(
                                    ingredient => (
                                        <BurgerIngredient
                                            key={ingredient._id}
                                            image={ingredient.image}
                                            price={ingredient.price}
                                            name={ingredient.name}
                                            onClick={() => handleIngredientClick(ingredient)}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        {
            selectedIngredient && (
                <Modal header='Детали ингридиента' handleClose={handleClose}>
                    <IngredientDetails selectedIngredient={selectedIngredient} />
                </Modal>
            )
        }
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
            carbohydrates: PropTypes.number
        })
    ).isRequired
};
