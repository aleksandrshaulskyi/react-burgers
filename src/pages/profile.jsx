import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../components/app-header/app-header'
import { getCookie } from '../utils/get-cookie'
import { BASE_YA_API_URL } from '../config'
import changeUser from '../utils/change-user'

import ProfileStyles from './profile.module.css'


export default function Profile() {
    const user = useSelector(state => state.user.user)
    const inputRef = useRef()

    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    useEffect(
        () => {
            if (user) {
                setForm({name: user.name, email: user.email, password: ''})
            }
        }, [user]
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleIconClick = async () => {
        const key = inputRef.current.name
        const newValue = inputRef.current.value
        const accessToken = getCookie('accessToken')

        const url = `${BASE_YA_API_URL}auth/user`

        await dispatch(changeUser(url, 'PATCH', {[key]: newValue}, accessToken))
    }

    const handleLogout = async () => {
        const refreshToken = getCookie('refreshToken')
        const url = `${BASE_YA_API_URL}auth/logout`

        try {
            await dispatch(changeUser(url, 'POST', {'token': refreshToken}))

            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')

            navigate('/')
        }
        catch (error) {
            throw error
        }
    }

    return (
        <main>
            <AppHeader />
            <div className={ProfileStyles.wrapper}>
                <div className={ProfileStyles.section}>
                    <Link to='/profile'>
                        <p className='text text_type_main-large'>
                            Профиль
                        </p>
                    </Link>
                    <Link to='/profile/orders'>
                        <p className='text text_type_main-large'>
                            История заказов
                        </p>
                    </Link>
                    <p className='text text_type_main-large' onClick={handleLogout}>
                        Выход
                    </p>
                    <div className='mt-20'>
                        <p className='text text_type_main-default text_color_inactive'>
                            В этом разделе вы можете изменить свои персональные данные
                        </p>
                    </div>
                </div>
                <div className={ProfileStyles.section}>
                    <div className={ProfileStyles.container}>
                        <Input 
                            type={'text'}
                            name='name'
                            value={form.name}
                            placeholder='Имя'
                            icon={'EditIcon'}
                            onChange={handleChange}
                            onIconClick={handleIconClick}
                            ref={inputRef}
                        />
                        <div className='mt-8'>
                            <Input 
                            type={'text'}
                            name='email'
                            value={form.email}
                            placeholder='Логин'
                            icon={'EditIcon'}
                            onChange={handleChange}
                            onIconClick={handleIconClick}
                            ref={inputRef}
                        />
                        </div>
                        <div className='mt-8'>
                            <Input 
                            type={'password'}
                            name='password'
                            value={form.password}
                            placeholder='Пароль'
                            icon={'EditIcon'}
                            onChange={handleChange}
                            onIconClick={handleIconClick}
                            ref={inputRef}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}