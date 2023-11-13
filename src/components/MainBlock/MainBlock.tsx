import { FC, useEffect, useMemo, useState } from 'react'
import cls from './MainBlock.module.scss'
import { classNames } from '../../helpers/classNames'
import Button, { ThemeButton } from '../ui/Button/Button'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { IDay, ISchedule, config, settings } from '../../configs/config'
import Dropdown from '../ui/Dropdown/Dropdown'
import Input from '../ui/Input/Input'
import Exercise from '../Exercise/Exercise'
import { db } from '../../helpers/firebase'
// import { getDatabase, ref, onValue } from "firebase/database";
import { getDatabase, ref, child, get, onValue, set  } from "firebase/database";
import TextArea from '../ui/TextArea/TextArea'
 
interface MainBlockProps {
    className?: string
}
 
const MainBlock: FC<MainBlockProps> = ({ className }) => {

    const [day, setDay] = useState<number>(0);
    const [week, setWeek] = useState<number>(0);
    const [dataExercises, setDataExercises] = useState<any>(null);
    const [dataComments, setDataComments] = useState<any>(null);

    const schedule: ISchedule[] = config;
    const days = useMemo(() => {
        return schedule.map((el, index) => {
            return {label: el.day, value: index.toString()}
        })
    }, [schedule])

    const weeks = useMemo(() => {
        return schedule[0].exercises[0].weeks.map((el, index) => {
            return {label: (index+1).toString(), value: (index).toString()}
        })
    }, [schedule])

    useEffect(() => {
        // const dbRef = ref(db);
        // get(child(dbRef, `/exercises`)).then((snapshot) => {
        //   if (snapshot.exists()) {
        //     const data = snapshot.val();
        //     setDataExercises(data[days[day].label])
        //     console.log('data ::', data);
        //     // const dataDay = data[days[day].label];
        //   } else {
        //     console.log("No data available");
        //   }
        // }).catch((error) => {
        //   console.error(error);
        // });

        const starCountRef = ref(db, `/exercises/${settings.programmId}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setDataExercises(data[days[day].label]);
        });
        
        const commentRef = ref(db, `/comments/${settings.programmId}`);
        onValue(commentRef, (snapshot) => {
            const data = snapshot.val();
            setDataComments(data[days[day].label]);
        });
            
        
    }, [day])

    useEffect(() => {
        let diff = (settings.startProgramm - Date.now()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        diff = Math.abs(Math.round(diff)) - 1;
        const current = diff > 8 ? 0 : diff
        setWeek(current);
    }, [])
    
    const getExerciseName = (arr: IDay[]) => {
        return arr.map((el, index) => {
            const repeat = el.weeks[week].split('')[0];
            
            return <Exercise 
                key={index}
                name={el.name}
                exercises={el.weeks[week]}
                dataExercises={!!dataExercises ? dataExercises[el.name] : null}
                day={days[day].label}
                week={week}
                repeat={+repeat}
            />
        })
    }

    // const getDays = () => {
    //     return schedule.map((el, index) => {
    //         return <div key={index}>
    //                 <p>{el.day}</p>
    //                 <div className='flex'>
    //                     <div>
    //                         {getExerciseName(el.exercises)}
    //                     </div>
    //                 </div>
    //             </div>
    //     })
    // }
    
    const getDay = (id: number) => {
        const el = schedule[id]
        return <div className='flex flex-col h-[100%] justify-start mt-[40px]'>
                    <p className='mb-[10px] text-[26px] bg-[#672E5A] py-[10px] text-center'>{el.day}</p>
                    <div className='flex flex-col'>
                        { getExerciseName(el.exercises) }
                    </div>
                </div>
    }

    const textAreaHandler = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newVal = val.target.value;
        if(!!val === false) newVal = ' ';
        
        set(ref(db, `/comments/${settings.programmId}/${days[day].label}/${week}`), newVal);
    }

    return (
        <div className='flex flex-col flex-1 relative'>
            <div className='flex justify-end sticky top-0 bg-[#0a080d] pt-[30px] pb-[10px]'>
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
                    className='px-[20px]'
                />
            </div>
            {
                getDay(day)
            }
            <div className='pb-[20px] pt-[10px]'>
                <p className='text-[14px]'>Comment:</p>
                <TextArea 
                    value={dataComments ? dataComments[week] : ''}
                    className='bg-[#d3d3d33d] border-[1px] border-[#89878F]'
                    onChange={textAreaHandler}
                />
            </div>
        </div>
    )
}
 
export default MainBlock