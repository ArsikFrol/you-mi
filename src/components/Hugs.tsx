"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import Btn from "./UI/Btn"
import Container from "./UI/Container"
import { useWindowSize } from "@/hooks/useWindowSize"

import chat from '../../public/huds/chat.png'
import hugs from '../../public/huds/hugs.png'

export default function Hugs() {
    const { width } = useWindowSize()

    return (
        <Container relative purple>
            <div className='flex justify-between items-center'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="max-lg:mx-auto">
                    <div className='text-(--color-btn-and-title) font-extrabold text-[44px]
                        max-lg:text-center
                        max-md:text-center max-md:text-[35px]
                        max-xs:text-[30px]'>
                        Вместе мы справимся
                    </div>
                    <div className="mb-[70px] text-(--text) font-semibold
                        xl:w-[420px]
                        max-sm:w-[295px]
                        max-lg:mx-auto
                        max-lg:text-center
                        xl:text-[40px]
                        md:text-[35px]
                        sm:text-[30px]
                        max-sm:text-[30px]">
                        Найдите своего психолога онлайн
                    </div>
                    <div className='w-[390px]
                        max-lg:mx-auto
                        max-sm:w-[300px]'>
                        <Btn link="/formSelectionPsychologist/one"
                            widht={width && width >= 640 ?  380 : 290}
                            textBtn="Найти психолога"/>
                    </div>
                    <div className="mt-[30px] text-[20px] font-semibold text-(--text)
                        max-lg:text-center">
                        2770 руб. за 50 минут сессии
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="relative
                        max-lg:hidden">
                    <Image src={hugs} alt='' width={400} height={444}
                        draggable='false' loading="eager" />
                    <Image className="absolute right-[30px] bottom-[-130px]"
                        src={chat} alt='' draggable='false' width={80} height={80} />
                </motion.div>
            </div>
        </Container>
    )
}
