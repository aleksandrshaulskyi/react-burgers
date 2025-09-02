import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../components/app-header/app-header'
import setCookie from '../utils/set-cookie'
import { BASE_YA_API_URL } from '../config'
import changeUser from '../utils/change-user'

import PagesStyles from './pages.module.css'


export default function Register() {
    const url = `${BASE_YA_API_URL}auth/register`
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const handleRegister = async () => {
        try {
            const response_data = await dispatch(changeUser(url, 'POST', form))
            const accessToken = response_data.accessToken.split(' ')[1]
            setCookie('accessToken', accessToken, 20 / (24 * 60))
            setCookie('refreshToken', response_data.refreshToken, 1)
            navigate('/')
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <main>
            <AppHeader />
            <div className={PagesStyles.wrapper}>
                <div className={PagesStyles.container}>
                    <p className='text text_type_main-medium'>Регистрация</p>
                    <form className={PagesStyles.form}>
                        <div className='mt-8'>
                            <Input type={'text'} name='name' placeholder='Имя' value={form.name} onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Input type={'text'} name='email' placeholder='E-mail' value={form.email} onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Input type={'password'} name='password' placeholder='Пароль' value={form.password} icon={'ShowIcon'} onChange={handleChange}/>
                        </div>
                        <div className='mt-8'>
                            <Button htmlType='button' type='primary' size='medium' onClick={handleRegister}>Зарегистрироваться</Button>
                        </div>
                    </form>
                    <div className='mt-20'>
                        <div className={PagesStyles.linkContainer}>
                            <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</p>
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
