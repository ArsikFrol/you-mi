'use client'

import React from 'react'

import SliderWeeks from './SliderWeeks'

import { timeType } from '@/store/calendar/types'
import useCalendar from '@/store/calendar/calendarStore'

const columnListTime: timeType[] = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '9:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00'
]

const listWeeks = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
]

export default function ChoiceFreeTime() {

    const [plusCount, setPlusCount] = React.useState<number>(0)

    const {
        dayNow
    } = useCalendar()

    return (
        <div className='bg-(--bg) w-[1200px] mx-auto rounded-2xl py-[70px] px-[50px] mt-[50px] mb-[100px]'>
            <SliderWeeks plusCount={plusCount} setPlusCount={setPlusCount} />
            <div className='flex gap-x-[30px] ml-[90px] mt-[50px]'>
                {
                    listWeeks.map((obj: string, index: number) => {
                        return (
                            <div className='flex flex-col gap-y-[20px]' key={index}>
                                <div className="w-[117px] text-center mx-auto text-[18px] 
                                    font-semibold text-(--color-btn-and-title) h-[40px] leading-[40px]"
                                    style={{
                                        ...(dayNow === (index + 1 + plusCount) ? {
                                            background: 'rgba(120, 114, 185, 1)',
                                            borderRadius: '10px',
                                            color: 'white'
                                        } : {})
                                    }}>
                                    <span className='mr-[7px]'>{index + 1 + plusCount}</span>
                                    <span>{obj}</span>
                                </div>
                                <div className='flex flex-col gap-y-[20px]'>
                                    {
                                        columnListTime.map((time, index: number) => {
                                            return (
                                                <div className="w-[117px] text-center h-[50px]
                                                    leading-[50px] text-[16px] text
                                                    bg-[rgba(235,245,255,1)] rounded-2xl font-medium
                                                    hover:scale-110 transition-transform duration-300 cursor-pointer" key={index}>{time}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}