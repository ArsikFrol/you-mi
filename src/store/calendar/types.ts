export type TStatus = 'free' | 'crossedOut'

export type TGlobalActiveMonth = 'января' | 'февраля' | 'марта' | 'апреля' | 'мая' | 'июня' |
    'июля' | 'августа' | 'сентября' | 'октября' | 'ноября' | 'декабря' | ''

export type timeType = '00:00' | '01:00' | '02:00' | '03:00' | '04:00' | '05:00' |
    '06:00' | '07:00' | '08:00' | '9:00' | '10:00' | '11:00' | '12:00' | '13:00' | '14:00' |
    '15:00' | '16:00' | '17:00' | '18:00' | '19:00' | '20:00' | ''

export type TDay = {
    id: number
    status: TStatus
    freeTime: timeType[]
}

export interface IuseCalendar {
    activeMonth: number
    globalActiveTime: timeType
    globalActiveDay: number
    globalActiveMonth: TGlobalActiveMonth,
    showCalendar: boolean
    dayNow: number,
    monthNow: number,
    yearNow: number,

    setActiveMonth: (numberMonth: number) => void
    setGlobalActiveTime: (activeTime: timeType) => void
    setGlobalActiveDay: (activeDay: number) => void
    setGlobalActiveMonth: (activeMonth: TGlobalActiveMonth) => void
    setShowCalendar: (show: boolean) => void
}