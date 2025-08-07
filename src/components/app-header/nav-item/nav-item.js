import NavItemStyles from './nav-item.module.css'


export default function NavItem(props) {
    const Icon = props.icon;
    const IconType = props.isActive ? 'primary' : 'secondary'
    const Text = props.text;
    const TextType = props.isActive ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'

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
