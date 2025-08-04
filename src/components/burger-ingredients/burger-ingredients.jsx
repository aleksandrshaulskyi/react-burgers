import React from 'react'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredient from './burger-ingredient/burger-ingredient'
import BurgerIngredientsStyles from './burger-ingredients.module.css'


class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buns: [],
            sauces: [],
            fillings: []
        }
    }

    componentDidMount() {
        fetch('/utils/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const buns = data.filter(item => item.type === 'bun')
            const sauces = data.filter(item => item.type === 'sauce')
            const fillings = data.filter(item => item.type === 'main')
            this.setState({buns: buns, sauces: sauces, fillings: fillings})
        })
    }

    render() {
        const { buns, sauces, fillings } = this.state

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
                                            <BurgerIngredient image={ingredient.image} price={ingredient.price} name={ingredient.name} />
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
                                            <BurgerIngredient image={ingredient.image} price={ingredient.price} name={ingredient.name} />
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
                                            <BurgerIngredient image={ingredient.image} price={ingredient.price} name={ingredient.name} />
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BurgerIngredients;
