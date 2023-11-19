import { FC } from 'react'
 
interface ProgressBarProps {
    className?: string
    progress: number
}
 
const ProgressBar: FC<ProgressBarProps> = ({ className, progress }) => {
    return (
        <div className={'flex flex-col items-center justify-center w-[100%]'}>
            <div className={'w-[100%] h-[15px] bg-[#EDEFF0] rounded-[12px] relative overflow-hidden'}>
                <div className='absolute left-0 h-[100%] rounded-[12px]' style={{width: `${progress}%`, backgroundImage: 'linear-gradient(to left, #884185, #2F5294)'}}></div>
            </div>
        </div>
    )
}
 
export default ProgressBar