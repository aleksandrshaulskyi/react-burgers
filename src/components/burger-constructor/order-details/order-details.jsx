import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import OrderDetailsStyles from './order-details.module.css'


export default function OrderDetails() {
    return (
        <div className={OrderDetailsStyles.wrapper}>
            <div className={OrderDetailsStyles.orderNumberContainer}>
                <div className='mb-8'>
                    <p className='text text_type_digits-large'>8888</p>
                </div>
            </div>
            <div className={OrderDetailsStyles.textContainer}>
                <div className='mb-15'>
                    <p className='text text_type_main-medium'>идентификатор заказа</p>
                </div>
            </div>
            <div className={OrderDetailsStyles.confirmationButton}>
                <div className='mb-15'>
                    <CheckMarkIcon type='primary' />
                </div>
            </div>
            <div className={OrderDetailsStyles.textContainer}>
                <div className='mb-8'>
                    <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
                </div>
            </div>
            <div className={OrderDetailsStyles.textContainer}>
                <div className='mb-8'>
                    <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        </div>
    )
}