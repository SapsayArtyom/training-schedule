import { FC, useState } from 'react'
// import cls from './Hamburger.module.scss'
import { classNames } from '../../helpers/classNames'
import './Hamburger.scss'
 
interface HamburgerProps {
    className?: string
    onClick?: () => void
}
 
const Hamburger: FC<HamburgerProps> = ({ className, onClick }) => {

    const [isOpen, setOpen] = useState<boolean>(false);

    const btnHandle = () => {
        onClick();
        setOpen(!isOpen);
    }
 
    return (
        <div onClick={() => btnHandle()} className={classNames('wrapper_menu', {['open']: isOpen}, ['md:hidden', 'flex', 'mr-[30px]'])}>
            {/* <div className="line-menu half start"></div> */}
            <div className={classNames('line_menu', {}, ['start', 'half'])}></div>
            <div className={classNames('line_menu', {}, [])}></div>
            <div className={classNames('line_menu', {}, ['end', 'half'])}></div>
            {/* <div className="line-menu"></div>
            <div className="line-menu half end"></div> */}
        </div>
    )
}
 
export default Hamburger