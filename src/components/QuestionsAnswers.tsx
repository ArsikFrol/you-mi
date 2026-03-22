'use client'

import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion"

import Title from "./UI/Title";

import minus from '../../public/questionsAnswers/minus.png'
import plus from '../../public/questionsAnswers/plus.png'
import Container from "./UI/Container";

const ListElem = [
    { id: 1, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'Эффективно ли работать с психологом онлайн?' },
    { id: 2, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'Как выбрать специалиста?' },
    { id: 3, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?' },
    { id: 4, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'Как вы отбираете психологов в базу?' },
    { id: 5, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'В чем разница между психологом, психотерапевтом и психиатром и как понять кто мне нужен?' },
    { id: 6, desc: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.', title: 'Какое количество сессий мне необходимо, чтобы получить результат?' }
]

export default function QuestionsAnswers() {
    const [showElem, setShowElem] = React.useState<number>(0)

    const clickShowElem = (activeIdElem: number) => {
        if (activeIdElem === showElem) setShowElem(0)
        else setShowElem(activeIdElem)
    }

    return (
        <Container>
            <>
                <Title text="Вопросы - ответы" />
                <div className="flex flex-col gap-y-[50px] pt-[100px]">
                    {
                        ListElem.map((obj: { id: number, desc: string, title: string }, index: number) => {
                            return (
                                <motion.div key={index}
                                    initial={{ y: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                                    className="group hover:scale-105 transition-transform duration-300
                                    cursor-pointer relative bg-blue-50 p-[50px] rounded-2xl"
                                    onClick={() => clickShowElem(obj.id)} >
                                    <div className='flex justify-between items-start gap-x-[20px]'>
                                        <div className="mb-2.5 text-text text-[20px] font-semibold">
                                            {obj.title}
                                        </div>
                                        <Image className="
                                            group-hover:rotate-180 transition-transform duration-900 cursor-pointer"
                                            src={obj.id === showElem ? minus : plus} alt=''
                                            width={40} height={40} draggable='false' />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
                                        ${obj.id === showElem
                                            ? 'max-h-[500px] opacity-100 mt-4'
                                            : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="text-text text-[18px] pt-2">
                                            {obj.desc}
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
