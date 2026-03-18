'use client'

import { getDay } from "date-fns"

import useCalendar from "@/store/calendar/calendarStore"
import Reminder from "./Reminder"
import { TWhereToShow } from "./UI/Calendar"
import usePsychologists from "@/store/psychologists/psychologistsStore"

type Props = {
    clickIdDay: (idDay: number) => void,
    activeIdDay: number,
    showReminder: boolean,
    setShowReminder: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveIdDay: React.Dispatch<React.SetStateAction<number>>,
    whereToShow: TWhereToShow,
}

export default function GridDays(props: Props) {
    const {
        activeMonth,
        globalActiveDay,
        dayNow,
        monthNow,
        yearNow
    } = useCalendar()

    const {
        listPsychologist,
        activePsychologist,
        whatMonthFreeTimeUse
    } = usePsychologists()

    const getMonthStartDay = (year: number, month: number) => {
        const date = new Date(year, month, 1);
        return getDay(date);
    }

    function getDaysInMonth(monthIndex: number, year: number) {
        return new Date(year, monthIndex + 1, 0).getDate();
    }

    const startOffset = getMonthStartDay(yearNow, monthNow)
    const countDays = getDaysInMonth(activeMonth, yearNow)

    return (
        <>
            {(props.whereToShow === 'profile' || props.whereToShow === 'scheduleSession') &&
                <div className='grid grid-cols-7 gap-y-[30px]'>
                    {[...Array(startOffset)].map((_, i) => (
                        <div key={`empty-${i}`}></div>
                    ))}
                    {
                        listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse].slice(0, countDays).map((obj) => (
                            <div style={{
                                ...(monthNow === activeMonth && dayNow > obj.id ? {
                                    textDecoration: 'line-through',
                                    color: 'rgba(120, 114, 185, 0.4)'
                                } : {}),
                                ...(obj.status === 'crossedOut' ? {
                                    textDecoration: 'line-through',
                                    color: 'rgba(120, 114, 185, 0.4)'
                                } : {}),
                                ...(monthNow === activeMonth && dayNow === obj.id ? {
                                    background: 'rgba(150, 145, 210, 1)',
                                    borderRadius: '16px',
                                    color: 'white'
                                } : {}),
                                ...(obj.id === props.activeIdDay ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    width: '66px',
                                    margin: '0 auto',
                                    borderRadius: '16px',
                                    color: 'white'
                                } : {})
                            }}
                                onClick={monthNow === activeMonth &&
                                    dayNow > obj.id || obj.status === 'crossedOut' ? undefined : () => props.clickIdDay(obj.id)}
                                key={obj.id}
                                className={`text-center text-btn-and-title
                                    text-[18px] font-semibold h-[48px] leading-[48px]
                                    ${monthNow === activeMonth && dayNow > obj.id || obj.status === 'crossedOut'
                                        ? 'cursor-default hover:scale-100'
                                        : 'hover:scale-115 transition-transform duration-100 cursor-pointer'
                                    }`}>{obj.id}</div>
                        ))
                    }
                </div>
            }
            {props.whereToShow === 'formSelectionPsychologist' &&
                <div>
                    <div className='grid grid-cols-7 gap-y-[30px] mb-[20px]'>
                        {[...Array(startOffset)].map((_, i) => (
                            <div key={`empty-${i}`} className="empty-cell"></div>
                        ))}
                        {
                            listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse].slice(0, countDays).map((obj: { id: number, status: string, freeTime: Array<string> }) => (
                                <div style={{
                                    ...(monthNow === activeMonth && dayNow > obj.id ? {
                                        textDecoration: 'line-through',
                                        color: 'rgba(120, 114, 185, 0.4)'
                                    } : {}),
                                    ...(obj.status === 'crossedOut' ? {
                                        textDecoration: 'line-through',
                                        color: 'rgba(120, 114, 185, 0.4)'
                                    } : {}),
                                    ...(globalActiveDay === obj.id ? {
                                        background: 'rgba(70, 65, 150, 1)',
                                        color: 'white',
                                        width: '66px',
                                        margin: '0 auto',
                                        borderRadius: '16px'
                                    } : {}),
                                    ...(monthNow === activeMonth && dayNow === obj.id ? {
                                        background: 'rgba(150, 145, 210, 1)',
                                        width: '66px',
                                        margin: '0 auto',
                                        borderRadius: '16px',
                                        color: 'white'
                                    } : {}),
                                    ...(obj.id === props.activeIdDay ? {
                                        background: 'rgba(120, 114, 185, 1)',
                                        width: '66px',
                                        margin: '0 auto',
                                        color: 'white',
                                        borderRadius: '16px',
                                    } : {})
                                }}
                                    onClick={monthNow === activeMonth && dayNow > obj.id ||
                                        obj.status === 'crossedOut' ? undefined : () => props.clickIdDay(obj.id)}
                                    key={obj.id}
                                    className={`text-center text-btn-and-title text-[18px] font-semibold h-[48px] leading-[48px]
                                        ${monthNow === activeMonth && dayNow > obj.id || obj.status === 'crossedOut'
                                            ? 'cursor-default hover:scale-100'
                                            : 'hover:scale-115 transition-transform duration-100 cursor-pointer'
                                        }`}>{obj.id}</div>
                            ))
                        }
                    </div>
                    <Reminder setShowReminder={props.setShowReminder} showReminder={props.showReminder} />
                </div>
            }
        </>
    )
}
