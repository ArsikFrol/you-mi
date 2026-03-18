'use client'

import Image from "next/image"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"

import Btn from "./UI/Btn"
import Container from "./UI/Container"

import useTariffs from "@/store/tariffs/tariffs"

import numberSessions from '../../public/numberSessions.png'

export default function NumberSessions() {
    const session = useSession()

    const {
        youHavePaidSessions
    } = useTariffs()

    return (
        <Container purple>
            <div className="flex justify-between items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}>
                    <div className="mb-2.5 text-btn-and-title font-extrabold
                        xl:text-[40px] xl:w-[700px]
                        lg:max-xl:text-[35px] lg:max-xl:w-[590px] max-lg:mx-auto max-lg:text-center
                        sm:max-lg:text-[32px] md:max-lg:w-[690px]">
                        Выберите количество сессий, которое вы хотите оплатить.
                    </div>
                    {session.status === 'authenticated' ?
                        <div className='mb-[50px] text-text font-medium
                            xl:text-[24px]
                            lg:max-xl:text-[22px] lg:w-[580px] max-lg:text-center max-lg:mx-auto
                            md:max-lg:w-[600px]
                            sm:max-lg:text-[22px]'>
                            Если у вас есть промокод, обязательно им воспользуйтесь.
                        </div> :
                        <div className="mb-[50px] text-text font-medium w-[580px]
                            xl:text-[24px]
                            lg:max-xl:text-[22px] lg:w-[580px] max-lg:text-center max-lg:mx-auto
                            md:max-lg:w-[600px]
                            sm:max-lg:text-[22px]">
                            Оплачивая пакет от 4 сессий вы получаете доступ к приложению.
                        </div>
                    }
                    {session.status === 'authenticated' ?
                        <div className='flex items-center gap-x-[30px] mt-[30px]
                            max-lg:w-[391px] max-lg:mx-auto'>
                            <div className='text-text text-[20px] font-medium
                                md:max-lg:w-[191px]'>Оплачено сессий: </div>
                            <div className='w-[170px] h-[50px] leading-[50px]
                                    text-center rounded-2xl text-[20px] text-white bg-btn-and-title'>
                                {youHavePaidSessions}
                            </div>
                        </div> : <div className='sm:w-[390px] max-lg:mx-auto'>
                            <Btn textBtn="Узнать больше" widht={380} />
                        </div>
                    }
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}>
                    <Image src={numberSessions} alt='' width={480} height={376} draggable='false'
                        className="xl:w-[480px] xl:h-[376px]
                            lg:max-xl:w-[450px] lg:max-xl:h-auto
                            max-lg:hidden"/>
                </motion.div>
            </div>
        </Container>
    )
}
