'use client'

import Image from 'next/image'

import Container from '@/components/UI/Container'
import Input from '@/components/UI/Input'

import useTariffs from '@/store/tariffs/tariffs'
import { formatNumberWithSpaceFromRight } from '@/components/Tariffs'

import webMoney from '../../../../public/topUpBalance/webMoney.png'
import qiwi from '../../../../public/topUpBalance/qiwi.png'

export default function topUpBalance() {
    const {
        countPay, setCountPay,
        youHaveBalance
    } = useTariffs()

    return (
        <Container>
            <>
                <div className='w-[680px] text-[24px] font-semibold text-(--text) mb-[50px]'>
                    Пополняйте баланс для оплаты сессий заранее и не беспокойтесь о состоянии банковской карты.
                </div>
                <div className='text-(--color-btn-and-title) text-[18px] font-medium mb-[10px]'>Сумма в рублях</div>
                <Input oneTypeData='number' maxLength={10} onChange={setCountPay} 
                    value={countPay !== 0 ? `${countPay}` : ''} placeholder='0 ₽' width={280} height={50} />
                <div className='text-(--color-btn-and-title) text-[18px] font-medium mb-[10px] mt-[30px]'>
                    Выберите способ оплаты
                </div>
                <div className='flex gap-x-[30px]'>
                    <div className='hover:scale-105 transition-transform duration-300 cursor-pointer
                        w-[160px] h-[50px] py-[10px] text-center border-2 border-(--color-btn-and-title) rounded-2xl'>
                        <Image className='mx-auto'
                            src={qiwi} alt='' width={80} height={30} draggable='false' />
                    </div>
                    <div className='hover:scale-105 transition-transform duration-300 cursor-pointer
                        w-[190px] h-[50px] py-[10px] text-center border-2 border-(--color-btn-and-title) rounded-2xl'>
                        <Image className='mx-auto'
                            src={webMoney} alt='' width={111} height={30} draggable='false' />
                    </div>
                    <div className='hover:scale-105 transition-transform duration-300 cursor-pointer
                        w-[260px] h-[50px] leading-[50px] text-center border-2 border-(--color-btn-and-title) 
                        rounded-2xl text-(--color-btn-and-title) text-[16px] font-medium'>Банковской картой</div>
                </div>
                <div className='flex items-center gap-x-[30px] mt-[50px]'>
                    <div className='text-(--text) text-[20px] font-medium'>На счету:</div>
                    <div className='w-[170px] h-[50px] leading-[50px] text-center 
                        rounded-2xl text-[20px] text-white bg-(--color-btn-and-title)'>
                            {formatNumberWithSpaceFromRight(youHaveBalance)} ₽
                    </div>
                </div>
            </>
        </Container>
    )
}