import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../components/app-header/app-header'
import { sendEmail } from '../utils/send-email'
import { IS_ALLOWED_CHANGED } from '../services/actions/allowed'

import PagesStyles from './pages.module.css'


export default function ForgotPassword() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSendEmail = async () => {
        const body = {'email': email}

        try {
            await sendEmail(body)
            dispatch({type: IS_ALLOWED_CHANGED, payload: true})
            navigate('/reset-password')
        }
        catch (error) {
            throw error
        }
        
    }

    return (
        <main>
            <AppHeader />
            <div className={PagesStyles.wrapper}>
                <div className={PagesStyles.container}>
                    <p className='text text_type_main-medium'>Восстановление пароля</p>
                    <div className='mt-8'>
                        <Input type={'text'} value={email} placeholder='Укажите e-mail' onChange={handleChange}/>
                    </div>
                    <div className='mt-8'>
                        <Button htmlType='button' type='primary' size='medium' onClick={handleSendEmail}>Восстановить</Button>
                    </div>
                    <div className='mt-20'>
                        <div className={PagesStyles.linkContainer}>
                            <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль</p>
                            <Link className={PagesStyles.link} path='/'>
                                <p className='text text_type_main-default text_color_inactive'>Войти</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}