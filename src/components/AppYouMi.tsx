'use client'

import Image from "next/image"
import { motion } from "framer-motion"

import Btn from "./UI/Btn"

import checkMark from '../../public/appYouMi/checkMark.png'
import screenOne from '../../public/appYouMi/screenOne.png'
import screenTwo from '../../public/appYouMi/screenTwo.png'
import Container from "./UI/Container"
import { useWindowSize } from "@/hooks/useWindowSize"

const listElem = [
   { id: 1, text: 'Прорабатывайте себя с помощью упражнений и аудиопрактик' },
   { id: 2, text: 'Ведите личный дневник настроения и получайте подробную статистику о себе' },
   { id: 3, text: 'Расскажите виртуальному психологу о своих чувствах и он подберет актуальный материал' }
]

export default function AppYouMi() {
   const { width } = useWindowSize()

   return (
        <Container purple>
            <>
                <div className="relative flex justify-between items-start
                    sm:max-md:w-[580px] sm:max-md:mx-auto">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                        className="max-xl:mx-auto">
                        <div className="text-btn-and-title font-extrabold mb-10
                            max-xl:text-center
                            md:w-[680px] md:text-[40px]
                            sm:text-[35px]">
                            YouMi заботиться о вас даже вне сессий
                        </div>
                        <div className="w-[580px] text-text text-[20px] font-semibold mb-10
                            max-xl:text-center max-xl:mx-auto">
                            Работая с YouMi от 4 сессий мы дарим доступ к приложению с виртуальным психологом.
                        </div>
                        <div className="flex flex-col gap-y-7.5">
                            {
                                listElem.map((obj: { id: number, text: string }, index: number) => {
                                return (
                                    <div className="flex gap-x-[20px] items-center
                                        max-xl:w-[500px] max-xl:mx-auto" key={index}>
                                        <Image src={checkMark} alt='' width={40} height={40} draggable='false' />
                                        <div className="text-text text-[18px] w-[440px]">{obj.text}</div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                        className="xl:block
                            lg:hidden">
                        <Image className='mr-[170px]' src={screenOne} alt='' width={206} height={433} draggable='false' />
                        <Image src={screenTwo} alt='' width={210} height={437} draggable='false'
                            className="absolute right-0 top-[20px]" />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="mx-auto mt-[200px]
                        md:w-[390px]
                        max-md:w-[330px]">
                    <Btn textBtn="Доступно в App Store" widht={width && width < 768 ? 320 : 380} link="/appStore" />
                </motion.div>
         </>
      </Container>
   )
}
