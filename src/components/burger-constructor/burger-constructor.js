import React from 'react'

import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyles from './burger-constructor.module.css'

import BunThumbN200 from '../../images/name=Краторная булка N-200imobile.png'
import SauceThumbTraditional from '../../images/name=Соус традиционный галактическийmobile.png'
import FillingThumbMeat from '../../images/name=Мясо бессмертных моллюсков Protostomiamobile.png'
import FillingThumbFalenialTree from '../../images/name=Плоды фалленианского дереваmobile.png'
import FillingThumbMineralRings from '../../images/name=Хрустящие минеральные кольцаmobile.png'


class BurgerConstructor extends React.Component {
    render() {
        return (
            <section className={BurgerConstructorStyles.section}>
                <div className='mt-25 mr-4 ml-4'>
                    <div className={BurgerConstructorStyles.constructorContainer}>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement type='top' isLocked={true} text='Краторная булка N-200i' price={20} thumbnail={BunThumbN200} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement isLocked={false} price={30} text='Соус традиционный галактический' thumbnail={SauceThumbTraditional} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement isLocked={false} price={300} text='Соус традиционный галактический' thumbnail={FillingThumbMeat} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement isLocked={false} price={80} text='Соус традиционный галактический' thumbnail={FillingThumbFalenialTree} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement isLocked={false} price={80} text='Соус традиционный галактический' thumbnail={FillingThumbMineralRings} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement isLocked={false} price={80} text='Соус традиционный галактический' thumbnail={FillingThumbMineralRings} />
                            </div>
                        </div>
                        <div className='mb-4 ml-8'>
                            <div className={BurgerConstructorStyles.elementContainer}>
                                <DragIcon type='primary' />
                                <ConstructorElement type='bottom' isLocked={true} text='Краторная булка N-200i' price={20} thumbnail={BunThumbN200} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className={BurgerConstructorStyles.priceContainer}>
                            <div className='mr-10'>
                                <div className={BurgerConstructorStyles.priceGroup}>
                                    <p className='text text_type_digits-medium'>600</p>
                                    <CurrencyIcon />
                                </div>
                            </div>
                            <Button htmlType='button' type='primary' size='large'>Оформить заказ</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BurgerConstructor;
