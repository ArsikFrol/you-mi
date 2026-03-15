'use client'

import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";

import Container from "@/components/UI/Container";
import Input from "@/components/UI/Input";

import { TBackPage } from "./layout";

import useFormSelect from "@/store/formSelection/formSelectionStore";
import useTariffs from "@/store/tariffs/tariffs";

import coin from '../../../public/coin.png'

export default function () {
    const searchParams = useSearchParams()

    const backPage: TBackPage = searchParams.get('backPage') as TBackPage

    const {
        numberCard, setNumberCard,
        validUntil, setValidUntil,
        CVV, setCVV,
        cardHolder, setCardHolder,
        setAllFieldsFilledPayService,
        rememberUser, setRememberUser
    } = useFormSelect()

    const { countPay } = useTariffs()

    React.useEffect(() => {

        if (numberCard && validUntil && CVV && cardHolder) setAllFieldsFilledPayService(true)
    }, [numberCard, validUntil, CVV, cardHolder])

    return (
        <Container paddingNoneY>
            <>
                <div className='w-[1000px] mx-auto flex items-center justify-between py-[50px]'>
                    <div className=''>
                        <div className='text-(--text) text-[24px] font-semibold mb-[30px]'>Заполнение данных для оплаты</div>
                        <div className='text-(--color-btn-and-title) text-[16px] font-medium mb-[10px]'>Номер карты</div>
                        <Input height={50} oneTypeData="number" maxLength={19} onChange={setNumberCard} value={numberCard} placeholder="0000 0000 0000 0000" width={480} />
                        <div className='flex justify-between items-center w-[480px] my-[20px]'>
                            <div className=''>
                                <div className='text-(--color-btn-and-title) text-[16px] font-medium mb-[10px]'>Действительна</div>
                                <Input height={50} oneTypeData="number" maxLength={4} onChange={setValidUntil} value={validUntil} placeholder="01/24" width={250} />
                            </div>
                            <div className=''>
                                <div className='text-(--color-btn-and-title) text-[16px] font-medium mb-[10px]'>CVV</div>
                                <Input height={50} oneTypeData="number" maxLength={3} onChange={setCVV} value={CVV} placeholder="000" width={200} />
                            </div>
                        </div>
                        <div className='text-(--color-btn-and-title) text-[16px] font-medium mb-[10px]'>Держатель карты</div>
                        <Input height={50} maxLength={100} onChange={setCardHolder} value={cardHolder} placeholder="ivan inanov" width={480} />
                        <div className='text-(--color-btn-and-title) text-[24px] font-semibold mt-[30px]'>
                            Сумма для оплаты: <span className="text-[28px]">{countPay} ₽</span>
                        </div>
                        <div className='mt-[40px] flex items-center'>
                            <div className="select-none hover:scale-102 transition-transform duration-300 flex gap-x-[10px]
                                items-center">
                                <div className="relative w-[30px] h-[30px]">
                                    <input className="w-[30px] h-[30px] border-(--color-btn-and-title) border-2
                                      checked:bg-blue-500  focus:outline-none  cursor-pointer
                                        rounded-[5px]  appearance-none peer" id={'remember'} type="checkbox"
                                        checked={rememberUser} onChange={() => setRememberUser(!rememberUser)} />
                                    <svg className=" absolute top-[15px] left-1/2 -translate-x-1/2
                                            -translate-y-1/2 w-[30px] h-[30px] text-white opacity-0 peer-checked:opacity-100
                                            pointer-events-none transition-opacity duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <label className='cursor-pointer text-(--text) text-[16px] w-[350px]' htmlFor={'remember'}>
                                    Запомнить карту для последующих оплат
                                </label>
                            </div>
                        </div>
                    </div>
                    <Image src={coin} alt='' width={280} height={280} draggable='false' />
                </div>
            </>
        </Container>
    )
}
