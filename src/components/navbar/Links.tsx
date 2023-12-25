import { FC, useEffect } from 'react'
import cls from './Navbar.module.scss'

import NavbarLink from './NavbarLink'
import AppLink from '../ui/AppLink/AppLink'
 
interface LunksProps {
    className?: string
    onClick?: () => void
}
 
const Links: FC<LunksProps> = ({ className, onClick }) => {
    return (
        <>
            <NavbarLink onClick={onClick}>
                <AppLink  
                    className={cls.active} 
                    to={'/'}
                >
                    Home
                </AppLink>
            </NavbarLink>
            <NavbarLink onClick={onClick} >
                <AppLink className={cls.active} to={'/sizes'}>Sizes</AppLink>
            </NavbarLink>
        </>
    )
}
 
export default Links