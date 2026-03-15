'use client'

import React from "react";

import { timeType } from "@/store/calendar/types";

import GridScheduleTable from "./GridScheduleTable";
import SliderWeeks from "./SliderWeeks";
import RowWeeks from "./RowWeeks";

const columnListTime: timeType[] = [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
]

export default function ScheduleTable() {
    const [plusCount, setPlusCount] = React.useState<number>(0)

    return (
        <div className='bg-(--bg) w-[1200px] mx-auto rounded-2xl py-[70px] px-[50px] mb-[100px]'>
            <SliderWeeks plusCount={plusCount} setPlusCount={setPlusCount} />
            <RowWeeks plusCount={plusCount} />
            <div className='flex gap-x-[30px]'>
                <div className='w-[60px] mt-[50px] flex flex-col gap-y-[40px]'>
                    {
                        columnListTime.map((timeElem, index: number) => {
                            return (
                                <div className="text-center h-[100px] leading-[100px]
                                    text-[18px] text-(--color-btn-and-title) font-semibold" key={index}>{timeElem}</div>
                            )
                        })
                    }
                </div>
                <GridScheduleTable />
            </div>
        </div>
    )
}