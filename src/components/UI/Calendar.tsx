'use client'

import React from "react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import SliderMonth from "../SliderMonth";
import GridDays from "../GridDays";
import FreeTimePsychologist from "../FreeTimePsychologist";

import useCalendar, { listMonthGenitiveCase } from "@/store/calendar/calendarStore";
import { timeType } from "@/store/calendar/types";
import useFormSelect from "@/store/formSelection/formSelectionStore"

import Btn from "./Btn";
import CrossClose from "./CrossClose";
import TariffsPsychologist from "../TariffsPsychologist";
import useTariffs from "@/store/tariffs/tariffs";
import { ITariffsWorkUse } from "@/store/tariffs/types";
import { TListPsychologist } from "@/store/psychologists/types";

export type TWhereToShow = 'profile' | 'formSelectionPsychologist' | 'scheduleSession'

type Props = {
    crossCloseBool?: boolean,
    closeFunction: (show: boolean) => void,
    preSelectedDay?: boolean,
    objPsychologist?: TListPsychologist,
    whereToShow: TWhereToShow,
}

export default function Calendar(props: Props) {
    const router = useRouter()

    const {
        activeMonth, setGlobalActiveMonth,
        globalActiveTime, setGlobalActiveTime,
        globalActiveDay, setGlobalActiveDay,
    } = useCalendar()

    const {
        tariffPsychologist, setTariffPsychologist,
        setCountPay,
    } = useTariffs()

    const {
        setSelectData
    } = useFormSelect()

    const [showBtnChoose, setShowBtnChoose] = React.useState<boolean>(false)
    const [showFreeTimePsychologist, setShowFreeTimePsychologist] = React.useState<boolean>(false)
    const [activeIdDay, setActiveIdDay] = React.useState<number>(0)
    const [activeFreeTime, setActiveFreeTime] = React.useState<timeType>('')
    const [showReminder, setShowReminder] = React.useState<boolean>(true)

    const [activeTariff, setActiveTariff] = React.useState<ITariffsWorkUse>('')
    const [showTariffs, setShowTariffs] = React.useState<boolean>(false)

    const clickFixTime = () => {
        if (activeTariff !== '' && props.objPsychologist) {
            router.push('/payService?backPage=formPsychologists')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            setGlobalActiveTime(activeFreeTime)
            setGlobalActiveDay(activeIdDay)
            setGlobalActiveMonth(listMonthGenitiveCase[activeMonth])
            setTariffPsychologist(activeTariff)
            setCountPay(String(props.objPsychologist?.tariffsWork[activeTariff]))
            setSelectData(true)

            if (activeIdDay === globalActiveDay &&
                globalActiveTime === activeFreeTime &&
                activeTariff === tariffPsychologist) {
                toast.success('Введите данные для оплаты')
            } else toast.success('Сессия забронирована, осталось оплатить)')
        }
    }

    const clickIdDay = (id: number) => {
        setShowReminder(false)
        setShowBtnChoose(false)
        setShowFreeTimePsychologist(true)
        setActiveIdDay(id)

        if (props.preSelectedDay && globalActiveDay === id) {
            setActiveIdDay(globalActiveDay)
            setActiveFreeTime(globalActiveTime)
            setActiveTariff(tariffPsychologist)
            setShowTariffs(true)
        } else {
            setShowTariffs(false)
            setActiveFreeTime('')
            setActiveTariff('')
        }
    }

    const clickTime = (time: timeType) => {
        setActiveFreeTime(time)
        setActiveTariff('')
        setShowTariffs(true)
    }

    React.useEffect(() => {
        if (globalActiveTime && globalActiveDay && tariffPsychologist && props.preSelectedDay && props.objPsychologist) {
            setActiveIdDay(globalActiveDay);
            setActiveFreeTime(globalActiveTime);
            setActiveTariff(tariffPsychologist)
            setShowFreeTimePsychologist(true);
            setShowTariffs(true)

            if (tariffPsychologist) {
                setShowBtnChoose(true);
            }
        }
    }, [globalActiveTime, globalActiveDay, tariffPsychologist, props.preSelectedDay, props.objPsychologist]);

    return (
        <div className='flex gap-x-[10px] w-[650px] mx-auto z-100'
            style={{
                ...(props.whereToShow === 'scheduleSession' && activeIdDay && { width: '760px' }),
                ...(props.whereToShow === 'scheduleSession' && activeIdDay === 0 && { width: '430px' })
            }}>
            <div className='w-[580px] bg-(-bg) p-[50px] mx-auto rounded-2xl select-none'
                style={{
                    ...(props.whereToShow === 'scheduleSession' && { padding: '0', width: '760px' })
                }}>
                <div className=''
                    style={{
                        ...(props.whereToShow === 'scheduleSession' && {
                            display: 'flex',
                            justifyContent: 'space-between'
                        })
                    }}>
                    <div className=''>
                        <div className='text-center text-btn-and-title text-[24px] font-semibold mb-[30px] w-[430px] mx-auto'>
                            Выберите дату, время и тариф
                        </div>
                        <SliderMonth whereToShow={props.whereToShow} setActiveIdDay={setActiveIdDay} setShowBtnChoose={setShowBtnChoose}
                            setActiveFreeTime={setActiveFreeTime} setActiveTariff={setActiveTariff}
                            setShowTariffs={setShowTariffs} setShowFreeTimePsychologist={setShowFreeTimePsychologist} />
                        <div className='flex justify-between mb-[40px]'>
                            {
                                ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day: string, index: number) => {
                                    return (
                                        <div className="w-[68px] text-center text-btn-and-title text-[18px] font-semibold" key={index}>{day}</div>
                                    )
                                })
                            }
                        </div>
                        <GridDays activeIdDay={activeIdDay} clickIdDay={clickIdDay}
                            whereToShow={props.whereToShow} setShowReminder={setShowReminder}
                            showReminder={showReminder} setActiveIdDay={setActiveIdDay} />
                    </div>
                    <div className=''>
                        <div className=''>
                            {showFreeTimePsychologist &&
                                <FreeTimePsychologist setActiveFreeTime={setActiveFreeTime} showBtnChoose={showBtnChoose}
                                    activeIdDay={activeIdDay} activeMonth={activeMonth} activeFreeTime={activeFreeTime}
                                    clickTime={clickTime} whereToShow={props.whereToShow} />
                            }
                        </div>
                        <div className=''>
                            {showTariffs &&
                                <TariffsPsychologist activeIdDay={activeIdDay} whereToShow={props.whereToShow} setActiveFreeTime={setActiveFreeTime}
                                    activeTariff={activeTariff} setActiveTariff={setActiveTariff} activeFreeTime={activeFreeTime}
                                    showBtnChoose={showBtnChoose} setShowBtnChoose={setShowBtnChoose} />
                            }
                        </div>
                    </div>
                </div>
                {props.whereToShow === 'formSelectionPsychologist' && activeTariff !== '' &&
                    <div onClick={clickFixTime}
                        className='w-[360px] mx-auto mt-[50px]'>
                        <Btn textBtn={
                            activeIdDay === globalActiveDay &&
                                globalActiveTime === activeFreeTime &&
                                activeTariff === tariffPsychologist ? 'Перейти к оплате' :
                                globalActiveDay ? 'Перезписать время сессии' : 'Закрепить время сессии'}
                            widht={350} />
                    </div>
                }
            </div>
            {props.crossCloseBool && props.whereToShow !== 'scheduleSession' &&
                <CrossClose closeFunction={props.closeFunction} />
            }
        </div>
    )
}
