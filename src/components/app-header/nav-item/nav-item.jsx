import { NavLink } from 'react-router-dom'

import NavItemStyles from './nav-item.module.css'


export default function NavItem(props) {
    const Icon = props.icon;
    const Text = props.text;

    return (
        <div className='pt-4 pr-5 pb-4 pl-5'>
            <NavLink to={props.to} className={NavItemStyles.wrapper}>
                {
                    ({isActive}) => {
                        const IconType = isActive ? 'primary' : 'secondary'
                        const TextType = isActive ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'

                        return (
                            <>
                                <div className='mr-8'>
                                    <Icon type={IconType}/>
                                </div>
                                <p className={TextType}>{Text}</p>
                            </>
                        ) 
                    }
                }
            </NavLink>
        </div>
    )
}
