import { FC, useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from '../../helpers/classNames'

import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger'
import Links from './Links'
import MobileNavbar from './MobileNavbar'
 
interface NavbarProps {
    className?: string
}
 
const Navbar: FC<NavbarProps> = ({ className }) => {

    const [isOpen, setOpen] = useState<boolean>(false);
 
    return (
        <>
            <div className={classNames(cls.Navbar, {}, [className, 'bg-background', 'justify-center', 'items-center', 'flex', 'w-[100%]', 'flex-col'])}>
                <div className='flex max-w-[1450px] justify-between w-[100%] items-center pt-[25px] pb-[25px]'>
                    <div className='flex items-center ml-[30px] select-none'>
                        <p className='text-white font-bold text-2xl'>FIRED UP</p>
                        <img className={cls.logo} src={logo} alt='logo' />
                    </div>
                    <div className='md:flex hidden'>
                        <Links />
                    </div>
                    <Hamburger onClick={() => setOpen(!isOpen)} />
                </div>
            
                {
                    isOpen ? <MobileNavbar /> : null
                }
            </div>
        </>

    )
}
 
export default Navbar