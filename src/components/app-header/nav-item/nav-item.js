import React from 'react'

import NavItemStyles from './nav-item.module.css'


class NavItem extends React.Component {
    render() {
        const Icon = this.props.icon
        const IconType = this.props.type
        const TextType = this.props.textType
        const Text = this.props.text

        return (
            <div className='pt-4 pr-5 pb-4 pl-5'>
                <div className={NavItemStyles.wrapper}>
                    <div className='mr-8'>
                        <Icon type={IconType}/>
                    </div>
                    <p className={TextType}>{Text}</p>
                </div>
            </div>
        )
    }
}

export default NavItem;
