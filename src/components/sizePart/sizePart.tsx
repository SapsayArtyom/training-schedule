import { FC, useEffect, useState } from 'react'
import Input from '../ui/Input/Input'
import DataPicker from '../dataPicker/DataPicker'
import { IDateSize } from '../../pages/SizePage/SizePage'
 
interface SizePartProps {
    className?: string
    label: string
    setData?: (val: string, obj: IDateSize) => void
    data?: Record<string, string>
}
 
const SizePart: FC<SizePartProps> = ({ className, label, data, setData }) => {

    const [dataSize, setDataSize] = useState<IDateSize>(null);
    const [value, setValue] = useState<string>('');
    
    useEffect(() => {
        if (data) {
            const a = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
            if (data?.[a]) setValue(data?.[a])
        }
    }, [data])

    const inputHandler = (val: string) => {
        setData(val, dataSize)
    }

    const dataInputHandler = (obj: any) => {
        const {name, date} = obj;
        const a = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        setDataSize({name, date: a})
    }
    
    return (
        <div className='border-[#672E5A] border-solid border-b-[1px] px-[13px] flex justify-between items-center'>
            <Input 
                value={value}
                onChange={inputHandler}
                label={label} 
                className='text-[#fff] bg-[#d3d3d33d] border-[1px] border-[#89878F] text-center !h-[25px] mb-[20px]'
            />
            <DataPicker 
                wrapperClassName={'ml-[auto]'} 
                setDate={(date) => dataInputHandler({date, name: label})}
            />
        </div>
    )
}
 
export default SizePart