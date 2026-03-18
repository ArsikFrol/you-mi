'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Btn from "@/components/UI/Btn";

import ChoiceFreeTime from "@/components/ChoiceFreeTime";
import Header from "@/components/Header";

import arrow from '../../../public/arrow.png'
import WarningWindow from "@/components/UI/WarningWindow";


export default function pageFreeTimePsychologist() {
    const router = useRouter()

    const [showWarning, setShowWarning] = React.useState<boolean>(false)

    const clickLeft = () => {
        setShowWarning(false)
        router.push('/profilePsychologist')
    }

    return (
        <>
            <Header white showNav />
            <div className='text-btn-and-title relative
                text-[40px] font-extrabold w-[1070px] mx-auto mb-[100px] mt-[50px]'>
                <div className=''>Укажите дни и время, когда вы готовы проводить сессии</div>
                <Image src={arrow} alt='' width={243} height={8} draggable='false'
                    className="absolute right-[195px] bottom-[60px]" />
            </div>
            <ChoiceFreeTime />
            <div className='w-[520px] mx-auto mb-[100px] flex justify-between'>
                <div className='w-[240px] h-[60px] leading-[60px] text-center text-btn-and-title
                    border border-btn-and-title rounded-2xl
                    hover:scale-105 transition-transform duration-300 cursor-pointer'>Назад</div>
                <div className='' onClick={() => setShowWarning(true)}>
                    <Btn textBtn="Сохранить" widht={240} />
                </div>
            </div>
            {showWarning &&
                <WarningWindow leftClick={clickLeft} rightClick={setShowWarning} text={`Сохранить изменения?`}
                    setShowWarning={setShowWarning} showWarning={showWarning} />
            }
        </>
    )
}
