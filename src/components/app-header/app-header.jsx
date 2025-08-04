import React from 'react';

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeaderStyles from './app-header.module.css'
import NavItem from './nav-item/nav-item';


class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeButton: ''
        }
    }

    render() {
        return (
            <header className={AppHeaderStyles.header}>
                <div className={AppHeaderStyles.content}>
                    <div className={AppHeaderStyles.containerLeft}>
                        <NavItem icon={BurgerIcon} type='primary' textType='text text_type_main-default' text='Конструктор' />
                        <NavItem icon={ListIcon} type='secondary' textType='text text_type_main-default text_color_inactive' text='Лента заказов' />
                    </div>
                    <div className={AppHeaderStyles.containerCenter}>
                        <Logo />
                    </div>
                    <div className={AppHeaderStyles.containerRight}>
                        <NavItem icon={ProfileIcon} type='secondary' textType='text text_type_main-default text_color_inactive' text='Личный кабинет' />
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;
