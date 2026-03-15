'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

import useFormSelect from '@/store/formSelection/formSelectionStore'

import arrowLeft from '../../public/formSelectionThree/arrowLeft.png'
import arrowRight from '../../public/formSelectionThree/arrowRight.png'
import useCalendar from '@/store/calendar/calendarStore'
import usePsychologists from '@/store/psychologists/psychologistsStore'
import { TListPsychologist } from '@/store/psychologists/types'

export type TActiveAcquaint = 'aboutMe' | 'education' | 'approachesToWork' | 'tariffs' | ''

type Props = {
    showCalendar: boolean,
    setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>,
    setShowAcquaint: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveAcquaint: React.Dispatch<React.SetStateAction<TActiveAcquaint>>
}

export default function SliderPsychologists(props: Props) {
    const {
        activePsychologist, setActivePsychologist,
        listPsychologist,
        profileActivePsychologist
    } = usePsychologists()

    const {
        setGlobalActiveDay
    } = useCalendar()

    const clickPsychologist = (id: number) => {
        setActivePsychologist(id);
        props.setShowCalendar(false);
        props.setShowAcquaint(false);
        props.setActiveAcquaint('');
        setGlobalActiveDay(0)
    };

    const activeIndex = listPsychologist.findIndex((Psychologist: any) => Psychologist.id === activePsychologist);
    const half = Math.floor(7 / 2);
    const start = Math.max(0, activeIndex - half);

    return (
        <div className='flex justify-between items-center mb-[100px] h-[150px]'>
            <div className={`group w-[60px] h-[60px] 
                    ${activePsychologist > listPsychologist[0].id ? 'cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}>
                <Image
                    className='mx-auto py-[10px] group-hover:scale-105 group-hover:-translate-x-[5px] 
                    transition-transform duration-300'
                    onClick={() => {
                        if (activeIndex > 0) {
                            clickPsychologist(listPsychologist[activeIndex - 1].id);
                        }
                    }}
                    src={arrowLeft}
                    alt=''
                    width={40}
                    height={40}
                    draggable='false'
                />
            </div>
            <div className='flex gap-x-[40px] items-center transition-all duration-300 overflow-hidden w-[1010px] h-[170px]'>
                <div className="flex gap-x-[40px] items-center transition-transform duration-300"
                    style={{
                        transform: `translateX(-${start * (100 + 40)}px)`
                    }}>
                    {listPsychologist.map((obj: TListPsychologist) => (
                        <Image
                            key={obj.id}
                            onClick={() => clickPsychologist(obj.id)}
                            className="transition-all duration-300 cursor-pointer rounded-[999px]"
                            style={{
                                border: activePsychologist === obj.id
                                    ? '2px solid rgba(120, 114, 185, 1)'
                                    : profileActivePsychologist === obj.id ? '2px solid rgba(120, 114, 185, 0.4)' : '',
                                height: activePsychologist !== obj.id ? '100px' : '170px',
                                width: activePsychologist !== obj.id ? '100px' : '170px',
                            }}
                            src={obj.imagePhoto}
                            alt=''
                            draggable='false' />
                    ))}
                </div>
            </div>
            <div className={`group w-[60px] h-[60px] 
                    ${activePsychologist < listPsychologist[listPsychologist.length - 1].id ? 'cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}>
                <Image
                    className='mx-auto py-[10px] group-hover:scale-105 group-hover:translate-x-[5px] 
                    transition-transform duration-300'
                    onClick={() => {
                        if (activeIndex < listPsychologist.length - 1) {
                            clickPsychologist(listPsychologist[activeIndex + 1].id);
                        }
                    }}
                    src={arrowRight}
                    alt=''
                    width={40}
                    height={40}
                    draggable='false'
                />
            </div>
        </div>
    );
}