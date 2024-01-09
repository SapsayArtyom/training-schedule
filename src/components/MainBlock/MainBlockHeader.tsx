import { FC, useEffect, useMemo, useState } from 'react'
import { IDays } from './MainBlock'
import Dropdown from '../ui/Dropdown/Dropdown'
import { settings } from '../../configs/config'
 
interface MainBlockHeaderProps {
    className?: string
    days: IDays[]
    day: string
    week: string
    weeks: IDays[]
    setDay: (val: any) => void
    setWeek: (val: any) => void
    setPorgrammId: (val: any) => void
}
 
const MainBlockHeader: FC<MainBlockHeaderProps> = ({ className, days, day, week, weeks, setDay, setWeek, setPorgrammId }) => {    

    const programms = useMemo(() => {
        let arr = [];
        for (let i = 0; i < settings.programmIds.length; i++) {
            arr.push({label: (i+1).toString(), value: settings.programmIds[i].toString()});
        }
        return arr
    }, [])

    return (
        <div className='flex justify-around fixed top-[100px] bg-[#0a080d] pt-[10px] pb-[10px] w-[100%]'>
                <Dropdown 
                    value={day.toString()}
                    onChange={setDay}
                    label='Day'
                    options={days}
                />
                <Dropdown 
                    value={week.toString()}
                    onChange={setWeek}
                    label='Week'
                    options={weeks}
                />
                <Dropdown 
                    value={settings.programmId.toString()}
                    onChange={setPorgrammId}
                    label='Prog'
                    options={programms}
                />
            </div>
    )
}
 
export default MainBlockHeader