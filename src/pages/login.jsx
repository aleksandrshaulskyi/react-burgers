import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../components/app-header/app-header'
import setCookie from '../utils/set-cookie'
import { BASE_YA_API_URL } from '../config'
import changeUser from '../utils/change-user'

import PagesStyles from './pages.module.css'


export default function Login() {
    const url = `${BASE_YA_API_URL}auth/login`

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [form, setForm] = useState(
        {
            'email': '',
            'password': ''
        }
    )

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleLogin = async () => {
        try {
            const responseData = await dispatch(changeUser(url, 'POST', form))
            const accessToken = responseData.accessToken.split(' ')[1]
            setCookie('accessToken', accessToken, 20 / (24 * 60))
            setCookie('refreshToken', responseData.refreshToken, 1)
            const params = new URLSearchParams(location.search);
            const redirect = params.get('redirect') || '/';
            navigate(redirect, { replace: true });
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <AppHeader />
            <div className={PagesStyles.wrapper}>
                <div className={PagesStyles.container}>
                    <p className='text text_type_main-medium'>Вход</p>
                    <form className={PagesStyles.form}>
                        <div className='mt-8'>
                            <Input type={'text'} name='email' value={form.email} placeholder='E-mail' onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Input type={'password'} name='password' value={form.password} placeholder='Пароль' icon={'ShowIcon'} onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Button htmlType='button' type='primary' size='medium' onClick={handleLogin}>Войти</Button>
                        </div>
                    </form>
                    <div className='mt-20'>
                        <div className={PagesStyles.linkContainer}>
                            <p className='text text_type_main-default text_color_inactive'>Вы новый пользователь?</p>
                            <Link className={PagesStyles.link} to='/register'>
                                <p className='text text_type_main-default text_color_inactive'>Зарегистрироваться</p>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className={PagesStyles.linkContainer}>
                            <p className='text text_type_main-default text_color_inactive'>Забыли пароль?</p>
                            <Link className={PagesStyles.link} to='/forgot-password'>
                                <p className='text text_type_main-default text_color_inactive'>Восстановить пароль</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}