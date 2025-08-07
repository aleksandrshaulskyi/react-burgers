import { useState } from 'react';

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeaderStyles from './app-header.module.css'
import NavItem from './nav-item/nav-item';


export default function AppHeader() {
    const [activeItem, setActiveItem] = useState(null)
    
    const handleClick = (event) => {
        const name = event.currentTarget.getAttribute('name')
        setActiveItem(name)
    }

    return (
        <header className={AppHeaderStyles.header}>
            <div className={AppHeaderStyles.content}>
                <div className={AppHeaderStyles.containerLeft}>
                    <div name='constructor' className={AppHeaderStyles.navItemContainer} onClick={handleClick}>
                        <NavItem
                            icon={BurgerIcon}
                            isActive={activeItem === 'constructor'}
                            text='Конструктор'
                        />
                    </div>
                    <div name='orders' className={AppHeaderStyles.navItemContainer} onClick={handleClick}>
                        <NavItem
                            icon={ListIcon}
                            isActive={activeItem === 'orders'} 
                            text='Лента заказов'
                        />
                    </div>
                </div>
                <div className={AppHeaderStyles.containerCenter}>
                    <Logo />
                </div>
                <div className={AppHeaderStyles.containerRight}>
                    <div name='account' className={AppHeaderStyles.navItemContainer} onClick={handleClick}>
                        <NavItem
                            icon={ProfileIcon}
                            isActive={activeItem === 'account'}
                            text='Личный кабинет'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
