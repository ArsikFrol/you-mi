'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"

import Title from "./UI/Title";
import Container from "./UI/Container"

import lightBulb from '../../public/advantagesWork/lightBulb.png'
import planet from '../../public/advantagesWork/planet.png'
import rocket from '../../public/advantagesWork/rocket.png'
import watch from '../../public/advantagesWork/watch.png'
import chat from '../../public/advantagesWork/chat.png'
import bgTwo from '../../public/advantagesWork/bgTwo.png'
import bgThree from '../../public/advantagesWork/bgThree.png'
import bgOne from '../../public/advantagesWork/bgOne.png'
import bgFour from '../../public/advantagesWork/bgFour.png'
import bgFive from '../../public/advantagesWork/bgFive.png'

const listElem = [
    {
        id: 1,
        heightBg: 364,
        image: planet,
        bg: bgOne,
        title: 'Даем свободу выбора работать когда и где удобно',
        descOne: 'Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому',
        descTwo: 'неважно, где находитесь вы и клиент',
        descThree: ', можно работать из любой точки мира. Вы можете самостоятельно корректировать свой график работы и выбирать количество клиентов, ориентируясь на себя.'
    },
    {
        id: 2,
        heightBg: 414,
        image: watch,
        bg: bgTwo,
        title: 'Избавляем от рутины и поиска клиентов',
        descOne: `Мы продвигаем ваши услуги и освобождаем ваше время. Наши `,
        descTwo: 'алгоритмы подбирают вам клиентов',
        descThree: ` с теми запросами, в которых вы наиболее компетентны. У нас удобная и наглядная система записей и переносов встреч в онлайн-кабинете. `, descFour: 'Мы отправляем клиентам напоминания', descFive: ' о предстоящих сессиях и контролируем оплату.'
    },
    {
        id: 3,
        heightBg: 464,
        image: rocket,
        bg: bgThree,
        title: 'Развиваем и поддерживаем',
        descOne: 'Еженедельно проводим супервизорские группы и интервизии. Их можно посещать в качестве докладчика и в качестве слушателя. ',
        descTwo: 'Регулярно проводим вебинары с приглашенными экспертами ',
        descThree: 'из разных направлений психотерапии. Вы сможете участвовать в выборе спикеров или заявить о желании организовать свой вебинар. Кураторы сервиса ', descFour: 'оказывают оперативную поддержку ', descFive: 'по этическим и любым другим вопросам, возникающим в процессе работы с клиентом.'
    },
    {
        id: 4,
        heightBg: 384,
        image: chat,
        bg: bgFour,
        title: 'Профессиональное комьюнити',
        descOne: 'YouMi — это не только комфортная работа, ',
        descTwo: 'это сообщество профессионалов объединенных общей целью. ',
        descThree: 'Это мощный нетворкинг и возможность найти среди коллег новых друзей с общими интересам из разных городов и стран.'
    },
    {
        id: 5,
        heightBg: 414,
        image: lightBulb,
        bg: bgFive,
        title: 'Развиваем ваш личный бренд',
        descOne: 'У нас есть свой блог и социальные сети. ',
        descTwo: 'Наши психологи принимают активное участие в создании контента с указанием авторства.',
        descThree: ' Это позволяет повышать вашу узнаваемость и медийность. Мы поощряем ваши творческие идеи по развитию сервиса и приветствуем вашу инициативу. За лучшие идеи и реализации мы дарим подарки и материальные вознаграждения.'
    }
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
                initial: { x: 200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 3:
            return {
                initial: { x: -200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 4:
            return {
                initial: { x: 200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 5:
            return {
                initial: { x: -200, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        default:
            return {
                initial: { x: 200, opacity: 0 },
                transition: { duration: 0.5 }
            }
    }
}

export default function AdvantagesWork() {
    return (
        <Container purple>
            <>
                <Title text="Преимущества работы с YouMi" />
                <div className="flex flex-col gap-y-37.5 mt-25">
                    {
                        listElem.map((obj: {
                            id: number,
                            heightBg: number,
                            image: StaticImageData,
                            bg: StaticImageData,
                            title: string,
                            descOne: string,
                            descTwo: string,
                            descThree: string,
                            descFour?: string,
                            descFive?: string
                        }, index: number) => {
                            const animProps = getAnimationProps(obj.id)
                            return (
                                <motion.div key={index}
                                    {...animProps}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    style={obj.id == 2 || obj.id == 4 ?
                                        { height: `${obj.heightBg}px`, marginLeft: 'auto' } :
                                        { height: `${obj.heightBg}px` }}
                                    className="relative w-205 text-(--text) text-[24px]">
                                    <Image className="absolute z-11 -top-17.5 left-12.5" src={obj.image}
                                        alt='' width={160} height={160} draggable='false' />
                                    <div style={{ height: `${obj.heightBg}px` }} className="relative z-10 text-[20px] bg-white rounded-2xl">
                                        <div className="w-175 mx-auto pt-30">
                                            <div className="font-semibold mb-1.25">{obj.title}</div>
                                            <span className="">{obj.descOne}</span>
                                            <span className="">{obj.descTwo}</span>
                                            <span className="">{obj.descThree}</span>
                                            <span className="">{obj.descFour}</span>
                                            <span className="">{obj.descFive}</span>
                                        </div>
                                    </div>
                                    <Image className="absolute top-2.5 left-2.5" src={obj.bg} alt='' width={820}
                                        height={obj.heightBg} draggable='false' />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}