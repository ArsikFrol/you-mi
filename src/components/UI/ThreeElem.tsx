'use client'

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

import Title from "./Title"

import chat from '../../../public/threeElem/chat.png'
import lightBulb from '../../../public/threeElem/lightBulb.png'
import rocket from '../../../public/threeElem/rocket.png'

import checkMark from '../../../public/threeElem/checkMark.png'
import planet from '../../../public/threeElem/planet.png'
import target from '../../../public/threeElem/target.png'

type TObj = { id: number, image: StaticImageData, title: string, desc: string }

type Props = {
    listElem: string,
    title: string
}

const listElemAboutUs: Array<TObj> = [
    { id: 1, title: 'Вместе мы справимся', desc: 'Мы всегда рядом. Свяжитесь с психологом в любое время и получите необходимую помощь.', image: rocket },
    { id: 2, title: 'Забота на расстоянии', desc: 'Мы позаботились о том, чтобы вы чувствовали нашу поддержу постоянно. Для этого мы создали приложение с виртуальным психологом.', image: chat },
    { id: 3, title: 'Думаем о важном', desc: 'Займитесь главным, а напоминание о предстоящих сессиях мы взяли на себя.', image: lightBulb }
]

const listElemHome = [
    { id: 1, image: planet, initial: -1000, title: 'Свобода возможностей', desc: 'Проходите сессию из любой точки мира, не тратьте время на дорогу' },
    { id: 2, image: checkMark, initial: -1000, title: 'Будьте уверены в своем выборе', desc: 'Мы работаем только с квалифицированными специалистами, которые прошли строгий отбор' },
    { id: 3, image: target, initial: -1000, title: 'Ваш запрос важен', desc: 'Подберем опытного специалиста под ваш запрос' }
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
                initial: { y: 50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 3:
            return {
                initial: { x: 200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        default:
            return {
                initial: { y: 50, opacity: 0 },
                transition: { duration: 0.5 }
            }
    }
}

export default function ThreeElem(props: Props) {


    return (
        <div className='py-[100px]'>
            <div className='w-[px]'>
                <Title text='Онлайн-психотерапия становится комфортнее' />
            </div>
            <div className={`flex justify-between mx-auto mt-[200px]
                xl:w-[1200px]
                lg:w-[960px]
                max-lg:grid max-lg:grid-rows-3 max-lg:gap-y-[150px]
                md:w-[690px] max-md:grid-rows-[250px_${props.listElem === 'home' ? 300 : 320}px_250px] max-md:px-[30px]
                sm:w-[400px]`}>
                {
                    props.listElem == 'home' ? listElemHome.map((obj: TObj, index: number) => {
                        const animProps = getAnimationProps(obj.id)
                        return (
                            <motion.div key={index}
                                {...animProps}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className={`relative bg-blue-50 rounded-2xl px-[30px] pt-20 text-center
                                    xl:w-[380px]
                                    lg:w-[300px] ${obj.id === 2 ? 'lg:h-[330px]' : 'lg:h-[300px]'}
                                    ${obj.id === 2 ? 'md:max-lg:h-[250px]' : ''}`}>
                                <Image className='absolute
                                    xl:top-[-140px] xl:left-[20%]
                                    lg:left-[15%]
                                    md:left-[35%] md:w-[220px] md:h-[220px] md:top-[-140px]
                                    sm:h-[190px] sm:w-[190px] sm:top-[-120px] sm:left-[22%]'
                                    src={obj.image} alt='' width={220} height={220} draggable="false" />
                                <div className='text-text font-semibold mb-5
                                        xl:text-[24px]
                                        lg:text-[20px] max-lg:text-[25px]
                                        sm:text-[18px]'>
                                    {obj.title}
                                </div>
                                <div className={`text-text text-[17px]
                                        max-lg:text-[20px]
                                        ${obj.id === 2 ? 'sm:h-[120px]' : 'sm:h-[100px]'}`}>
                                    {obj.desc}
                                </div>
                            </motion.div>
                        )
                    }) : listElemAboutUs.map((obj: TObj, index: number) => {
                        const animProps = getAnimationProps(obj.id)
                        return (
                            <motion.div key={index}
                                {...animProps}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className={`relative bg-blue-50 rounded-2xl px-[30px] pt-20 text-center
                                    xl:w-[380px]
                                    lg:max-xl:w-[300px] ${obj.id === 2 ? 'lg:max-xl:h-[350px]' : 'lg:max-xl:h-[300px]'}
                                    ${obj.id === 2 ? 'md:max-lg:h-[250px]' : ''}`}>
                                <Image className="absolute
                                    xl:top-[-140px] xl:left-[20%]
                                    lg:left-[15%]
                                    md:left-[35%] md:w-[220px] md:h-[220px] md:top-[-140px]
                                    sm:h-[190px] sm:w-[190px] sm:top-[-120px] sm:left-[22%]"
                                    src={obj.image} alt='' width={220} height={220} draggable="false" />
                                <div className="text-text font-semibold mb-5
                                        xl:text-[24px]
                                        lg:text-[20px] max-lg:text-[25px]
                                        sm:text-[18px]">{obj.title}</div>
                                <div className={`text-text text-[17px]
                                        max-lg:text-[20px]
                                        ${obj.id === 2 ? 'sm:h-[200px]' : 'sm:h-[100px]'}`}>{obj.desc}</div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
