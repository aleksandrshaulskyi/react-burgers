import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeaderStyles from './app-header.module.css'
import NavItem from './nav-item/nav-item';


export default function AppHeader() {
    const user = useSelector(state => state.user.user)

    return (
        <header className={AppHeaderStyles.header}>
            <div className={AppHeaderStyles.content}>
                <div className={AppHeaderStyles.containerLeft}>
                    <div name='constructor' className={AppHeaderStyles.navItemContainer}>
                        <NavItem
                            icon={BurgerIcon}
                            text='Конструктор'
                            to='/indevelopment'
                        />
                    </div>
                    <div name='orders' className={AppHeaderStyles.navItemContainer}>
                        <NavItem
                            icon={ListIcon}
                            text='Лента заказов'
                            to='/indevelopment'
                        />
                    </div>
                </div>
                <div className={AppHeaderStyles.containerCenter}>
                    <Link to='/'><Logo /></Link>
                </div>
                <div className={AppHeaderStyles.containerRight}>
                    <div name='account' className={AppHeaderStyles.navItemContainer}>
                        <NavItem
                            icon={ProfileIcon}
                            text='Личный кабинет'
                            to={user ? '/profile' : '/login'}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
