import { FC } from 'react'
import cls from './SizePage.module.scss'
import { classNames } from '../../helpers/classNames'
import Input from '../../components/ui/Input/Input'
 
interface SizePageProps {
    className?: string
}
 
const SizePage: FC<SizePageProps> = ({ className }) => {

    const inputHandler = () => {

    }
 
    return (
        <div className={classNames(cls.SizePage, {}, ['container', 'mt-[50px]'])}>
            <div className='mb-[20px]'>
                <p className='mb-[10px] text-[26px] bg-[#672E5A] py-[10px] text-center text-xl'>Вес</p>
                <div className='px-[13px]'>
                    <Input />
                </div>
            </div>
            <div>
                <p className='mb-[10px] text-[26px] bg-[#672E5A] py-[10px] text-center text-xl'>Замеры</p>
                <div className='px-[13px]'>
                    <Input 
                        label='Грудь'
                    />
                    <Input 
                        label='Живот Верх'
                    />
                    <Input 
                        label='Живот Середина'
                    />
                    <Input 
                        label='Живот Низ'
                    />
                    <Input 
                        label='Бёдра'
                    />
                    <Input 
                        label='Нога Л'
                    />
                    <Input 
                        label='Нога П'
                    />
                    <Input 
                        label='Рука Л'
                    />
                    <Input 
                        label='Рука П'
                    />
                </div>
            </div>
        </div>
    )
}
 
export default SizePage