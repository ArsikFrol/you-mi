"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import book from '../../../public/educationTherapy/book.png'
import watch from '../../../public/educationTherapy/watch.png'

export default function EducationTherapy() {
    return (
        <div className="flex flex-col gap-y-5 my-[100px]">
            <div className="flex items-center
                lg:gap-x-[50px]
                
                sm:gap-x-[10px]">
                <motion.div
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }} 
                    className="bg-blue-50 rounded-2xl flex items-center py-5 
                        lg:px-[55px]
                        lg:gap-x-[30px]
                        
                        sm:px-[10px]
                        sm:gap-x-[10px]">
                    <Image src={book} alt='' width={150} height={150} draggable='false' 
                        className="lg:w-[150px]
                            lg:h-[150px]
                            
                            md:w-[90px]
                            md:h-[90px]
                            
                            sm:w-[80px]
                            sm:h-[80px]"/>
                    <div className="">
                        <div className="text-(--text) font-semibold
                            lg:text-[24px]
                            
                            sm:text-[22px]">Образование</div>
                        <div className="text-(--text) font-normal
                            2xl:w-[390px]

                            xl:w-[350px]
                            xl:text-[20px]
                            
                            lg:text-[18px]
                            lg:w-[300px]
                            
                            sm:text-[15px]
                            sm:w-[260px]">
                            Диплом о высшем психологическом образовании и дополнительные сертификаты
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, y: -100, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }} 
                    className="bg-blue-50 rounded-2xl flex-1
                        lg:py-[47px]
                        
                        md:py-[30px]
                        
                        sm:py-[35px]">
                    <div className="text-(--text) font-semibold text-center
                        lg:text-[24px]
                        
                        md:text-[22px]">Опыт работы</div>
                    <div className="text-(--text) font-normal mx-auto
                        lg:w-[260px]
                        lg:text-[20px]
                        
                        md:text-[15px]

                        sm:w-[205px]">
                        Подтвержденный опыт работы не менее 3-х лет
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center
                lg:gap-x-[50px]
                
                sm:gap-x-[10px]">
                <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }} 
                    className="bg-blue-50 rounded-2xl flex items-center py-5 order-2
                        lg:px-[55px]
                        lg:gap-x-[30px]
                        
                        sm:px-[10px]
                        sm:gap-x-[10px]">
                    <Image src={watch} alt='' width={150} height={150} draggable='false'
                        className="lg:w-[150px]
                            lg:h-[150px]
                            
                            md:w-[90px]
                            md:h-[90px]
                            
                            sm:w-[80px]
                            sm:h-[80px]" />
                    <div className="">
                        <div className="text-(--text) font-semibold
                            lg:text-[24px]
                            
                            sm:text-[22px]">Личная терапия</div>
                        <div className="text-(--text) font-normal
                            2xl:w-[390px]

                            xl:w-[350px]
                            xl:text-[20px]
                            
                            lg:text-[18px]
                            lg:w-[300px]
                            
                            sm:text-[15px]
                            sm:w-[240px]">
                            Прохождение личной терапии от 50 часов в год
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100, y: 100, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }} 
                    className="bg-blue-50 rounded-2xl flex-1
                        lg:py-[47px]
                        
                        md:py-[30px]
                        
                        sm:py-[25px]">
                    <div className="text-(--text) font-semibold text-center
                        lg:text-[24px]
                        
                        md:text-[22px]">Обучение</div>
                    <div className="text-(--text) font-normal mx-auto
                        lg:w-[280px]
                        lg:text-[20px]
                        
                        md:text-[15px]

                        sm:w-[230px]">
                        Прохождение супервизии от 20 часов в год
                    </div>
                </motion.div>
            </div>
        </div>
    )
}