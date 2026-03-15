'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image';
import toast from 'react-hot-toast'

import Btn from "@/components/UI/Btn";

import useFormSelect from '@/store/formSelection/formSelectionStore';
import useTariffs from '@/store/tariffs/tariffs';
import useProfile from '@/store/profile/profileStore';
import useWebinars from '@/store/webinars/webinarsStore';

import { TRoute } from '@/types/routes/types';

import logo from '../../../public/logo.png'

export type TBackPage = 'tariff' | 'formPsychologists' | 'webinarsTimetable' | 'profile'

type TListElem = {
    id: number, link: TRoute
}

type TListPage = {
    id: number, link: string, width: number, text: string
}

const listELem: TListElem[] = [
    { id: 1, link: '/formSelectionPsychologist/one' },
    { id: 2, link: '/formSelectionPsychologist/two' },
    { id: 3, link: '/formSelectionPsychologist/three' },
    { id: 4, link: '/payService' }
]

const listPage: TListPage[] = [
    { id: 1, link: 'one', width: 220, text: 'Запрос' },
    { id: 2, link: 'two', width: 220, text: 'Данные' },
    { id: 3, link: 'three', width: 310, text: 'Выбор психолога' },
    { id: 4, link: 'payService', width: 310, text: 'Оплата' }
]

export default function FormLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const router = useRouter()
    const searchParams = useSearchParams()

    const backPage: TBackPage = searchParams.get('backPage') as TBackPage
    const idElemWebinarsTimetable: number = Number(searchParams.get('idElem'))
    const countSession: number = Number(searchParams.get('countSession'))

    const {
        allFieldsFilledOne,
        allFieldsFilledTwo,
        selectData,
        allFieldsFilledPayService, setAllFieldsFilledPayService,
        rememberUser,
        clearAllFields
    } = useFormSelect()

    const {
        youHaveBalance, setYouHaveBalance,
        countPay, setCountPay,
        addHistoryListSession,
        youHavePaidSessions, setYouHavePaidSessions
    } = useTariffs()

    const {
        addWebinarEntries,
        payElemWebinarEntries
    } = useProfile()

    const {
        listUpcomingOnes
    } = useWebinars()

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    };

    const clickBack = () => {
        router.back();

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    }

    const payToast = () => {
        const today = new Date()
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedWithZeros = `${day}.${month}.${year}`

        if (backPage === 'tariff' && allFieldsFilledPayService) {
            router.push('/profile')
            toast.success('Оплата прошла успешно!')
            setYouHavePaidSessions(youHavePaidSessions + countSession)
            addHistoryListSession({
                id: 1,
                data: `${formattedWithZeros}`,
                desc: `Покупка ${countSession === 1 ? '1 сессии' : `${countSession} сессий`}`,
                price: countPay
            })
            setCountPay(0)
        } if (backPage === 'formPsychologists') {
            if (allFieldsFilledOne && allFieldsFilledTwo && selectData && allFieldsFilledPayService) {

            } toast.success('Оплата прошла успешно!')
            router.push('/formSelectionPsychologist/complete')
            setYouHaveBalance(youHaveBalance + countPay)
            addHistoryListSession({
                id: 1,
                data: `${formattedWithZeros}`,
                desc: 'Оплата 1 сессии у психолога',
                price: countPay
            })
            setCountPay(0)
        } if (backPage === 'webinarsTimetable' && allFieldsFilledPayService) {
            toast.success('Записали вас)')
            router.push('/webinarsTimetable')
            payElemWebinarEntries(idElemWebinarsTimetable, true)
            addHistoryListSession({
                id: 1,
                data: `${formattedWithZeros}`,
                desc: 'Покупка 1 сессии',
                price: listUpcomingOnes[idElemWebinarsTimetable].price
            })
            setYouHaveBalance(0)
            setCountPay(0)
        } if (backPage === 'profile' && allFieldsFilledPayService) {
            router.push('/profile')
            toast.success('Оплата прошла успешно!')
            setYouHavePaidSessions(1)
            addHistoryListSession({
                id: 1,
                data: `${formattedWithZeros}`,
                desc: 'Покупка 1 сессии',
                price: countPay
            })
            setCountPay(0)
        } if (!rememberUser) clearAllFields()
    }

    return (
        <>
            <title>Оплата | You-Mi</title>
            <Link href='/' className='w-[180px] mx-auto my-[50px] block'>
                <Image className='hover:scale-105 transition-transform duration-300'
                    src={logo} alt='' width={180} height={46} draggable='false' />
            </Link>
            {backPage === 'formPsychologists' ?
                <div className='flex justify-between w-[1180px] mx-auto mb-[50px]'>
                    {
                        listPage.map((obj: TListPage) => {
                            return (
                                <Link key={obj.id} style={{ width: `${obj.width}px` }}
                                    href={obj.id === 4 ? '/payService' : '/formSelectionPsychologist/' + obj.link}
                                    className='block text-center h-[50px] leading-[50px] text-white text-[20px] 
                                    font-semibold bg-(--color-btn-and-title) rounded-3xl transition-all 
                                    duration-300 cursor-pointer hover:scale-105 opacity-100'>
                                    {obj.text}
                                </Link>
                            )
                        })
                    }
                </div> : <></>
            }
            <>
                {children}
            </>
            <div className='flex gap-x-[50px] items-center w-[500px] mx-auto mt-[50px]'>
                <div onClick={clickBack} className='transition-transform hover:scale-105 
                    duration-300 cursor-pointer w-[220px] border border-(--color-btn-and-title) h-[60px] leading-[60px] 
                    text-center rounded-2xl'>Назад</div>
                <div className='w-[230px]' onClick={payToast}>
                    <Btn textBtn='Оплатить' widht={220} />
                </div>
            </div>
            {backPage === 'formPsychologists' ?
                <div className='flex justify-center mt-8 gap-5 mb-[100px]'>
                    {
                        listELem.map((obj: TListElem, index: number) => {
                            return (
                                <Link href={obj.link}
                                    key={index}
                                    style={{
                                        ...(index == 3 ? { background: 'rgba(120, 114, 185, 1)' } : {})
                                    }}
                                    className='cursor-pointer w-3 h-3 rounded-full transition-all duration-300 bg-gray-300'
                                    onClick={scrollToTop} />
                            )
                        })
                    }
                </div> : <></>
            }
        </>
    );
}