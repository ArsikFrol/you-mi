'use client'

import React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

import useWebinars from "@/store/webinars/webinarsStore"
import { TRoute } from "@/types/routes/types"
import { renderTextWithBreaks } from "./SectionId"

import useProfile from "@/store/profile/profileStore"
import WarningWindow from "./UI/WarningWindow"
import useTariffs from "@/store/tariffs/tariffs"
import { formatNumberWithSpaceFromRight } from "./Tariffs"
import RegisterForWebinar from "./RegisterForWebinar"

export default function SectionIdUpcomingOnes() {
    const router = useRouter()
    const pathName: TRoute = usePathname() as TRoute

    const [payNow, setPayNow] = React.useState<boolean>(false)
    const [enoughMoney, setEnoughMoney] = React.useState<boolean>(false)

    const idElem = Number(pathName.split('/')[3]) - 1

    const {
        listUpcomingOnes
    } = useWebinars()

    const {
        webinarEntries, addWebinarEntries,
    } = useProfile()

    const {
        youHaveBalance, setYouHaveBalance,
        addHistoryListSession,
        countPay, setCountPay
    } = useTariffs()

    const clickLeftWarning = () => {
        const today = new Date()
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedWithZeros = `${day}.${month}.${year}`

        setYouHaveBalance(youHaveBalance - listUpcomingOnes[idElem].price)
        toast.success('Записали вас)')
        router.push('/webinarsTimetable')
        const newObj = {
            ...listUpcomingOnes[idElem],
            payment: true
        }
        addWebinarEntries(newObj)
        addHistoryListSession({
            id: 1,
            data: `${formattedWithZeros}`,
            desc: 'Оплата записи на вебинар',
            price: listUpcomingOnes[idElem].price
        })
    }

    const clickLeftEnoughMoney = () => {
        setCountPay(listUpcomingOnes[idElem].price - youHaveBalance)
        router.push(`/payService?backPage=webinarsTimetable&idElem=${idElem}`)
    }

    return (
        <div className=''>
            <Image src={listUpcomingOnes[idElem].bigImage} alt=''
                width={780} height={450} draggable='false'
                className="mx-auto mt-[70px]" />
            <div className='w-[760px] mx-auto'>
                <div className='text-(--color-btn-and-title) text-[40px] font-extrabold mt-[40px]'>{listUpcomingOnes[idElem].title}</div>
                <div className='text-(--text) text-[18px] mt-[30px] mb-[60px]'>{renderTextWithBreaks(listUpcomingOnes[idElem].bigDesc)}</div>
                <div className='flex justify-between text-(--text) text-[20px] mb-[20px]'>
                    <div className='font-semibold'>{listUpcomingOnes[idElem].author}</div>
                    <div className=''>Эфир будет: {listUpcomingOnes[idElem].dateStart}</div>
                </div>
                {listUpcomingOnes[idElem].price ?
                    <div className='flex items-center gap-x-[30px] mt-[30px] mb-[20px]'>
                        <div className='text-(--text) text-[20px] font-medium'>Вебинар стоит:</div>
                        <div className='w-[170px] h-[50px] leading-[50px] text-center rounded-2xl 
                        text-[20px] text-white bg-(--color-btn-and-title)'>
                            {formatNumberWithSpaceFromRight(listUpcomingOnes[idElem].price)} ₽
                        </div>
                    </div>
                    :
                    <div className='font-semibold h-[60px] leading-[60px] bg-[rgba(235,245,255,1)] mx-auto mt-[40px]
                            px-[20px] rounded-2xl w-[450px] text-center text-[30px] text-(--color-btn-and-title) mb-[40px]'>
                        Вебинар бесплатный
                    </div>
                }
                <div className='flex items-center gap-x-[30px]'>
                    <div className=''>Тэги: </div>
                    <div className='flex gap-x-[10px]'>
                        {
                            listUpcomingOnes[idElem].tags.map((elem, index: number) => {
                                return (
                                    <div className="h-[40px] leading-[40px] text-(--text)bg-[rgba(235,245,255,1)]
                                    px-[10px] rounded-2xl"
                                        key={index}>{elem}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <RegisterForWebinar idElem={idElem} listUpcomingOnes={listUpcomingOnes}
                    setEnoughMoney={setEnoughMoney} setPayNow={setPayNow} />
            </div>
            {payNow &&
                <WarningWindow leftClick={clickLeftWarning} rightClick={setPayNow}
                    setShowWarning={setPayNow} showWarning={payNow}
                    text={`Цена регистрации ${listUpcomingOnes[idElem].price}. У вас на балансе ${youHaveBalance}. Оплатить сейчас?`} />
            }
            {enoughMoney &&
                <WarningWindow leftClick={clickLeftEnoughMoney} rightClick={setEnoughMoney}
                    setShowWarning={setEnoughMoney} showWarning={enoughMoney}
                    text={`Цена регистрации ${listUpcomingOnes[idElem].price}. 
                        У вас на балансе не хватает денег. Пополните баланс на ${listUpcomingOnes[idElem].price - youHaveBalance}?`} />
            }
        </div>
    )
}