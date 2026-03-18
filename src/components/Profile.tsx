"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import { motion } from "framer-motion"

import Container from './UI/Container'

import { formatNumberWithSpaceFromRight } from './Tariffs'

import useCalendar from '@/store/calendar/calendarStore'
import useFormSelect from '@/store/formSelection/formSelectionStore'
import useTariffs from '@/store/tariffs/tariffs'
import useProfile from '@/store/profile/profileStore'

import calendar from '../../public/profile/calendar.png'
import ProfileRight from './ProfileRight'
import ProfileWarning from './ProfileWarning'
import usePsychologists from '@/store/psychologists/psychologistsStore'

type Props = {}

export default function Profile(props: Props) {
    const session = useSession()

    const {
        FIO, setFIO,
        setEmail
    } = useProfile()

    const [showChangePsychologist, setShowChangePsychologist] = React.useState<boolean>(false)
    const [showCanselData, setShowCanselData] = React.useState<boolean>(false)
    const [noPurchasedSessionsAndZeroBalance, setNoPurchasedSessionsAndZeroBalance] = React.useState<boolean>(false)
    const [noPurchasedSessionButHaveBalanceLessOneSession, setNoPurchasedSessionButHaveBalanceLessOneSession] = React.useState<boolean>(false)
    const [noPurchasedSessionButMoreOneSession, setNoPurchasedSessionButMoreOneSession] = React.useState<boolean>(false)

    const {
        globalActiveDay, setGlobalActiveDay,
        globalActiveMonth,
        setShowCalendar,
        globalActiveTime
    } = useCalendar()

    const {
        listPsychologist,
        profileActivePsychologist
    } = usePsychologists()

    const {
        youHaveBalance,
        youHavePaidSessions, setYouHavePaidSessions,
        tariffPsychologist,
        setCountPay
    } = useTariffs()

    const clickChangeData = () => {
        setShowCalendar(true)
        setGlobalActiveDay(0)
        setYouHavePaidSessions(youHavePaidSessions + 1)
    }

    const clickChooseData = () => {
        if (youHavePaidSessions === 0) {
            if (youHaveBalance === 0) setNoPurchasedSessionsAndZeroBalance(true)
            if (youHaveBalance < 2800 && youHaveBalance !== 0) {
                setNoPurchasedSessionButHaveBalanceLessOneSession(true)
                setCountPay(String(2800 - youHaveBalance))
            }
            if (youHaveBalance >= 2800) setNoPurchasedSessionButMoreOneSession(true)
        } else setShowCalendar(true)
    }

    React.useEffect(() => {
        setFIO(session.data?.user?.name || '')
        setEmail(session.data?.user?.email as string)
    }, [])

    return (
        <>
            <Container paddingNoneY>
                <div className='flex justify-between pt-[100px]'>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='w-[600px] h-[700px] bg-(-bg) px-[60px] py-[50px] rounded-2xl'>
                        <div className='text-(--text) text-[24px] font-semibold mb-[20px]'>Ваш психолог:</div>
                        <div className='flex gap-x-[20px] items-center mb-[20px]'>
                            <Image src={listPsychologist[profileActivePsychologist].imagePhoto} alt=''
                                width={50} height={50} draggable='false' />
                            <div className='text-(--text) text-[18px]'>{listPsychologist[profileActivePsychologist].name}</div>
                        </div>
                        <div className='flex gap-x-[30px] items-center mb-[40px]'>
                            <Link href='/messages'
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                h-[50px] text-white text-[18px] leading-[50px] text-center bg-(--color-btn-and-title) rounded-2xl'>
                                Связаться
                            </Link>
                            <div onClick={() => setShowChangePsychologist(true)}
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                            h-[50px] text-(--color-btn-and-title) leading-[48px] text-center items-center
                            text-[18px] border-2 border-(--color-btn-and-title) rounded-2xl'>Поменять</div>
                        </div>
                        <div className='text-(--text) text-[24px] font-semibold mb-[20px]'>Ближайшая сессия:</div>
                        <div className='flex gap-x-[20px] items-center mb-[20px]'>
                            <Image src={calendar} alt='' width={50} height={50} draggable='false' />
                            {globalActiveDay !== 0 ?
                                <div className='text-(--text) text-[18px]'>
                                    {globalActiveDay} {globalActiveMonth} в {globalActiveTime},
                                    {
                                        tariffPsychologist === 'faceToFace' ? ' в оченой форме' :
                                            tariffPsychologist === 'online' ? ' по звонку онлайн' : ' по тарифу семейный'
                                    }
                                </div>
                                : <>Не назначена</>
                            }
                        </div>
                        {globalActiveDay !== 0 ?
                            <div className='flex gap-x-[30px]'>
                                <div onClick={clickChangeData}
                                    className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                    h-[50px] text-white text-[18px] leading-[50px] text-center bg-(--color-btn-and-title) rounded-2xl'>
                                    Перенести
                                </div>
                                <div onClick={() => setShowCanselData(true)}
                                    className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                    h-[50px] text-(--color-btn-and-title) text-[18px] leading-[48px] text-center
                                    bg-white border-2 border-(--color-btn-and-title) rounded-2xl'>
                                    Отменить
                                </div>
                            </div> :
                            <div onClick={clickChooseData}
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[230px]
                                    h-[50px] text-white text-[18px] leading-[50px] text-center bg-(--color-btn-and-title)
                                    rounded-2xl'>
                                Выбрать время
                            </div>
                        }
                        <div className='flex items-center gap-x-[30px] mt-[50px] pt-[20px] border-t border-t-gray-400'>
                            <div className='text-(--text) text-[20px] font-medium'>На счету:</div>
                            <div className='w-[170px] h-[50px] leading-[50px] text-center rounded-2xl
                                text-[20px] text-white bg-(--color-btn-and-title)'>{formatNumberWithSpaceFromRight(youHaveBalance)} ₽</div>
                        </div>
                        <div className='flex items-center gap-x-[30px] mt-[30px]'>
                            <div className='text-(--text) text-[20px] font-medium'>Оплачено сессий:</div>
                            <div className='w-[170px] h-[50px] leading-[50px] text-center rounded-2xl
                                text-[20px] text-white bg-(--color-btn-and-title)'>{youHavePaidSessions}</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='h-[700px] bg-(-bg) rounded-2xl flex items-center'>
                        <ProfileRight />
                    </motion.div>
                </div>
            </Container>
            <ProfileWarning noPurchasedSessionButHaveBalanceLessOneSession={noPurchasedSessionButHaveBalanceLessOneSession}
                noPurchasedSessionsAndZeroBalance={noPurchasedSessionsAndZeroBalance}
                setNoPurchasedSessionButHaveBalanceLessOneSession={setNoPurchasedSessionButHaveBalanceLessOneSession}
                setNoPurchasedSessionsAndZeroBalance={setNoPurchasedSessionsAndZeroBalance}
                setShowCanselData={setShowCanselData} setShowChangePsychologist={setShowChangePsychologist}
                showCanselData={showCanselData} showChangePsychologist={showChangePsychologist}
                noPurchasedSessionButMoreOneSession={noPurchasedSessionButMoreOneSession}
                setNoPurchasedSessionButMoreOneSession={setNoPurchasedSessionButMoreOneSession} />
        </>
    )
}
