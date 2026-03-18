'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "./UI/Container";

import calendar from '../../public/profile/calendar.png'
import client from '../../public/user.png'
import watch from '../../public/watch.png'

export default function ProfilePsychologist() {
    const router = useRouter()

    return (
        <Container minH >
            <div className="flex justify-between">
                <div className='w-[570px] bg-(-bg) rounded-r-2xl px-[60px] py-[50px]'>
                    <div className='text-(--text) text-[24px] font-semibold mb-[20px]'>Ближайшая сессия:</div>
                    <div className='flex gap-x-[20px] items-center mb-[20px] text-(--text) text-[18px]'>
                        <Image src={calendar} alt='' width={50} height={50} draggable='false' />
                        {/* {globalActiveDay !== 0 ?
                                <div className='text-(--text) text-[18px]'>
                                    {globalActiveDay} {globalActiveMonth} в {globalActiveTime},
                                    {
                                        tariffPsychologist === 'faceToFace' ? ' в оченой форме' :
                                            tariffPsychologist === 'online' ? ' по звонку онлайн' : ' по тарифу семейный'
                                    }
                                </div>
                                : <>Не назначена</>
                            } */}14 августа в 11:00
                    </div>
                    {
                        <div className='flex gap-x-[30px] mb-[30px]'>
                            <div /* onClick={clickChangeData} */
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                    h-[50px] text-white text-[18px] leading-[50px] text-center bg-(--color-btn-and-title) rounded-2xl'>
                                Перенести
                            </div>
                            <div  /* onClick={() => setShowCanselData(true)} */
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                    h-[50px] text-(--color-btn-and-title) text-[18px] leading-[48px] text-center
                                    bg-white border-2 border-(--color-btn-and-title) rounded-2xl'>
                                Отменить
                            </div>
                        </div>
                    }
                    <div className='text-(--text) text-[24px] font-semibold mb-[20px]'>Ваш клиент:</div>
                    <div className='flex gap-x-[20px] items-center mb-[20px]'>
                        <Image src={client} alt='' width={50} height={50} draggable='false' />
                        <div className='text-(--text) text-[18px]'>Инна Ильина</div>
                    </div>
                    <div className='flex gap-x-[30px]'>
                        <div onClick={() => router.push('/messages')}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px]
                                    h-[50px] text-white text-[18px] leading-[50px] text-center bg-(--color-btn-and-title) rounded-2xl'>
                            Связаться
                        </div>
                        <div  /* onClick={() => setShowCanselData(true)} */
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[220px]
                                    h-[50px] text-(--color-btn-and-title) text-[18px] leading-[48px] text-center
                                    bg-white border-2 border-(--color-btn-and-title) rounded-2xl'>
                            Посмотреть карту
                        </div>
                    </div>
                </div>
                <div className='w-[570px] bg-(-bg) rounded-r-2xl px-[60px] py-[50px]
                    flex flex-col justify-between'>
                    <div className='flex gap-x-[20px] items-center'>
                        <div className='text-(--text) text-[24px] font-semibold w-[285px] text-right pr-[20px]'>До сессии</div>
                        <div className='bg-(--color-btn-and-title) py-[10px] px-[20px]  w-[285px] rounded-2xl text-white
                            text-[24px] font-semibold text-center'>10 минут</div>
                    </div>
                    <Image src={watch} alt='' width={180} height={180} draggable='false'
                        className="mx-auto" />
                    <div className='underline text-(--text) text-[18px] text-center
                        hover:scale-105 transition-transform duration-300 cursor-pointer'>Ссылка на встречу</div>
                </div>
            </div>
        </Container>
    )
}
