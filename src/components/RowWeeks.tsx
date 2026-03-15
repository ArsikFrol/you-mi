'use client'

import useCalendar from "@/store/calendar/calendarStore"

const listWeeks = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
]

type Props = {
    plusCount: number
}

export default function RowWeeks(props: Props) {
    const {
        dayNow
    } = useCalendar()

    return (
        <div className='flex gap-x-[30px] ml-[90px] mt-[50px]'>
            {
                listWeeks.map((obj: string, index: number) => {
                    return (
                        <div className="w-[117px] text-center mx-auto text-[18px] 
                            font-semibold text-(--color-btn-and-title) h-[40px] leading-[40px]"
                            style={{
                                ...(dayNow === (index + 1 + props.plusCount) ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    borderRadius: '10px',
                                    color: 'white'
                                } : {})
                            }}
                            key={index}>
                            <span className='mr-[7px]'>{index + 1 + props.plusCount}</span>
                            <span>{obj}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}