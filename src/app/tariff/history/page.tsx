'use client'

import { formatNumberWithSpaceFromRight } from "@/components/Tariffs"

import useTariffs from "@/store/tariffs/tariffs"
import { TListElemHistory } from "@/store/tariffs/types"

export default function History() {
    const {
        historyListSession
    } = useTariffs()

    return (
        <>
            {historyListSession.length ?
                <div className='bg-(-bg) rounded-2xl p-[50px] pl-[100px] mx-auto my-[50px]
                    4xl:w-[1500px]
                    3xl:w-[1300px]
                    2xl:w-[1200px]
                    xl:max-2xl:w-[1140px]
                    lg:max-xl:w-[960px]
                    md:max-lg:w-[690px]
                    sm:max-md:mx-[30px]'>
                    <div className='grid mb-[40px]
                        lg:grid-cols-3
                        md:max-lg:grid-cols-[2fr_3fr_140px]
                        max-md:grid-cols-[2fr_3fr_110px]'>
                        <div className='text-(--text) text-[20px] font-semibold'>Дата</div>
                        <div className='text-(--text) text-[20px] font-semibold'>Описание</div>
                        <div className='text-center text-(--text) text-[20px] font-semibold'>Стоимость</div>
                    </div>
                    <div className='flex flex-col gap-y-[30px] h-[420px] overflow-y-auto'>
                        {
                            historyListSession.map((obj: TListElemHistory, index: number) => {
                                return (
                                    <div className="grid items-center
                                        lg:grid-cols-3
                                        max-lg:grid-cols-[2fr_3fr_1fr]" key={index}>
                                        <div className='text
                                            lg:text-[18px]
                                            max-lg:text-[16px]'>{obj.data}</div>
                                        <div className='text
                                            lg:text-[18px]
                                            max-lg:text-[16px]'>{obj.desc}</div>
                                        <div className='text-center rounded-2xl mx-auto h-[50px] leading-[50px]
                                            bg-(--color-btn-and-title) font-semibold text-white
                                            lg:text-[18px] lg:w-[160px]
                                            md:max-lg:text-[16px] md:max-lg:w-[140px]
                                            max-md:w-[110px]'>
                                            {formatNumberWithSpaceFromRight(obj.price)}₽
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <div className='text-(--text) text-[44px] font-semibold w-[350px] mx-auto mt-[200px]'>
                    История пуста
                </div>
            }
        </>
    )
}
