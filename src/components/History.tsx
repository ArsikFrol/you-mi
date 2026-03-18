'use client'

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

import Title from "./UI/Title"
import Container from "./UI/Container"

import bgUser from '../../public/history/bgUser.png'
import quotes from '../../public/history/quotes.png'
import userOne from '../../public/history/userOne.png'
import userTwo from '../../public/history/userTwo.png'

type TElem = {
    id: number,
    image: StaticImageData,
    name: string,
    text: string
}

const listELem: TElem[] = [
    { id: 1, image: userOne, name: 'Мария Литвинова', text: 'Каждое наше действие основано на заботе о наших клиентах и психотерапевтах. Мы гарантируем защиту и тем, и другим.' },
    { id: 2, image: userTwo, name: 'Иван Никитин', text: 'Наша миссия — сделать психотерапию понятной для каждого и убрать барьеры перед обращением за психологической помощью.' }
]

const getAnimationProps = (id: number, index: number) => {
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
        default:
            return {
                initial: { y: 50, opacity: 0 },
                transition: { duration: 0.5 }
            }
    }
}

export default function History() {
    return (
        <Container purple>
            <>
                <Title text="История проекта" />
                <div className="flex flex-col gap-y-[50px]">
                    {
                        listELem.map((obj: TElem, index: number) => {
                            const animProps = getAnimationProps(obj.id, index)
                            return (
                                <motion.div key={index}
                                    {...animProps}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className="flex justify-between mt-[100px] items-center">
                                    <div className='relative' style={obj.id == 2 ? { order: 1 } : {}} >
                                        <Image className="relative z-10
                                            lg:w-[240px] lg:h-[240px]
                                            max-lg:w-[190px] max-lg:h-[190px]" src={obj.image} alt=''
                                            width={240} height={240} draggable='false' />
                                        <Image className="absolute left-[10px] top-[10px]" src={bgUser} alt=''
                                            width={240} height={240} draggable='false' />
                                    </div>
                                    <div className="">
                                        <div className="relative text-text mb-[50px]
                                            lg:text-[20px] lg:w-[600px]
                                            max-lg:text-[16px]
                                            md:max-lg:w-[500px]
                                            sm:w-[400px]">
                                            <Image style={{ transform: 'rotate(180deg)' }}
                                                className="absolute
                                                    lg:top-[-30px] lg:left-[30px]
                                                    sm:max-lg:top-[-40px] sm:max-lg:left-[-10px]"
                                                src={quotes} alt='' width={40} height={40} draggable='false' />
                                            <div className="mx-auto
                                                md:w-[400px]
                                                sm:max-md:w-[300px]">{obj.text}</div>
                                            <Image className="absolute
                                                lg:bottom-[-20px] lg:right-[50px]
                                                max-lg:bottom-[-40px] max-lg:right-[50px]"
                                                src={quotes} alt='' width={40}
                                                height={40} draggable='false' />
                                        </div>
                                        <div className={`${obj.id === 2 ? 'md:max-lg:mr-[30px]' : ''}`}>
                                            <div className="text-btn-and-title font-bold text-right
                                                md:text-[24px]
                                                sm:max-md:text-[20px]">
                                                {obj.name}
                                            </div>
                                            <div className='text-text text-right
                                                md:text-[16px]
                                                sm:max-md:text-[14px]'>
                                                Сооснователь YouMi
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}
