import { FC, useEffect, useState } from 'react'
import { IDay, ISchedule, config, settings } from '../../configs/config';
import Input from '../ui/Input/Input';
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { db } from '../../helpers/firebase';
import Button, { ThemeButton } from '../ui/Button/Button';
import TextArea from '../ui/TextArea/TextArea';
 
interface ExerciseProps {
    className?: string
    name: string
    exercises: string
    dataExercises: any
    day: string
    week: number
    repeat?: number
}
 
const Exercise: FC<ExerciseProps> = ({ className, exercises, name, dataExercises, day, week, repeat }) => {

    const schedule: ISchedule[] = config;
    const [text, setText] = useState<string>('');
    const [lap, setLap] = useState<number>(0);
    // console.log('0000', week, name, dataExercises);

    const inputHandler = (val: string) => {
        let newVal = val;
        if(!!val === false) newVal = '0';

        setText(val);
        set(ref(db, `/exercises/${settings.programmId}/${day}/${name}/weight/${week}`), newVal);
    }
    
    const btnHandler = (val: number) => {
        const count = val >= repeat ? 0 : val + 1;
        setLap(count);
        set(ref(db, `/exercises/${settings.programmId}/${day}/${name}/repeat/${week}`), count.toString())
    }

    useEffect(() => {
        if (dataExercises) setLap(+dataExercises?.repeat[week]);
    }, [dataExercises, week])
    
    useEffect(() => {
        if (dataExercises) setText(dataExercises?.weight[week]);
    }, [dataExercises, week])
    
    // useEffect(() => {
    //     setLap(0);
    // }, [week])

    // useEffect(() => {
    //     // set(ref(db, `/exercises/${day}/${name}/repeat`), {
    //     //     val: '0',
    //     // })

    //     for (let index = 0; index < 8; index++) {
    //         // set(ref(db, `/exercises/${settings.programmId}/${day}/${name}/comment/${index}`), ' ')
    //         // set(ref(db, `/exercises/${settings.programmId}/${day}/${name}/weight/${index}`), '0')
    //         // set(ref(db, `/exercises/${settings.programmId}/${day}/${name}/repeat/${index}`), '0')
    //         // set(ref(db, `/exercises/comments/${day}/${index}`), '')
    //     }
    // }, [day])

    return (    
        <div className=' px-[25px] py-[20px] border-[#672E5A] border-solid border-b-[1px]'>
            <div className='flex justify-between w-[100%] '>
                <div className='flex flex-col flex-1 pr-[20px] max-w-[190px] border-[#672E5A] border-solid border-b-[1px]'>
                    <p className='text-[20px]'>{ name }</p>
                    <div>
                        <p>{ exercises }</p>
                    </div>
                </div>
                { name !== 'Пресс' ? <div className='flex flex-col pr-[20px] justify-start items-center'>
                    <div className='w-[55px]'>
                        <Input
                            value={text}
                            onChange={inputHandler}
                            className='text-[#fff] bg-[#d3d3d33d] border-[1px] border-[#89878F] text-center !h-[25px]'
                        />
                    </div>
                    <div className='mt-[5px]'>
                        <p>{ dataExercises?.weight[week-1] ? dataExercises?.weight[week-1] : '0' }</p>
                    </div>
                </div> : null
                }
                <Button
                    theme={ThemeButton.CLEAR}
                    className={`!h-[50px] !w-[50px] rounded-[15px] self-center font-[Arial] ${lap === repeat ? '!bg-[#00B4B9]' : '!bg-[#AC4A63]' }`}
                    onClick={() => btnHandler(lap)}
                > 
                    <p>{ dataExercises?.repeat[week] ? dataExercises?.repeat[week] : '0' }</p>
                </Button>
            </div>
        </ div>

    )
}
 
export default Exercise