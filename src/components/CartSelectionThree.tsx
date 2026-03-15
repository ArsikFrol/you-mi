'use client'

import Image from "next/image"
import React from "react"

import Btn from "./UI/Btn"

import play from '../../public/formSelectionThree/play.png'
import heart from '../../public/formSelectionThree/heart.png'
import heartActive from '../../public/heartActive.png'
import useCalendar, { listMonthGenitiveCase } from "@/store/calendar/calendarStore"
import usePsychologists from "@/store/psychologists/psychologistsStore"
import { TListPsychologist } from "@/store/psychologists/types"

type Props = {
    setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>,
    showCalendar: boolean,
    setShowAcquaint: React.Dispatch<React.SetStateAction<boolean>>,
    showAcquaint: boolean,
    setShowVisitCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartSelectionThree(props: Props) {
    const {
        listPsychologist,
        activePsychologist,
        setFavoritePsychologist,
        profileActivePsychologist,
        whatMonthFreeTimeUse
    } = usePsychologists()

    const {
        dayNow,
        monthNow
    } = useCalendar()

    const favoritePsychologist = listPsychologist.find((Psychologist: TListPsychologist) => Psychologist.id === activePsychologist)
    const favorite = favoritePsychologist ? favoritePsychologist.favorite : false

    const clickTimeBtn = () => {
        props.setShowCalendar(!props.showCalendar)
        props.setShowAcquaint(false)
    }

    const clickAcquaintBtn = () => {
        props.setShowCalendar(false)
        props.setShowAcquaint(!props.showAcquaint)
    }

    return (
        <div className='p-[50px] relative'>
            <div className='flex gap-x-[100px] items-center'>
                <Image className=''
                    src={listPsychologist[activePsychologist].bigImage} alt='' width={280} height={280} draggable='false' />
                <div className=''>
                    <div className='text(--text) text-[26px] font-semibold flex gap-x-[20px] items-center'>
                        <span>{listPsychologist[activePsychologist].name}</span>
                        {profileActivePsychologist === activePsychologist &&
                            <span className="text-neutral-400 text-[20px]">(ваш психолог)</span>
                        }
                    </div>
                    <div className='text(--text) text-[20px] mb-[20px]'>{listPsychologist[activePsychologist].workExperience}</div>
                    <div className='text(--text) text-[20px] font-medium mb-[10px]'>Работает с запросами:</div>
                    <div className='flex flex-col gap-y-[10px] mb-[30px]'>
                        {
                            listPsychologist[activePsychologist].worksWithQueries.map((elem: string, index: number) => {
                                return (
                                    <div className="h-[40px] w-[480px] leading-[40px] text-white text-[16px] font-semibold
                                                        rounded-2xl bg-(--color-btn-and-title) text-center"
                                        key={index}>{elem}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='flex gap-x-[100px] items-center'>
                <div onClick={() => props.setShowVisitCard(true)}
                    className='relative w-[280px] group cursor-pointer'>
                    <Image className='opacity-50'
                        src={listPsychologist[activePsychologist].videoCard} alt='' width={280} height={160} draggable='false' />
                    <div className='absolute left-0 top-0 bg-[rgba(52,50,79,0.6)] w-[280px] h-[160px] rounded-2xl'></div>
                    <div className='cursor-pointer flex gap-x-[10px] items-center absolute left-[20%] top-[45%] z-10'>
                        <Image className='group-hover:scale-115 transition-transform duration-300'
                            src={play} alt='' width={32} height={32} draggable='false' />
                        <div className='text-white text-[16px] font-semibold'>Видео-визитка</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text(--text) text-[18px] font-medium mb-[5px]'>
                        Ближайший свободный слот:
                    </div>
                    <div className='text-(--color-btn-and-title) 
                            text-[18px] font-bold mb-[30px]'>
                        <span>
                            {listPsychologist[activePsychologist].freeDays.now.find(day => day.status === 'free' && dayNow <= day.id)?.id}
                        </span>
                        <span> </span>
                        <span>
                            {listMonthGenitiveCase[monthNow]}
                        </span>
                        <span> </span>
                        <span>
                            {listPsychologist[activePsychologist].freeDays.now.find(day => day.status === 'free' && dayNow <= day.id)?.freeTime[0]}
                        </span>
                    </div>
                    <div className='flex gap-x-[50px] items-center'>
                        <div onClick={() => clickAcquaintBtn()}
                            className='rounded-2xl w-[320px] h-[60px] leading-[60px] border-2 border-(--color-btn-and-title)
                                                text-[20px] text-(--color-btn-and-title) font-semibold hover:scale-105 
                                                transition-transform duration-300 cursor-pointer text-center'>
                            Познакомиться ближе
                        </div>
                        <div onClick={clickTimeBtn}>
                            <Btn textBtn='Выбрать время сессии' widht={320} />
                        </div>
                    </div>
                </div>
            </div>
            <Image onClick={() => setFavoritePsychologist(activePsychologist)}
                className="absolute right-[50px] top-[50px] hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={favorite ? heartActive : heart} alt='' width={30} height={30} draggable='false' />
        </div>
    )
}