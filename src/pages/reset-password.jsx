import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../components/app-header/app-header'
import { resetPassword } from '../utils/reset-password'

import PagesStyles from './pages.module.css'


export default function ResetPassword() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAllowed = useSelector(state => state.isAllowed.isAllowed)

    useEffect(() => {if (!isAllowed) {navigate('/')}}, [navigate, isAllowed])

    const [form, setForm] = useState(
        {
            password: '',
            token: ''
        }
    )

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSave = async () => {
        try {
            await dispatch(resetPassword(form))
            navigate('/login')
        }
        catch(error) {
            throw error
        }
    }

    return (
        <main>
            <AppHeader />
            <div className={PagesStyles.wrapper}>
                <div className={PagesStyles.container}>
                    <p className='text text_type_main-medium'>Восстановление пароля</p>
                    <form className={PagesStyles.form}>
                        <div className='mt-8'>
                            <Input type={'text'} name='password' value={form.password} placeholder='Введите новый пароль' onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Input type={'text'} name='token' value={form.token} placeholder='Введите код из письма' onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Button htmlType='button' type='primary' size='medium' onClick={handleSave}>Сохранить</Button>
                        </div>
                    </form>
                    <div className='mt-20'>
                        <div className={PagesStyles.linkContainer}>
                            <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль</p>
                            <Link className={PagesStyles.link} to='/login'>
                                <p className='text text_type_main-default text_color_inactive'>Войти</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}