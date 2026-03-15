'use client'

import React from 'react'

import CalendarScheduleSession from "./CalendarScheduleSession";
import ColumnClient from "./ColumnClient";
import Btn from './UI/Btn';

export default function CartScheduleSession() {
    const [activeClient, setActiveClient] = React.useState<number>(0)

    return (
        <div className=''>
            <div className='grid grid-cols-[300_auto]'
                style={{
                    ...(activeClient === 0 && {
                        display: 'grid',
                        gridTemplateColumns: '1fr'
                    })
                }}>
                <ColumnClient activeClient={activeClient} setActiveClient={setActiveClient} />
                <CalendarScheduleSession activeClient={activeClient} setActiveClient={setActiveClient} />
            </div>
            <div className='flex justify-between w-[500px] mx-auto items-center'>
                <div className='border border-(--color-btn-and-title) rounded-2xl h-[60px] leading-[60px]
                    hover:scale-105 transition-transform duration-300 cursor-pointer text-(--color-btn-and-title)
                    text-[20px] font-semibold text-center w-[240px]'>Отменить сессию</div>
                <Btn textBtn='Сохранить' widht={240} />
            </div>
        </div>
    )
}