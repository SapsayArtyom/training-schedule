import { FC, ReactNode } from 'react'
import cls from './NavbarLink.module.scss'
import { classNames } from '../../helpers/classNames'
 
interface NavbarLinkProps {
    className?: string
    children: ReactNode
    src?: string
}
 
const NavbarLink: FC<NavbarLinkProps> = ({ className, children, src }) => {
 
    return (
        <div className={classNames(cls.NavbarLink, {}, [className])}>
            {/* <img className={cls.img} src={src} /> */}
            {children}
        </div>
    )
}
 
export default NavbarLink