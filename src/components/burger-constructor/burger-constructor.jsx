import { useState } from 'react'

import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyles from './burger-constructor.module.css'

import BunThumbN200 from '../../images/name=Краторная булка N-200imobile.png'
import FillingThumbMeat from '../../images/name=Мясо бессмертных моллюсков Protostomiamobile.png'
import FillingThumbFalenialTree from '../../images/name=Плоды фалленианского дереваmobile.png'
import FillingThumbMineralRings from '../../images/name=Хрустящие минеральные кольцаmobile.png'
import Modal from '../modal/modal'
import OrderDetails from './order-details/order-details'
import SauceThumbTraditional from '../../images/name=Соус традиционный галактическийmobile.png'


export default function BurgerConstructor() {
    const [orderDetailsIsVisible, setOrderDetailsIsVisible] = useState(false)

    const handleOpen = () => {
        setOrderDetailsIsVisible(true)
    }

    const handleClose = () => {
        setOrderDetailsIsVisible(false)
    }

    const elements = [
        {type: null, isLocked: null, text: 'Соус традиционный галактический', price: 30, thumbnail: SauceThumbTraditional},
        {type: null, isLocked: null, text: 'Мясо бессмертных молюсков Protostomia', price: 300, thumbnail: FillingThumbMeat},
        {type: null, isLocked: null, text: 'Плоды Фалленианского дерева', price: 80, thumbnail: FillingThumbFalenialTree},
        {type: null, isLocked: null, text: 'Хрустящие минеральные кольца', price: 80, thumbnail: FillingThumbMineralRings},
        {type: null, isLocked: null, text: 'Хрустящие минеральные кольца', price: 80, thumbnail: FillingThumbMineralRings}
    ]
    return(
        <section className={BurgerConstructorStyles.section}>
            <div className='mt-25 mr-4 ml-4'>
                <div className={BurgerConstructorStyles.constructorContainer}>
                    <div className='mb-4 ml-8'>
                        <div className={BurgerConstructorStyles.elementContainer}>
                            <DragIcon type='primary' />
                            <ConstructorElement type='top' isLocked={true} text='Краторная булка N-200i (верх)' price={20} thumbnail={BunThumbN200} />
                        </div>
                    </div>
                    <div className={BurgerConstructorStyles.constructorScrolledContainer}>
                        {
                            elements.map(
                                (element, index) => (
                                    <div key={index} className='mb-4 ml-8'>
                                        <div className={BurgerConstructorStyles.elementContainer}>
                                            <DragIcon type='primary' />
                                            <ConstructorElement text={element.text} price={element.price} thumbnail={element.thumbnail} />
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className='mb-4 ml-8'>
                        <div className={BurgerConstructorStyles.elementContainer}>
                            <DragIcon type='primary' />
                            <ConstructorElement type='bottom' isLocked={true} text='Краторная булка N-200i (низ)' price={20} thumbnail={BunThumbN200} />
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
                        <Button htmlType='button' type='primary' size='large' onClick={handleOpen}>Оформить заказ</Button>
                    </div>
                </div>
            </div>
        {
            orderDetailsIsVisible &&
                (
                <Modal header='' handleClose={handleClose}>
                    <OrderDetails />
                </Modal>
                )
        }
        </section>   
    )
}
