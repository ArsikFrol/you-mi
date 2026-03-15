"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

import Title from "./UI/Title"
import Container from "./UI/Container"

import arrowOne from '../../public/howReferral/arrowOne.png'
import arrowTwo from '../../public/howReferral/arrowTwo.png'
import bgCount from '../../public/howReferral/bgCount.png'
import three from '../../public/countAndBg/three.png'
import one from '../../public/countAndBg/one.png'
import two from '../../public/countAndBg/two.png'

type TElem = {
    id: number,
    width: number,
    count: StaticImageData,
    text: string,
}

const listElem: TElem[] = [
    { id: 1, width: 50, count: one, text: 'Копируете и отправляете личную реферальную ссылку' },
    { id: 2, width: 89, count: two, text: 'Ваш друг переходит и регистируется по ней' },
    { id: 3, width: 89, count: three, text: 'Проходит первую сессию, вы получаете бонус на баланс' }
]

const getAnimationProps = (id: number) => {
    switch (id) {
        case 1:
            return {
                initial: { x: -100, opacity: 0 },
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
                initial: { x: 100, opacity: 0 },
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

export default function HowReferral() {
    return (
        <Container paddingNoneY>
            <>
                <Title text="Как происходит программа" />
                <div className="flex justify-between mt-[50px] mb-[200px]">
                    {
                        listElem.map((obj: TElem, index: number) => {
                            const animProps = getAnimationProps(obj.id)
                            return (
                                <motion.div key={index}
                                    {...animProps}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className="w-[250px] text-center flex items-center gap-x-[60px]" >
                                    <div className="">
                                        <div className="relative mb-[50px]">
                                            <Image className="relative z-10 mx-auto" 
                                                src={obj.count} alt='' width={obj.width} height={100} 
                                                draggable='false' />
                                            <Image style={{ width: '120px', height: '110px' }} 
                                                className="absolute top-[25px] left-[25%]" src={bgCount} alt='' 
                                                width={120} height={110} draggable='false' />
                                        </div>
                                        <div className="w-[230px] mx-auto text-(--text) text-center text-[20px]">
                                            {obj.text}
                                        </div>
                                    </div>
                                    <Image style={obj.id == 3 || obj.id == 2 ? { display: 'none' } : {}} 
                                        src={arrowOne} alt='' width={150} height={150} draggable='false' />
                                    <Image style={obj.id == 1 || obj.id == 3 ? { display: 'none' } : 
                                        { marginBottom: '40px' }} src={arrowTwo} alt='' width={150} height={150} 
                                        draggable='false' />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}