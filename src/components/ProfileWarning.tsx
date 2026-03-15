'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import useCalendar from '@/store/calendar/calendarStore'
import useTariffs from '@/store/tariffs/tariffs'
import useProfile from '@/store/profile/profileStore'

import WarningWindow from './UI/WarningWindow'

type Props = {
    setShowCanselData: React.Dispatch<React.SetStateAction<boolean>>,
    setNoPurchasedSessionsAndZeroBalance: React.Dispatch<React.SetStateAction<boolean>>,
    setShowChangePsychologist: React.Dispatch<React.SetStateAction<boolean>>,
    setNoPurchasedSessionButHaveBalanceLessOneSession: React.Dispatch<React.SetStateAction<boolean>>,
    setNoPurchasedSessionButMoreOneSession: React.Dispatch<React.SetStateAction<boolean>>,
    showChangePsychologist: boolean,
    showCanselData: boolean,
    noPurchasedSessionsAndZeroBalance: boolean,
    noPurchasedSessionButHaveBalanceLessOneSession: boolean,
    noPurchasedSessionButMoreOneSession: boolean,
}

export default function ProfileWarning(props: Props) {
    const router = useRouter()

    const {
        globalActiveDay, setGlobalActiveDay,
        setShowCalendar,
        setGlobalActiveMonth,
        activeMonth, setActiveMonth
    } = useCalendar()

    const {
        countPay, setCountPay,
        youHaveBalance, setYouHaveBalance,
        youHavePaidSessions, setYouHavePaidSessions
    } = useTariffs()

    const clickChangePsychologistYes = () => {
        if (globalActiveDay) toast.error('Вы отменили сессию и меняете психолога')
        else toast.success('Выбирайте нового спихолога')

        router.push('/formSelectionPsychologist/one')
        setGlobalActiveDay(0)
        setActiveMonth(activeMonth)
    }

    const clickCancelData = () => {
        props.setShowCanselData(false)
        setGlobalActiveDay(0)
        setGlobalActiveMonth('')
        setActiveMonth(activeMonth)
        setYouHavePaidSessions(youHavePaidSessions + 1)
        toast.error('Вы отменили сессию')
    }

    const clickPaySessions = () => {
        props.setNoPurchasedSessionsAndZeroBalance(false)
        setYouHaveBalance(youHaveBalance - 2800)
        setYouHavePaidSessions(1)
        setShowCalendar(true)
    }

    const clickTopUpYourAccountZeroBalance = () => {
        router.push('/payService?backPage=profile')
        setCountPay(String(2800))
    }

    const clickTopUpYourAccount = () => {
        router.push('/payService?backPage=profile')
        setCountPay(String(countPay))
    }

    return (
        <>
            {props.showChangePsychologist &&
                <WarningWindow setShowWarning={props.setShowChangePsychologist} showWarning={props.showChangePsychologist}
                    text="При смене психолога придется поменять и время сессии. Уверены, что хотите поменять психолога?"
                    leftClick={clickChangePsychologistYes} rightClick={() => props.setShowChangePsychologist(false)} />
            }
            {props.showCanselData &&
                <WarningWindow setShowWarning={props.setShowCanselData} showWarning={props.showCanselData}
                    text="Уверены, что хотите отменить сессию?" leftClick={clickCancelData} rightClick={() => props.setShowCanselData(false)} />
            }
            {props.noPurchasedSessionsAndZeroBalance &&
                <WarningWindow setShowWarning={props.setNoPurchasedSessionsAndZeroBalance}
                    showWarning={props.noPurchasedSessionsAndZeroBalance}
                    text="У вас нет оплаченных сессий и 0 на балансе. Будете его пополнять?" leftClick={clickTopUpYourAccountZeroBalance}
                    rightClick={() => props.setNoPurchasedSessionsAndZeroBalance(false)} />
            }
            {props.noPurchasedSessionButHaveBalanceLessOneSession &&
                <WarningWindow setShowWarning={props.setNoPurchasedSessionButHaveBalanceLessOneSession}
                    showWarning={props.noPurchasedSessionButHaveBalanceLessOneSession}
                    text={`Баланса не хватает для покупи сессии. Пополните баланс на ${countPay}₽?`}
                    leftClick={clickTopUpYourAccount}
                    rightClick={() => props.setNoPurchasedSessionButHaveBalanceLessOneSession(false)} />
            }
            {props.noPurchasedSessionButMoreOneSession &&
                <WarningWindow setShowWarning={props.setNoPurchasedSessionButMoreOneSession}
                    showWarning={props.noPurchasedSessionButMoreOneSession}
                    text="У вас нет оплаченных сессий, но денег на балансе хватает для покупки сессии. Хотите купить сессию?"
                    leftClick={clickPaySessions}
                    rightClick={() => props.setNoPurchasedSessionButMoreOneSession(false)} />
            }
        </>
    )
}
