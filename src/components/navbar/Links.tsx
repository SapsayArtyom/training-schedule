import { FC } from 'react'
import cls from './Navbar.module.scss'

import NavbarLink from './NavbarLink'
import AppLink from '../ui/AppLink/AppLink'
 
interface LunksProps {
    className?: string
}
 
const Links: FC<LunksProps> = ({ className }) => {
 
    return (
        <>
            <NavbarLink >
                <AppLink className={cls.active} to={'/'}>Home</AppLink>
            </NavbarLink>
            {/* <NavbarLink >
                        <AppLink className={cls.active} onClick={() => setCurrent(link2)} to={'/about'}>About us</AppLink>
                    </NavbarLink> */}
            <NavbarLink >
                <AppLink className={cls.active} to={'/portfolio'}>Portfolio</AppLink>
            </NavbarLink>
            <NavbarLink >
                <AppLink className={cls.active} to={'/contact'}>Contact us</AppLink>
            </NavbarLink>
        </>
    )
}
 
export default Links