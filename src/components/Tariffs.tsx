'use client'

import { motion } from "framer-motion"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

import useTariffs from "@/store/tariffs/tariffs";
import { TElem } from "@/store/tariffs/types";

import Btn from "./UI/Btn";
import Container from "./UI/Container";
import Title from "./UI/Title";
import Input from "./UI/Input";
import ToggleSwitch from "./UI/ToggleSwitch";
import WarningWindow from "./UI/WarningWindow";
import toast from "react-hot-toast";

export const formatNumberWithSpaceFromRight = (num: number) => {
    const str = String(num);
    if (str.length <= 3) return str;
    return str.slice(0, -3) + ' ' + str.slice(-3);
}

const getAnimationProps = (id: number) => {
    switch (id) {
        case 1:
            return {
                initial: { y: 100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 },
                transition: { delay: 0.1 }
            }
        case 2:
            return {
                initial: { y: 100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 },
                transition: { delay: 0.2 }
            }
        case 3:
            return {
                initial: { y: 100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 },
                transition: { delay: 0.3 }
            }
        case 4:
            return {
                initial: { y: 100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 },
                transition: { delay: 0.4 }
            }
        default:
            return {
                initial: { y: 100, opacity: 0 },
                transition: { duration: 0.7 }
            }
    }
}

export default function Tariffs() {
    const [showWarningLessOneSession, setShowWarningLessOneSession] = React.useState<boolean>(false)
    const [showWarningSeveralCountSession, setShowWarningSeveralCountSession] = React.useState<boolean>(false)
    const [countPaySessionUse, setCountPaySessionUse] = React.useState<number>(0)
    const [priceForSessionUse, setPriceForSessionUse] = React.useState<number>(0)
    const [countSessionUse, setCountSessionUse] = React.useState<number>(0)

    const session = useSession()
    const router = useRouter()

    const {
        promoCode, setPromoCode,
        listTariffs,
        autoRenewal, setAutoRenewal,
        countPay, setCountPay,
        youHaveBalance, setYouHaveBalance,
        youHavePaidSessions, setYouHavePaidSessions,
        addHistoryListSession
    } = useTariffs()

    const clickPay = (price: number, countSession: number) => {
        if (youHaveBalance >= price) {
            setShowWarningSeveralCountSession(true)
            setCountPaySessionUse(countSession)
            setPriceForSessionUse(price)
        } else {
            setCountPay(String(price))
            setShowWarningLessOneSession(true)
            setCountSessionUse(countSession)
        }
    }

    const clickPaySession = () => {
        toast.success(`Успешно купленно ${countPaySessionUse}
            ${countPaySessionUse === 1 ? 'сессия' : 'сессий'}`)
        setYouHaveBalance(youHaveBalance - priceForSessionUse)
        setYouHavePaidSessions(youHavePaidSessions + countPaySessionUse)
        const today = new Date()
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedWithZeros = `${day}.${month}.${year}`
        addHistoryListSession({
            id: 1,
            data: `${formattedWithZeros}`,
            desc: `Покупка ${countPaySessionUse}
                ${countPaySessionUse === 1 ? 'сессии' : 'сессий'}`,
            price: priceForSessionUse
        })
        router.push('/profile')
    }

    return (
        <div className=''>
            <Container>
                <>
                    <Title text="Тарифы" />
                    <div className="grid grid-cols-4 gap-y-[30px] mb-[70px]">
                        {
                            listTariffs.map((obj: TElem, index: number) => {
                                const animProps = getAnimationProps(obj.id)
                                return (
                                    <motion.div
                                        key={index}
                                        {...animProps}
                                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        className="w-[280px] bg-(-bg) rounded-2xl">
                                        <div className="w-[280px] bg-blue-50 rounded-t-2xl
                                                text-center text-(--text) text-[18px] font-medium leading-[57px]">
                                            {obj.countSession} сессия
                                        </div>
                                        <div className="py-2.5 flex flex-col items-center
                                            text-(--color-btn-and-title) text-[20px] font-medium">
                                            <span className="text-[24px] font-bold">
                                                {formatNumberWithSpaceFromRight(obj.priceOneSession)}₽
                                            </span> за сессию
                                        </div>
                                        <div onClick={() => clickPay(obj.countSession * obj.priceOneSession, obj.countSession)}
                                            className="hover:scale-105 transition-transform duration-300 cursor-pointer
                                            bg-(--color-btn-and-title) rounded-2xl text-[18px] text-white
                                            font-semibold w-[220px] h-[70px] mx-auto block">
                                            <span className="w-[100px] mx-auto block text-center pt-2">
                                                Оплатить {formatNumberWithSpaceFromRight(obj.countSession * obj.priceOneSession)}₽
                                            </span>
                                        </div>
                                        <div style={obj.installmentPlan ? {} : { visibility: 'hidden' }}
                                            className="hover:scale-105 transition-transform duration-300 cursor-pointer
                                            w-[220px] mx-auto leading-[50px] text-[18px] text-(--text)
                                            font-medium text-center bg-red-100 rounded-2xl my-2.5">В рассрочку</div>
                                        <div style={obj.benefit ? {} : { visibility: 'hidden' }}
                                            className="w-[220px] mx-auto text-center text-(--color-btn-and-title)
                                            text-[18px] font-medium py-2.5">
                                            Выгода {formatNumberWithSpaceFromRight(obj.benefit)}₽
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                    <div className='flex items-center gap-x-[30px] mt-[50px] mb-[50px]'>
                        <div className='text-(--text) text-[20px] font-medium'>На счету:</div>
                        <div className='w-[170px] h-[50px] leading-[50px] text-center rounded-2xl
                            text-[20px] text-white bg-(--color-btn-and-title)'>{formatNumberWithSpaceFromRight(youHaveBalance)} ₽</div>
                    </div>
                    {session.status === 'authenticated' ?
                        <>
                            <div className='bg-(-bg) rounded-2xl py-[30px] px-[50px] flex items-center
                                justify-between w-[880px] mb-[50px]'>
                                <div className=''>
                                    <div className='text-(--text) text-[20px] font-semibold'>Включить автопродление</div>
                                    <div className='text-(--text) text-[16px] w-[560px] mt-[10px]'>
                                        Автоматически продлевает пакет после последней сессии.
                                        Не волнуйтесь, вы в любой момент сможете отменить подписку.</div>
                                </div>
                                <div className=''>
                                    <ToggleSwitch value={autoRenewal} setValue={setAutoRenewal} />
                                </div>
                            </div>
                            <div className='w-[380px] mx-auto mb-[30px]'>
                                <Input maxLength={100} onChange={setPromoCode}
                                    value={promoCode} placeholder="Введите промокод" width={380} height={60} />
                            </div>
                            <div className="w-[380px] mx-auto">
                                <Btn textBtn="Отправить" widht={380} />
                            </div>
                        </> : <></>
                    }
                </>
            </Container>
            {showWarningLessOneSession &&
                <WarningWindow showWarning={showWarningLessOneSession} setShowWarning={setShowWarningLessOneSession}
                    leftClick={() => router.push(`/payService?backPage=tariff&countSession=${countSessionUse}`)}
                    rightClick={() => setShowWarningLessOneSession(false)}
                    text={`У вас на счету ${youHaveBalance}. Пополнить счет на ${countPay - youHaveBalance}?`} />
            }
            {showWarningSeveralCountSession &&
                <WarningWindow showWarning={showWarningSeveralCountSession}
                    setShowWarning={setShowWarningSeveralCountSession}
                    leftClick={clickPaySession} rightClick={() => setShowWarningSeveralCountSession(false)}
                    text={`Вы хотите купить ${countPaySessionUse} ${countPaySessionUse === 1 ? 'сессию' : 'сессий'}?`} />
            }
        </div>
    )
}
