import { FC } from 'react'
import cls from './AboutPage.module.scss'
import { classNames } from '../../helpers/classNames'
 
interface AboutPageProps {
    className?: string
}
 
const AboutPage: FC<AboutPageProps> = ({ className }) => {
 
    return (
        <div className={classNames(cls.AboutPage, {}, ['container', 'text-orange'])}>
            <h1 className='text-xl'>klsgjmigseorgnorngidonrgio</h1>
        </div>
    )
}
 
export default AboutPage