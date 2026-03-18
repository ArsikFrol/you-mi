'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Btn from "./UI/Btn";
import Input from "./UI/Input";

import useTariffs from "@/store/tariffs/tariffs";
import { TListUpcomingOnes } from "@/store/webinars/types";
import useProfile from "@/store/profile/profileStore";

type Props = {
    listUpcomingOnes: TListUpcomingOnes[],
    idElem: number,
    setPayNow: React.Dispatch<React.SetStateAction<boolean>>,
    setEnoughMoney: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RegisterForWebinar(props: Props) {
    const router = useRouter()

    const [allData, setAllData] = React.useState<boolean>(false)
    const [error, setError] = React.useState<any>({
        nameForWebinar: false,
        emailForWebinar: false,
        surnameForWebinar: false,
        agreeWithRules: false
    })

    const {
        youHaveBalance
    } = useTariffs()

    const {
        addWebinarEntries,
        nameForWebinar, setNameForWebinar,
        emailForWebinar, setEmailForWebinar,
        surnameForWebinar, setSurnameForWebinar,
        agreeWithRules, setAgreeWithRules,
        email,
        FIO,
    } = useProfile()

    const clickSignUp = () => {
        if (allData === false) {
            if (nameForWebinar === '') setError({ ...error, nameForWebinar: true })
            if (surnameForWebinar === '') setError({ ...error, surnameForWebinar: true })
            if (emailForWebinar === '') setError({ ...error, emailForWebinar: true })
        } else {
            if (props.listUpcomingOnes[props.idElem].price === 0) {
                toast.success('Записали вас)')
                router.push('/webinarsTimetable')
                const newObj = {
                    ...props.listUpcomingOnes[props.idElem],
                    payment: 0
                }
                addWebinarEntries(newObj)
            } if (youHaveBalance >= props.listUpcomingOnes[props.idElem].price) {
                props.setPayNow(true)
            } if (youHaveBalance < props.listUpcomingOnes[props.idElem].price) {
                props.setEnoughMoney(true)
            } else {
                console.log()
            }
        }

    }

    const clickAllData = () => {
        setNameForWebinar(FIO.split(' ')[0])
        setSurnameForWebinar(FIO.split(' ')[1])
        setEmailForWebinar(email)
    }

    React.useEffect(() => {
        if (nameForWebinar && emailForWebinar && surnameForWebinar && agreeWithRules) setAllData(true)
    }, [nameForWebinar, emailForWebinar, surnameForWebinar, agreeWithRules])

    console.log(error)
    return (
        <div className=''>
            <div className=''>
                <div className='text-text text-[24px] font-semibold mt-[70px] mb-[20px]'>Регистрация на вебинар</div>
                <div className='mb-[20px]'>
                    <div className='text-btn-and-title text-[16px] font-medium mb-[10px]'>Имя</div>
                    <Input height={50} maxLength={100} onChange={setNameForWebinar} placeholder="Иван"
                        value={nameForWebinar} width={650} error={error.nameForWebinar} />
                </div>
                <div className='mb-[20px]'>
                    <div className='text-btn-and-title text-[16px] font-medium mb-[10px]'>Фамилия</div>
                    <Input height={50} maxLength={100} onChange={setSurnameForWebinar} placeholder="Иванов"
                        value={surnameForWebinar} width={650} error={error.surnameForWebinar} />
                </div>
                <div className='mb-[20px]'>
                    <div className='text-btn-and-title text-[16px] font-medium mb-[10px]'>Электронная почта</div>
                    <Input height={50} maxLength={100} onChange={setEmailForWebinar} placeholder="ivan.ivanov@mail.ru"
                        value={emailForWebinar} width={650} error={error.emailForWebinar} />
                </div>
            </div>
            <div className='text-btn-and-title text-[20px] mb-[40px] font-medium
                hover:scale-105 transition-transform duration-300 cursor-pointer w-[315px]'
                onClick={clickAllData}>
                Вставить данные из профиля
            </div>
            <div className=''>
                <div className="select-none hover:scale-102 transition-transform duration-300 flex gap-x-[30px]
                                            items-center">
                    <div className="relative">
                        <input className=" w-[30px] h-[30px]  border-btn-and-title border-2
                                                  checked:bg-blue-500  focus:outline-none  cursor-pointer
                                                    rounded-[5px]  appearance-none peer" id='agree' type="checkbox"
                            checked={agreeWithRules} onChange={() => setAgreeWithRules(!agreeWithRules)} />
                        <svg
                            className=" absolute top-[14px] left-1/2 -translate-x-1/2
                                                        -translate-y-1/2 w-5 h-5 text-white opacity-0 peer-checked:opacity-100
                                                        pointer-events-none transition-opacity duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <label className='cursor-pointer text-text text-[16px] w-[580px]' htmlFor='agree'>
                        Я согласен(-а) на обработку моих данных в соответствии
                        с <span className="text-btn-and-title">Политикой защиты персональных данных</span>
                    </label>
                </div>
            </div>
            <div onClick={clickSignUp} className='w-[330px] mx-auto mt-[30px]'>
                <Btn textBtn="Записаться" widht={320} />
            </div>
        </div>
    )
}
