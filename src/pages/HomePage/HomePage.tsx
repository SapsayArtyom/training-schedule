import { FC, useEffect } from 'react'
import cls from './HomePage.module.scss'
import { classNames } from '../../helpers/classNames'
import MainBlock from '../../components/MainBlock/MainBlock'
 
interface HomePageProps {
    className?: string
}
 
const HomePage: FC<HomePageProps> = ({ className }) => {
    useEffect(() => {
        console.log('HOME page');
        
    }, [])
 
    return (
        <div className={classNames(cls.HomePage, {}, [className, 'flex', 'items-center', 'flex-col', 'h-[100%]'])}>
            <MainBlock />
        </div>
    )
}
 
export default HomePage