import { FC } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps, NavLink } from 'react-router-dom'
 
interface AppLinkProps extends LinkProps {
    className?: string
    src?: string
    ref?: any
}
 
const AppLink: FC<AppLinkProps> = (props) => {

    const {to, className, children, src, ref, ...otherProps} = props;
 
    return (
        <NavLink
            ref={ref} 
            to={to} 
            className={(isActive) =>{ 
                return classNames(cls.AppLink, {[cls.active]: isActive.isActive }, [])
            }} 
            {...otherProps}
        >
            {children}
        </NavLink>
    )
}
 
export default AppLink