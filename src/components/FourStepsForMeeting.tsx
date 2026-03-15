'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"

import Title from "./UI/Title";
import Btn from "./UI/Btn";
import Container from "./UI/Container";

import bgCount from '../../public/countAndBg/bgCount.png'
import calendar from '../../public/fourStepsForMeeting/calendar.png'
import calendarMini from '../../public/fourStepsForMeeting/calendarMini.png'
import bgCalendarMini from '../../public/fourStepsForMeeting/bgCalendarMini.png'
import four from '../../public/countAndBg/four.png'
import three from '../../public/countAndBg/three.png'
import two from '../../public/countAndBg/two.png'
import one from '../../public/countAndBg/one.png'
import profiles from '../../public/fourStepsForMeeting/profiles.png'
import questionnaire from '../../public/fourStepsForMeeting/questionnaire.png'
import test from '../../public/fourStepsForMeeting/test.png'
import { useWindowSize } from "@/hooks/useWindowSize";

type TElem = {
    id: number,
    widhtCount: number,
    count: StaticImageData,
    title: string,
    desc: string,
    img: StaticImageData
}

const listElem: TElem[] = [
    {
        id: 1,
        widhtCount: 50,
        count: one,
        title: 'Заполните анкету,',
        desc: 'ответив на 5 простых вопросов, определив тему и пожелания по психологу.',
        img: questionnaire
    },
    {
        id: 2,
        widhtCount: 89,
        count: two,
        title: 'Ознакомьтесь с профилями',
        desc: 'специалистов и посмотрите видео-визитки. Выберите психолога с которым вам будет комфортно.',
        img: profiles
    },
    {
        id: 3,
        widhtCount: 89,
        count: three,
        title: 'Определите дату и время',
        desc: 'первой сессии. Если у вас поменяются планы, вы сможете ее отменить или перенести.',
        img: calendar
    },
    {
        id: 4,
        widhtCount: 82,
        count: four,
        title: 'Пройдите тестирование',
        desc: 'в личном кабинете для того, чтобы сделать первую сессию более продуктивной.',
        img: test
    }
]

export default function FourStepsForMeeting() {
    const {width} = useWindowSize()

    return (
        <Container purple>
            <>
                <Title text='Сделайте 4 шага навстречу психотерапии' />
                <div className="flex flex-col my-[100px] gap-y-[130px]">
                    {
                        listElem.map((obj: TElem, index: number) => {
                            return (
                                <motion.div key={index}
                                    initial={{ x: obj.id === 1 || obj.id === 3 ? -100 : obj.id === 2 || obj.id === 4 ? 100 : 0, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                                    className={`relative flex justify-between
                                        ${width && width < 730 ? 'w-[360px] mx-auto' : ''}
                                        `}>
                                    <div style={obj.id == 2 || obj.id == 4 ? { order: 2 } : {}} 
                                        className={`flex items-center 
                                            lg:gap-x-[50px]
                                            ${width && width < 730 && obj.id === 1 ? 'gap-x-[30px]' : 'gap-x-[20px]'}`}>
                                        <Image src={obj.count} alt='' width={obj.widhtCount} height={100} 
                                            draggable='false' className={`relative z-10 w-auto 
                                                lg:h-[100px]
                                                md:h-[90px]
                                                ${width && width < 730 && obj.id === 1 ? 'pl-[30px]' : ''}`} />
                                        <Image loading="eager" style={obj.id == 2 || obj.id == 4 ? {} : { left: '30px' }}
                                            src={bgCount} alt='' width={166} 
                                            height={160} draggable='false' className='absolute 
                                                lg:w-[166px] lg:h-[160px]
                                                md:w-[130px] h-[130px]'/>
                                        <div className="relative flex flex-col gap-y-[5px]">
                                            <div className="text-(--text) text-[24px] font-semibold">{obj.title}</div>
                                            <div className="text-(--text)font-normal
                                                xl:text-[20px] xl:w-[390px]
                                                lg:text-[18px] lg:w-[300px]
                                                md:text-[15px] md:w-[220px]
                                                sm:text-[15px] sm:w-[250px]">
                                                {obj.desc}
                                            </div>
                                        </div>
                                    </div>
                                    <Image src={obj.img} alt='' width={488} height={210} draggable='false' 
                                        className={`h-auto
                                            xl:w-[488px]
                                            lg:w-[438px]
                                            md:w-[300px]
                                            sm:w-[270px]
                                            ${width && width < 730 ? 'hidden' : ''}`}/>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                        className={`relative flex items-center 
                            md:gap-x-[20px]
                            sm:gap-x-[5px]
                            ${width && width < 730 ? 'hidden' : ''}`}>
                        <Image className="relative z-10" src={calendarMini} alt='' width={100} 
                            height={100} draggable='false' />
                        <Image className="absolute left-[50px]" src={bgCalendarMini} alt='' 
                            width={104} height={98} draggable='false' />
                        <div className="relative z-10 text-(--text)
                            lg:w-[312px]
                            md:w-[220px] md:text-[20px]
                            sm:text-[17px] sm:w-[250px]">
                            Мы напомним вам о сессии за сутки и за час до начала
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                        className={`
                                ${width && width < 1024 ? 'max-lg:w-[320px]' : ''}
                                ${width && width < 730 ? 'mx-auto' : ''}
                            `}>
                        <Btn scroll link="/formSelectionPsychologist/one" textBtn="Сделать первый шаг" 
                            widht={width && width < 1024 ? 310 : 410} />
                    </motion.div>
                </div>
            </>
        </Container>
    )
}