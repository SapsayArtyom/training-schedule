import { FC, memo, useEffect, useState } from 'react'
import Input from '../ui/Input/Input'
import DataPicker from '../dataPicker/DataPicker'
import { IDateSize } from '../../pages/SizePage/SizePage'
 
interface WeightPartProps {
    className?: string
    setData?: (val: string, obj: IDateSize) => void
    data?: Record<string, string>
}
 
const WeightPart: FC<WeightPartProps> = ({ className, setData, data }) => {

    const [dataSize, setDataSize] = useState<IDateSize>(null);
    const [value, setValue] = useState<string>('');

    const inputHandler = (val: string) => {
        setData(val, dataSize)
    }

    useEffect(() => {
        if (data) {
            const a = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
            if (data?.[a]) setValue(data?.[a])
        }
    }, [data])
    
    const dataInputHandler = (obj: any) => {
        const {name, date} = obj;
        const a = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        setDataSize({name, date: a})
    }

    return (
        <div className='px-[13px] flex justify-between'>
                    <Input
                        value={value}
                        onChange={inputHandler}
                        className='text-[#fff] bg-[#9e77773d] border-[1px] border-[#89878F] text-center !h-[25px]'
                    />
                    <DataPicker 
                        wrapperClassName={'ml-[auto]'}
                        setDate={(date) => dataInputHandler({date, name: 'weight'})}
                    />
                </div>
    )
}
 
export default memo(WeightPart)