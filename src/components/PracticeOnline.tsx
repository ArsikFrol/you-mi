"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import Btn from "./UI/Btn"
import Container from "./UI/Container"

import practiceOnline from '../../public/practiceOnline.png'

export default function PracticeOnline() {
    return (
        <Container>
            <div className="flex justify-between items-center">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="w-[620px]">
                    <div className="mb-5 text-btn-and-title text-[40px] font-extrabold">Практикуйте онлайн из любой точки мира</div>
                    <div className="mb-[50px] text-text text-[24px] font-medium">Определяйте свою нагрузку самостоятельно, имея компьютер и стабильный интернет</div>
                    <Btn textBtn="Начать практику в YouMi" widht={400} link="/formPartTeam/one" />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className=''>
                    <Image src={practiceOnline} alt='' width={480} height={390} draggable='false' />
                </motion.div>
            </div>
        </Container>
    )
}
