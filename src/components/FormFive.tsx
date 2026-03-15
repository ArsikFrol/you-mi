'use client'

import React from "react"

import Input from "./UI/Input"
import { Slider } from "@mui/material"
import useFormTeam from "@/store/formTeam/formTeamStore"

const listElem = [
    { id: 1, format: 'faceToFace', text: 'Очно' },
    { id: 2, format: 'online', text: 'Онлайн' },
    { id: 3, format: 'withChildren', text: 'С парами и семьями' }
]

export default function FormFive() {
    const {
        formatWork, setFormatWork,
        workOtherThanPsychotherapy, setWorkOtherThanPsychotherapy,
        howManyHoursWeek, setHowManyHoursWeek,
        tellUsAboutYourself, setTellUsAboutYourself,
        setAllFieldsFilledFive
    } = useFormTeam()

    React.useEffect(() => {
        if (formatWork && workOtherThanPsychotherapy && howManyHoursWeek && tellUsAboutYourself) {
            setAllFieldsFilledFive(true)
        } else setAllFieldsFilledFive(false)
    }, [formatWork && workOtherThanPsychotherapy && howManyHoursWeek && tellUsAboutYourself])

    return (
        <div className='w-[580px] mx-auto text'>
            <div className='text-(--color-btn-and-title) text-[20px] font-semibold mb-[30px]'>
                <div className=''>Шаг 5</div>
                <div className=''>Дополнительные вопросы</div>
            </div>
            <div className=''>
                <div className='text-[16px] font-medium mb-[10px]'>Укажите ваш формат работы и стоимость приема на данный момент</div>
                <div className='flex flex-col gap-y-[10px] mb-[30px]'>
                    {
                        listElem.map((obj: { id: number, format: string, text: string }, index: number) => {
                            return (
                                <div className='flex justify-between w-[400px] items-center ' key={index}>
                                    <div className="select-none hover:scale-102 transition-transform duration-300 flex gap-x-[10px] 
                                        items-center h-[22px]" key={index}>
                                        <div className="relative h-[22px]">
                                            <input className=" w-[22px] h-[22px]  border-(--color-btn-and-title) border-2 
                                                checked:bg-blue-500  focus:outline-none  cursor-pointer  
                                                rounded-[5px]  appearance-none peer" id={`${obj.id}`} type="checkbox"
                                                checked={
                                                    obj.id === 1 ? formatWork.faceToFace :
                                                        obj.id === 2 ? formatWork.online :
                                                            obj.id === 3 ? formatWork.withChildren : false
                                                }
                                                onChange={
                                                    obj.id === 1 ? () => setFormatWork('faceToFace', !formatWork.faceToFace) :
                                                        obj.id === 2 ? () => setFormatWork('online', !formatWork.online) :
                                                            obj.id === 3 ? () => setFormatWork('withChildren', !formatWork.withChildren) : undefined
                                                } />
                                            <svg
                                                className=" absolute top-[11px] left-1/2 -translate-x-1/2 
                                                    -translate-y-1/2 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 
                                                    pointer-events-none transition-opacity duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>

                                        <label className='cursor-pointer text-(--text) text-[16px] w-[200px] font-medium' htmlFor={`${obj.id}`}>
                                            {obj.text}
                                        </label>
                                    </div>
                                    <div className='flex gap-x-[10px] items-center'>
                                        <Input maxLength={5} onChange={() => { }} value="0"
                                            height={40} width={120} placeholder="" error={false} oneTypeData="number" />
                                        <div className='text-(--color-btn-and-title) text-[18px] font-medium'>₽</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium mb-[10px]'>Есть ли другая у вас работа кроме психотерапевтической практики?</div>
                <div className='flex gap-x-[20px]'>
                    <div style={{
                        ...(workOtherThanPsychotherapy == 'да' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }}
                        onClick={() => setWorkOtherThanPsychotherapy('да')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300 
                            w-[90px] text-center h-[50px] leading-[50px] border-2 
                        border-(--color-btn-and-title) text-(--color-btn-and-title) rounded-2xl'>Да</div>
                    <div style={{
                        ...(workOtherThanPsychotherapy == 'нет' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }}
                        onClick={() => setWorkOtherThanPsychotherapy('нет')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300 
                            w-[90px] text-center h-[50px] leading-[50px] border-2 
                        border-(--color-btn-and-title) text-(--color-btn-and-title) rounded-2xl'>Нет</div>
                </div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium mb-[40px]'>Сколько часов в неделю вы готовы уделять работе в YouMi?</div>
                <Slider
                    value={howManyHoursWeek}
                    onChange={(_, newValue) => setHowManyHoursWeek(newValue)}
                    min={5}
                    max={30}
                    step={1}
                    valueLabelDisplay="on"
                />
            </div>
            <div className=''>
                <div className='text-[16px] font-medium'>Что на ваш взгляд нам нужно узнать о вас, чтобы понять, какой вы специалист? Расскажите о себе в свободной форме.</div>
                <div className='text-[14px] font-light mb-[10px]'>Здесь могут быть ваши интересы, убеждения, ценности, принципы в работе и жизни. Можете поделиться почему и как вы пришли в психотерапию.</div>
                <textarea value={tellUsAboutYourself} onChange={(e) => setTellUsAboutYourself(e.target.value)}
                    className="w-[580px] h-[120px] border-2 rounded-2xl border-(--color-btn-and-title)
                        p-[10px] outline-none"></textarea>
            </div>
        </div>
    )
}