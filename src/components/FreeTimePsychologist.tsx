'use client'

import React from "react";
import toast from "react-hot-toast";

import Btn from "./UI/Btn";

import useCalendar from "@/store/calendar/calendarStore";
import useTariffs from "@/store/tariffs/tariffs";
import { timeType } from "@/store/calendar/types";
import { TWhereToShow } from "./UI/Calendar";
import useFormSelect from "@/store/formSelection/formSelectionStore";
import usePsychologists from "@/store/psychologists/psychologistsStore";

type Props = {
    activeMonth: number,
    activeIdDay: number,
    clickTime: Function,
    activeFreeTime: timeType,
    showBtnChoose: boolean,
    setActiveFreeTime: React.Dispatch<React.SetStateAction<timeType>>,
    whereToShow: TWhereToShow,
}

export default function FreeTimePsychologist(props: Props) {
    const {
        globalActiveTime,
        globalActiveDay
    } = useCalendar()

    const {
        listPsychologist,
        activePsychologist,
        whatMonthFreeTimeUse
    } = usePsychologists()

    return (
        <>
            {(props.whereToShow === 'formSelectionPsychologist' || props.whereToShow === 'scheduleSession') &&
                <div className='grid grid-cols-4 justify-between w-[480px] mx-auto items-center py-[20px]
                        border-t-1 border-t-gray-400 mt-[20px]'
                    style={{
                        ...(listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse][props.activeIdDay].freeTime.length >= 5 && {
                            paddingTop: '20px',
                            rowGap: '20px'
                        }),
                        ...(props.whereToShow === 'scheduleSession' && {
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            width: '250px',
                            margin: '0 auto',
                            border: 'none',
                            paddingTop: '0',
                            rowGap: '20px'
                        })
                    }}>
                    {
                        listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse][props.activeIdDay].freeTime.map((time, index) => {
                            return (
                                <div onClick={() => props.clickTime(time)}
                                    className="hover:scale-105 transition-transform duration-300 cursor-pointer
                                                    w-[110px] h-[40px] leading-[40px] text-center
                                                    border-2 border-btn-and-title rounded-[10px]
                                                    text-[18px] text-btn-and-title mx-auto"
                                    style={{
                                        ...(globalActiveDay === props.activeIdDay &&
                                            time === globalActiveTime ? {
                                            background: 'rgba(70, 65, 150, 1)',
                                            border: 'none',
                                            color: 'white'
                                        } : {}
                                        ),
                                        ...(props.activeFreeTime === time ? {
                                            background: "rgba(120, 114, 185, 1)",
                                            color: 'white'
                                        } : {}
                                        )
                                    }}
                                    key={index}>{time}</div>
                            )
                        })
                    }
                </div>
            }

            {props.whereToShow === 'profile' &&
                <div className='grid grid-cols-4 gap-y-[20px] justify-between w-[480px] mx-auto items-center pt-[40px] pb-[40px]'
                    style={listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse][props.activeIdDay].freeTime.length >= 5 ? {
                        marginTop: '20px'
                    } : {}}>
                    {
                        listPsychologist[activePsychologist].freeDays[whatMonthFreeTimeUse][props.activeIdDay].freeTime.map((time, index) => {
                            return (
                                <div onClick={() => props.clickTime(time)}
                                    className="hover:scale-105 transition-transform duration-300 cursor-pointer
                                                            w-[110px] h-[40px] leading-[40px] text-center
                                                            border-2 border-btn-and-title rounded-[10px]
                                                            text-[18px] text-btn-and-title mx-auto"
                                    style={{
                                        ...(props.activeFreeTime === time ? {
                                            background: 'rgba(120, 114, 185, 1)',
                                            color: 'white'
                                        } : {})
                                    }}
                                    key={index}>{time}</div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}
