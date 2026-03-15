import { create } from 'zustand';

import { IuseCalendar, TGlobalActiveMonth, timeType } from './types';

export const listMonthGenitiveCase: TGlobalActiveMonth[] = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
]

export const listMonthName = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]

const now = new Date()
const numberDayNow = now.getDate()
const numberMonthNow = now.getMonth()
const numberyearNow = now.getFullYear()

const useCalendar = create<IuseCalendar>((set) => ({
    activeMonth: numberMonthNow,
    globalActiveTime: '',
    globalActiveDay: 0,
    globalActiveMonth: '',
    showCalendar: false,
    dayNow: numberDayNow,
    monthNow: numberMonthNow,
    yearNow: numberyearNow,

    setShowCalendar: (show: boolean) => set({ showCalendar: show }),
    setActiveMonth: (numberMonth: number) => set({ activeMonth: numberMonth }),
    setGlobalActiveTime: (activeTime: timeType) => set({ globalActiveTime: activeTime }),
    setGlobalActiveDay: (activeDay: number) => set({ globalActiveDay: activeDay }),
    setGlobalActiveMonth: (activeMonth: TGlobalActiveMonth) => set({ globalActiveMonth: activeMonth })
}))

export default useCalendar;
export const { getState, setState, subscribe } = useCalendar;