'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import Btn from "@/components/UI/Btn"

import calendar from '../../../../public/profile/calendar.png'

import useCalendar from "@/store/calendar/calendarStore"
import useFormSelect from "@/store/formSelection/formSelectionStore"
import useTariffs from "@/store/tariffs/tariffs"
import usePsychologists from "@/store/psychologists/psychologistsStore"

export default function () {
    const route = useRouter()

    const {
        globalActiveDay,
        globalActiveMonth,
        globalActiveTime
    } = useCalendar()

    const {
        tariffPsychologist
    } = useTariffs()

    const {
        activePsychologist,
        listPsychologist
    } = usePsychologists()

    return (
        <>
            <div className='w-[980px] bg-(-bg) rounded-2xl py-[50px] px-[100px] my-[100px] mx-auto'>
                <div className='text-(--color-btn-and-title) text-[40px] font-extrabold mb-[30px]'>За вами закреплено время сессии</div>
                <div className='flex gap-x-[10px] items-center mb-[20px]'>
                    <Image src={calendar} alt='' width={50} height={50} draggable='false' />
                    <div className='text-(--text) text-[24px] font-medium'>
                        {globalActiveDay} {globalActiveMonth} в {globalActiveTime},
                        {
                            tariffPsychologist === 'faceToFace' ? ' в оченой форме' :
                                tariffPsychologist === 'online' ? ' по звонку онлайн' : ' по тарифу семейный'
                        }
                    </div>
                </div>
                <div className='flex gap-x-[10px] items-center mb-[30px]'>
                    <Image src={listPsychologist[activePsychologist].imagePhoto} alt='' width={50} height={50} draggable='false' />
                    <div className='text-(--text) text-[24px] font-medium'>Ваш психотерапевт: {listPsychologist[activePsychologist].name}</div>
                </div>
            </div>
            <div className='w-[330px] mx-auto' onClick={() => route.push('/profile')}>
                <Btn textBtn='Перейти в профиль' widht={320} />
            </div>
        </>
    )
}
