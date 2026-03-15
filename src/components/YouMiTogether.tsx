'use client'

import Image from "next/image"
import { motion } from "framer-motion"

import Container from "./UI/Container"

import border from '../../public/youMiTogether/border.png'
import meditation from '../../public/youMiTogether/meditation.png'

export default function YouMiTogether() {
    return (
        <Container purple>
            <div className="flex justify-between items-center
                max-lg:flex-col max-lg:gap-y-[50px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="text-[44px] text-(--color-btn-and-title) font-extrabold w-[640px] relative
                        sm:max-lg:text-center">
                    В YouMi вы не одни
                    Вместе мы справимся
                    <Image className="absolute 
                        lg:bottom-[-15px] lg:left-[-25px]
                        sm:max-lg:top-[58px] sm:max-lg:left-[20px]" src={border} alt=''
                        width={222} height={85} draggable='false' />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}>
                    <Image src={meditation} alt='' width={410} height={350} draggable='false' />
                </motion.div>
            </div>
        </Container>
    )
}