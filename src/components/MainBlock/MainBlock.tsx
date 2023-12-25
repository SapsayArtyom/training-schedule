import { FC, useEffect, useMemo, useState } from 'react'
import { IDay, ISchedule, config, settings } from '../../configs/config'
import Dropdown from '../ui/Dropdown/Dropdown'
import Exercise from '../Exercise/Exercise'
import { db } from '../../helpers/firebase'
import { getDatabase, ref, child, get, onValue, set  } from "firebase/database";
import TextArea from '../ui/TextArea/TextArea'
import ProgressBar from '../progressBar/ProgressBar'
 
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
        // return schedule[0].exercises[0].weeks.map((el, index) => {
        //     return {label: (index+1).toString(), value: (index).toString()}
        // })
        let arr = [];
        for (let index = 0; index < settings.durationProgramm; index++) {
            arr.push({label: (index+1).toString(), value: (index).toString()});
        }
        return arr
    }, [schedule])

    useEffect(() => {
        const starCountRef = ref(db, `/exercises/${settings.programmId}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setDataExercises(data);
            // console.log('data ::', data);
        });
        
        const commentRef = ref(db, `/comments/${settings.programmId}`);
        onValue(commentRef, (snapshot) => {
            const data = snapshot.val();
            setDataComments(data[days[day].label]);
        });
    }, [day])    

    useEffect(() => {
        let diff = (settings.startProgramm - Date.now()) / 1000;
        let diffWeek = diff / (60 * 60 * 24 * 7);
        let diffDay = diff / (60 * 60 * 24) % 7;
        diffWeek = Math.abs(Math.ceil(diffWeek));
        diffDay = Math.abs(Math.ceil(diffDay));
        const current = diffWeek >= settings.durationProgramm ? 0 : diffWeek;
        const currentDay = diffDay > 6 ? 0 : getCurrentDay(diffDay);
        
        setWeek(current);
        setDay(currentDay);
        
        // const date = '2019-09-29T00:00:00.000Z'
        // let currentDate = Date.parse(new Date());
        // let days = (currentDate - Date.parse(date))/86400000;       //86400000 - ms в дне
        // console.log(Math.round(days))
    }, [])    

    const getCurrentDay = (day: number) => {
        
        switch (true) {
            case (day === 0) :
                return 0
                break;
            case day <= 2 :
                return 1
                break;
            case day > 2 :
                return 2
                break;
        
            default:
                return 0
                break;
        }
    }
    
    const getExerciseName = (arr: IDay[]) => {
        
        let count = 0;
        const arrEx = arr.map((el, index) => {
            const repeat = el.weeks[week].split('')[0];
            count += Number(repeat);
            return <Exercise 
                key={index}
                name={el.name}
                link={el.link}
                exercises={el.weeks[week]}
                dataExercises={!!dataExercises ? dataExercises[days[day].label][el.name] : null}
                day={days[day].label}
                week={week}
                repeat={+repeat}
                data={dataExercises}
            />
        })

        return arrEx;
    }
    
    const getDay = (id: number) => {
        const el = schedule[id];
        return <div className='flex flex-col h-[100%] justify-start mt-[70px]'>
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

    const getProgress = (arr: IDay[]): number => {
        let count = 0;
        let progress = 0;
        arr.forEach((el) => {
            const repeat = el.weeks[week].split('')[0];
            count += Number(repeat);
        })
        const currentExercises = dataExercises?.[days[day].label];
        let currentCount = 0;
        if (currentExercises) {
            Object.values(currentExercises).forEach((el: any) => currentCount += Number(el.repeat[week] || 0))
            const cof = 100 / count;
            progress = Math.round(currentCount * cof);
        }
        
        return progress;
    }

    return (
        <div className='flex flex-col flex-1 relative w-[100%]'>
            <div className='flex justify-end fixed top-[100px] bg-[#0a080d] pt-[10px] pb-[10px] w-[100%]'>
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
                    className='px-[30px]'
                />
            </div>
            {
                getDay(day)
            }
            <div className='pb-[70px] pt-[10px] px-[13px]'>
                <p className='text-[14px]'>Comment:</p>
                <TextArea 
                    value={dataComments?.[week] ? dataComments[week] : ''}
                    className='bg-[#d3d3d33d] border-[1px] border-[#89878F]'
                    onChange={textAreaHandler}
                />
            </div>
            <div className='fixed bottom-0 w-[100%] p-[13px] bg-[#0a080d]'>
                <ProgressBar progress={getProgress(schedule[day].exercises)} />
            </div>
        </div>
    )
}
 
export default MainBlock