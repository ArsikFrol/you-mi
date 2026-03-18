'use client'

import toast from 'react-hot-toast'

import ReferralProgram from '@/components/ReferralProgram'
import Btn from '@/components/UI/Btn'
import Container from '../../../components/UI/Container'

import useProfile from '@/store/profile/profileStore'
import { formatNumberWithSpaceFromRight } from '@/components/Tariffs'


export default function () {
    const {
        referralPiple,
        moneyReferralPiple
    } = useProfile()

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Текст скопирован')
        } catch (err) {
            console.error('Ошибка копирования: ', err);
            fallbackCopyText(text);
        }
    };

    return (
        <Container>
            <>
                <ReferralProgram paddingNone relative insidePadding purple rounded />
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-y-[20px] mt-[50px]'>
                        <div className='text-btn-and-title text-[18px] font-medium'>Ваша ссылка</div>
                        <div className='text-[rgba(120,114,185,0.5)] text-[16px]
                                border border-btn-and-title rounded-2xl
                                w-[730px] h-[50px] leading-[50px] px-[30px]'>
                            https://youmi/signup/therapist/3BR8Fpp4
                        </div>
                    </div>
                    <div className='mt-auto' onClick={() => copyToClipboard('https://youmi/signup/therapist/3BR8Fpp4')}>
                        <Btn textBtn='Копировать' widht={260} />
                    </div>
                </div>
                <div className='flex gap-x-[20px] items-center mt-[30px]'>
                    <div className='text-text text-[18px] font-medium'>По вашей ссылке прошли первую сессию:</div>
                    <div className='bg-btn-and-title h-[50px] w-[180px]
                            text-center leading-[50px] text-white rounded-2xl'>
                        {referralPiple} человек
                    </div>
                </div>
                <div className='flex gap-x-[20px] items-center'>
                    <div className='text-text text-[18px] font-medium'>Вам отправили:</div>
                    <div className='bg-btn-and-title h-[50px] w-[180px] text-center
                        leading-[50px] text-white rounded-2xl'>
                        {formatNumberWithSpaceFromRight(moneyReferralPiple)} ₽
                    </div>
                </div>
            </>
        </Container>
    )
}

function fallbackCopyText(text: string) {
    throw new Error('Function not implemented.');
}
