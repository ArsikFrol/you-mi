'use client'

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

import Header from "@/components/Header";

import Search from "@/components/UI/Search";
import Container from "@/components/UI/Container";

import useProfile from "@/store/profile/profileStore";

import SectionIdUpcomingOnes from "@/components/SectionIdUpcomingOnes";
import useTariffs from '@/store/tariffs/tariffs';
import WarningWindow from '@/components/UI/WarningWindow';

export default function webinarsTimetable() {
    const router = useRouter()
    const [showWarningLessMoney, setShowWarningLessMoney] = React.useState<boolean>(false)
    const [showWarningMoreMoney, setShowWarningMoreMoney] = React.useState<boolean>(false)
    const [idElem, setIdElem] = React.useState<number>(0)

    const {
        webinarEntries, payElemWebinarEntries
    } = useProfile()

    const {
        countPay, setCountPay
    } = useTariffs()

    const {
        youHaveBalance, setYouHaveBalance
    } = useTariffs()

    const clickPay = (id: number) => {
        if (youHaveBalance < webinarEntries[id - 1].price) {
            setIdElem(id)
            setShowWarningLessMoney(true)
            setCountPay(webinarEntries[id - 1].price)
        } if (youHaveBalance >= webinarEntries[id - 1].price) {
            setShowWarningMoreMoney(true)
        }

    }

    const clickLeftMoreMoney = () => {
        setYouHaveBalance(youHaveBalance - countPay)
        setCountPay(0)
        payElemWebinarEntries(idElem, true)
    }

    return (
        <>
            <Header white />
            <div className='w-[600px] mx-auto my-[50px]'>
                <Search placeholder="Напишите название вебинара" width={600} hideCross />
            </div>
            <Container>
                <>
                    <div className='text-(--text) text-[30px] mb-[40px] font-medium'>Ваши записи на вебинары: </div>
                    <div className='grid grid-cols-3 gap-y-[50px]'>
                        {
                            webinarEntries.map((obj, index: number) => {
                                return (
                                    <div className="w-[370px] shadow-2xl rounded-2xl p-[15px]
                                            hover:scale-105 transition-transform duration-300" key={index}>
                                        <div className='w-[340px] h-[320px] bg-[rgba(235,245,255,1)] rounded-2xl mb-[10px]'>
                                            <Image className='mx-auto py-[10px]'
                                                src={obj.smallImage} alt='' width={274} height={274} draggable='false' />
                                        </div>
                                        <div className='text-(--text) text-[24px] font-semibold mb-[10px]'>{obj.title}</div>
                                        <div className='text-(--text) text-[18px] mb-[10px]'>{obj.smallDesc}</div>
                                        <div className='text-(--color-btn-and-title) text-[18px] font-bold mb-[10px]'>{obj.dateStart}</div>
                                        <div className='text-(--text) text-[20px] mb-[14px] font-semibold'>{obj.author}</div>
                                        <div className={`text-[18px] w-[150px] text-center rounded-2xl
                                            h-[40px] leading-[40px] mx-auto
                                            ${obj.price === 0 || obj.payment ? '' : 'hover:scale-105 transition-transform duration-300 cursor-pointer'}`}
                                            style={{
                                                ...(obj.payment ? {
                                                    background: '#10B981',
                                                    color: 'white'
                                                } : {
                                                    background: 'oklch(63.7% 0.237 25.331)',
                                                    color: 'white'
                                                }),
                                                ...(obj.price === 0 ? {
                                                    background: '#10B981',
                                                    color: 'white'
                                                } : {})
                                            }}
                                            onClick={obj.price === 0 || obj.payment ? undefined : () => clickPay(obj.id)}>
                                            {obj.price === 0 ? 'Бесплатно' : obj.payment ? 'Оплачено' : 'Оплатить'}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            </Container>
            {showWarningLessMoney &&
                <WarningWindow leftClick={() => router.push(`/payService?backPage=webinarsTimetable&idElem=${idElem}`)}
                    rightClick={() => setShowWarningLessMoney(false)}
                    setShowWarning={setShowWarningLessMoney} showWarning={showWarningLessMoney}
                    text={`Нужно оплатить ${countPay} ₽. У вас на счету не хватает денег. Пополните счет на ${countPay} ₽`} />
            }
            {showWarningMoreMoney &&
                <WarningWindow leftClick={clickLeftMoreMoney}
                    rightClick={() => setShowWarningMoreMoney(false)}
                    setShowWarning={setShowWarningMoreMoney} showWarning={showWarningMoreMoney}
                    text={`Нужно оплатить ${countPay} ₽. У вас на балансе ${youHaveBalance} ₽. Списать деньги со счета?`} />
            }
        </>
    )
}