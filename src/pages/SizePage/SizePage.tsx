import { FC, useCallback, useEffect, useState } from 'react'
import cls from './SizePage.module.scss'
import { classNames } from '../../helpers/classNames'
import Input from '../../components/ui/Input/Input'
import SizePart from '../../components/sizePart/sizePart'
import DataPicker from '../../components/dataPicker/DataPicker'
import { settings } from '../../configs/config'
import { db } from '../../helpers/firebase'
import { ref, onValue, set } from "firebase/database";
import WeightPart from '../../components/sizePart/weightPart'
 
interface SizePageProps {
    className?: string
}

export interface IDateSize {
    date: string
    name: string
}
 
const SizePage: FC<SizePageProps> = ({ className }) => {

    const titles = ['Грудь', 'Живот верх', 'Живот середина', 'Живот низ', 'Бёдра', 'Нога Л', 'Нога П', 'Рука Л', 'Рука П',];

    const [dataSize, setDataSize] = useState<any>();
    const [dateWeight, setDateWeight] = useState<IDateSize>(null);

    useEffect(() => {
        const starCountRef = ref(db, `/measurements/1`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setDataSize(data);
            console.log('data ::', data);
        });
    }, [])

    const getParts = () => {
        return titles.map((el, index) => {
            return <SizePart 
                label={el} 
                key={index} 
                setData={setData}
                data={dataSize ? dataSize?.[el] : null}
            />
        })
    }

    const setData = useCallback((val: string, obj: IDateSize) => {
        set(ref(db, `/measurements/1/${obj.name}/${obj.date}`), val)
    }, [])
 
    return (
        <div className={classNames(cls.SizePage, {}, ['container'])}>
            <div className='mb-[20px]'>
                <p className='mb-[10px] text-[26px] bg-[#672E5A] py-[10px] text-center text-xl'>Вес</p>
                <WeightPart 
                    setData={setData}
                    data={dataSize ? dataSize?.weight : null}
                />
            </div>
            <div>
                <p className='mb-[10px] text-[26px] bg-[#672E5A] py-[10px] text-center text-xl'>Замеры</p>
                <div>
                    {
                        getParts()
                    }
                </div>
            </div>
        </div>
    )
}
 
export default SizePage