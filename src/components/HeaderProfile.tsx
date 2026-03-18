'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from 'next-auth/react'
import toast from "react-hot-toast";

import chat from '../../public/chat.svg'
import arrowShow from '../../public/arrowShow.png'
import exit from '../../public/exit.png'
import user from '../../public/user.png'

import useProfile from "@/store/profile/profileStore";
import Settings from "./Settings";
import { TRoute } from "@/types/routes/types";

type TListProfile = {
    id: number,
    link: TRoute | '',
    text: string
}

const listProfile: Array<TListProfile> = [
    { id: 1, link: '/tariff', text: 'Тарифы' },
    { id: 2, link: '/profile', text: 'Профиль' },
    { id: 3, link: '/webinarsTimetable', text: 'Расписание вебинаров' },
    { id: 4, link: '/tariff/history', text: 'История покупок' },
    { id: 5, link: '', text: 'Настройки' },
    { id: 6, link: '', text: 'Выйти' }
]

const listPsychologistProfile: TListProfile[] = [
    { id: 1, link: '/profilePsychologist', text: 'Профиль' },
    { id: 2, link: '/mySchedule', text: 'Расписание' },
    { id: 3, link: '/choiceFreeTime', text: 'Свободное время' },
    { id: 4, link: '/scheduleSession', text: 'Запланировать сессию' },
    { id: 5, link: '', text: 'Настройки' },
    { id: 6, link: '', text: 'Выйти' }
]

export default function HeaderProfile() {
    const session = useSession()

    const [showProfile, setShowProfile] = React.useState<boolean>(false)
    const [showSettings, setShowSettings] = React.useState<boolean>(false)

    const {
        FIO
    } = useProfile()

    const clickShowProfile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowProfile(!showProfile)
    }

    const clickSignOut = () => {
        signOut({ callbackUrl: '/' })
        toast.error('Вы вышли из профиля')
    }

    const clickShowSettings = () => {
        setShowSettings(true)

        const scrollY = window.scrollY;

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }

    React.useEffect(() => {
        const closeProfileDropdown = () => setShowProfile(false);

        if (showProfile) {
            document.addEventListener('click', closeProfileDropdown);
        }

        return () => {
            document.removeEventListener('click', closeProfileDropdown);
        };
    }, [showProfile])

    return (
        <>
            {session.data?.user ?
                <div className='relative flex items-center gap-[20px]'>
                    <Link className="hover:scale-105 transition-transform duration-300
                        max-sm:hidden"
                        href='/messages'>
                        <Image src={chat} alt='' width={50} height={50} draggable='false' />
                    </Link>
                    <div className='flex gap-[10px] items-center'>
                        <Link className='hover:scale-105 transition-transform duration-300
                            flex items-center gap-[10px]'
                            href={session.data?.user.role === 'psychologist' ?
                                '/profilePsychologist' : '/profile'
                            }>
                            <Image className="rounded-4xl" src={session.data.user.image || user} alt=''
                                width={50} height={50} draggable='false' />
                            <div className='
                                [@media(max-width:1279px)]:hidden'>
                                <div className='text-left text-btn-and-title
                                        text-[20px] font-bold'>
                                    {FIO ? FIO.split(' ')[0] : session.data.user.name?.split(' ')[0] as string}
                                </div>
                                <div className='text-left text-text text-[16px] font-medium'>
                                    {session.data?.user.role === 'psychologist' ?
                                        <span>Кабинет психолога</span> : <span>Личный кабинет</span>
                                    }
                                </div>
                            </div>
                        </Link>
                        <div className='w-[30px] h-[30px] group cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                clickShowProfile(e);
                            }}>
                            <Image className="group-hover:scale-125
                                transition-transform duration-300 mx-auto pt-[11px]"
                                src={arrowShow} alt='' width={16} height={8} draggable='false' />
                    </div>
                    </div>
                    {showProfile &&
                        <div onClick={(e) => e.stopPropagation()}
                            className='absolute z-100 right-0 top-[70px]
                                w-[280px] bg-white shadow rounded-2xl p-[20px] pl-[30px]
                                flex flex-col gap-y-[10px]'>
                            {session.data.user.role === 'user' ?
                                listProfile.map((obj: TListProfile, index: number) => {
                                    return (
                                        <Link href={obj.link}
                                            className="cursor-pointer flex items-center gap-x-[20px] text-text
                                                text-[18px] font-medium h-[40px]
                                                hover:scale-105 transition-transform duration-300 group"
                                            onClick={obj.id == 6 ? () => clickSignOut() : obj.id === 5 ?
                                                () => clickShowSettings() : () => { }}
                                            key={index}>
                                            {obj.text}
                                            <Image src={exit} alt='' width={24} height={24} draggable='false'
                                                style={{
                                                ...(index == 5 ? {} : { display: 'none' }),
                                                }}
                                                className="group-hover:translate-x-[5px] transition-transform
                                                duration-300" />
                                        </Link>
                                    )
                                }) : listPsychologistProfile.map((obj: TListProfile, index: number) => {
                                    return (
                                        <Link href={obj.link}
                                            className="cursor-pointer flex items-center gap-x-[20px] text-text
                                                text-[18px] font-medium h-[40px]
                                                hover:scale-105 transition-transform duration-300 group"
                                            onClick={obj.id == 6 ? () => clickSignOut() : obj.id === 5 ?
                                                () => clickShowSettings() : () => { }}
                                            key={index}>
                                            {obj.text}
                                            <Image src={exit} alt='' width={24} height={24} draggable='false'
                                                style={{
                                                    ...(index == 5 ? {} : { display: 'none' }),
                                                }}
                                                className="group-hover:translate-x-[5px]
                                                    transition-transform duration-300" />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    }
                </div> :
                <Link href='/signIn'
                    className='text-btn-and-title font-semibold border-2 border-solid
                                     border-btn-and-title rounded-2xl w-60 h-[50px] leading-[50px]'>
                    Личный кабинет
                </Link>
            }
            {showSettings &&
                <Settings setShowSettings={setShowSettings} />
            }
        </>
    )
}
