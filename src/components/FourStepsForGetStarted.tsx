'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"

import Container from "./UI/Container";
import Title from "./UI/Title";

import arrowOne from '../../public/fourStepsForGetStarted/arrowOne.png'
import arrowThree from '../../public/fourStepsForGetStarted/arrowThree.png'
import arrowTwo from '../../public/fourStepsForGetStarted/arrowTwo.png'
import one from '../../public/countAndBg/one.png'
import three from '../../public/countAndBg/three.png'
import two from '../../public/countAndBg/two.png'
import bg from '../../public/countAndBg/bgCount.png'
import four from '../../public/countAndBg/four.png'
import Btn from "./UI/Btn";

type TElem = {
    id: number,
    widthCount: number,
    widthText: number,
    widthElem: number,
    arrow: StaticImageData,
    title: string,
    desc: string,
    count: StaticImageData,
}

const listElem: TElem[] = [
    {
        id: 1,
        widthCount: 50,
        widthText: 580,
        widthElem: 710,
        arrow: arrowOne,
        title: 'Заполните анкету',
        desc: 'и прикрепите копии ваших дипломов об окончании профильного высшего учебного заведения и документы, подтверждающие дополнительное образование.',
        count: one
    },
    {
        id: 2,
        widthCount: 89,
        widthText: 450,
        widthElem: 580,
        arrow: arrowOne,
        title: 'Дождитесь подтверждения',
        desc: 'от отдела проверки. Средний срок ожидания ответа 5-7 дней.',
        count: two
    },
    {
        id: 3,
        widthCount: 89,
        widthText: 460,
        widthElem: 595,
        arrow: arrowTwo,
        title: 'Пройдите дополнительный отбор,',
        desc: 'включающий интервью и тестирование на профессиональную компетентность и знание этических норм.',
        count: three
    },
    {
        id: 4,
        widthCount: 82,
        widthText: 450,
        widthElem: 550,
        arrow: arrowThree,
        title: 'Заполните данные',
        desc: 'профиля на сайте YouMi. Выберите часы в расписании и начните практику.',
        count: four
    }
]

const getAnimationProps = (id: number) => {
    switch (id) {
        case 1:
            return {
                initial: { x: -200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 2:
            return {
                initial: { x: 200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 3:
            return {
                initial: { x: -200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 4:
            return {
                initial: { x: 200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        default:
            return {
                initial: { x: 200, opacity: 0 },
                transition: { duration: 0.5 }
            }
    }
}

export default function FourStepsForGetStarted() {
    return (
        <Container purple>
            <>
                <Title text="4 шага для начала работы в YouMi" />
                <div className='flex flex-col gap-y-[120px] mt-[100px]'>
                    {
                        listElem.map((obj: TElem, index: number) => {
                            const animProps = getAnimationProps(obj.id)
                            return (
                                <motion.div key={index}
                                    {...animProps}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    style={obj.id == 2 || obj.id == 4 ?
                                        { marginLeft: 'auto', width: `${obj.widthElem}px` } :
                                        { width: `${obj.widthElem}px` }}
                                    className="relative flex gap-x-[40px] w-[1000px]">
                                    <div className='w-25'>
                                        <Image className="relative z-10" src={obj.count} alt=''
                                            width={obj.widthCount} height={100} draggable='false' />
                                    </div>
                                    <Image style={{ width: '178px', height: '160px' }}
                                        className="absolute left-[20px] -top-[30px]" src={bg} alt=''
                                        width={178} height={160} draggable='false' />
                                    <div style={{ width: `${obj.widthText}px`, textAlign: 'left' }} className='relative z-10'>
                                        <div className='text-(--text) text-[24px] font-semibold'>{obj.title}</div>
                                        <div className='text-(--text) text-[18px]'>{obj.desc}</div>
                                    </div>
                                    <Image style={obj.id == 1 ?
                                        { display: 'none' } :
                                        obj.id == 2 ? { left: '20%', top: '-200px' } :
                                            obj.id == 3 ? { right: '10%', top: '-170px' } :
                                                obj.id == 4 ? { left: '10%', top: '-200px' } : {}}
                                        className="absolute" src={obj.arrow} alt='' width={134} height={134} draggable='false' />
                                </motion.div>
                            )
                        })
                    }
                </div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className='w-[390px] mx-auto mt-[100px]'>
                    <Btn textBtn="Присоединиться" widht={380} link="/formPartTeam/one" />
                </motion.div>
            </>
        </Container>
    )
}