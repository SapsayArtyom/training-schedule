import { FC } from 'react'
import cls from './MobileNavbar.module.scss'
import { classNames } from '../../helpers/classNames'
import Links from './Links'
 
interface MobileNavbarProps {
    className?: string
}
 
const MobileNavbar: FC<MobileNavbarProps> = ({ className }) => {
 
    return (
        <div className={classNames(cls.MobileNavbar, {}, [''])}>
            <Links />
            <p className='text-orange text-xl text-center mt-[70px]'>We are Fire</p>
        </div>
    )
}
 
export default MobileNavbar