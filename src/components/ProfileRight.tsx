'use client'

import Image from "next/image"
import { getDay } from "date-fns"

import useCalendar, { listMonthName } from "@/store/calendar/calendarStore"

import noSessions from '../../public/profile/noSessions.png'
import usePsychologists from "@/store/psychologists/psychologistsStore"

export default function ProfileRight() {
    const {
        activeMonth,
        globalActiveDay,
        globalActiveTime,
        dayNow,
        monthNow,
        yearNow
    } = useCalendar()

    const {
        listPsychologist,
        activePsychologist,
        whatMonthFreeTimeUse
    } = usePsychologists()

    const getMonthStartDay = (year: any, month: any) => {
        const date = new Date(year, month, 1);
        return getDay(date);
    };

    const startOffset = getMonthStartDay(yearNow, monthNow)

    function getDaysUntilAppointment(day: number, monthIndex: number) {
        const now = new Date();
        const currentYear = now.getFullYear();

        let appointmentDate = new Date(currentYear, monthIndex, day);

        if (appointmentDate < now) {
            appointmentDate = new Date(currentYear + 1, monthIndex, day);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        appointmentDate.setHours(0, 0, 0, 0);

        const diffMs = appointmentDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    let daysLeft = getDaysUntilAppointment(globalActiveDay, activeMonth);

    if (globalActiveDay === dayNow && activeMonth === monthNow) daysLeft = 0

    return (
        <>
            {globalActiveDay !== 0 ?
                <div className='flex items-center'>
                    <div className='bg-(-bg) rounded-2xl p-[50px]'>
                        <div className='text-btn-and-title text-[18px] font-medium pl-[20px] mb-[30px] text-center'>
                            {listMonthName[monthNow]} {yearNow}
                        </div>
                        <div className='flex justify-between mb-[40px]'>
                            {
                                ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day: string, index: number) => {
                                    return (
                                        <div className="w-[68px] text-center text-btn-and-title text-[18px] font-semibold"
                                            key={index}>{day}</div>
                                    )
                                })
                            }
                        </div>
                        <div className='grid grid-cols-7 gap-y-[30px] h-[342px]'>
                            {[...Array(startOffset)].map((_, i) => (
                                <div key={`empty-${i}`} className="empty-cell"></div>
                            ))}

                            {
                                listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse].map((obj: { id: number, status: string, freeTime: Array<string> }) => (
                                    <div key={obj.id}
                                        style={{
                                            ...(monthNow === activeMonth && dayNow === obj.id ? {
                                                background: 'rgba(150, 145, 210, 1)',
                                                borderTopLeftRadius: '16px',
                                                borderBottomLeftRadius: '16px',
                                                color: 'white'
                                            } : {}),
                                            ...(activeMonth === monthNow && globalActiveDay > dayNow
                                                && dayNow < obj.id && globalActiveDay > obj.id ? {
                                                background: 'rgba(215, 195, 230, 1)',
                                                color: 'white'
                                            } : {}),
                                            ...(globalActiveDay === obj.id ? {
                                                background: 'rgba(120, 114, 185, 1)',
                                                color: 'white',
                                                borderTopRightRadius: '16px',
                                                borderBottomRightRadius: '16px',
                                            } : {})
                                        }}
                                        className='text-center text-btn-and-title
                                                text-[18px] font-semibold leading-[44px] h-[44px]'>{obj.id}</div>
                                ))
                            }
                        </div>
                        <div className='text-white text-[24px] font-semibold bg-btn-and-title
                                    w-[300px] h-[100px] leading-[50px] mx-auto text-center rounded-2xl mt-[30px]'>
                            {daysLeft !== 0 ?
                                <span>До сессии {daysLeft} дней, начало в {globalActiveTime}</span>
                                : <span>Ссесия сегодня, начало в {globalActiveTime}</span>
                            }
                        </div>
                    </div>
                </div> :
                <div className='w-[550px] bg-(-bg) px-[60px] py-[50px] rounded-2xl'>
                    <div className='w-[430px] text-text text-[44px] font-semibold mb-[30px] text-center'>
                        У вас нет запланированных сессий
                    </div>
                    <Image className='block mx-auto' src={noSessions} alt='' width={222} height={222} draggable='false' />
                </div>
            }
        </>
    )
}
