'use client'

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

import arrow from '../../public/topSpecialists/arrow.png'
import specialist1 from '../../public/topSpecialists/specialist1.png'
import specialist2 from '../../public/topSpecialists/specialist2.png'
import specialist3 from '../../public/topSpecialists/specialist3.png'
import specialist4 from '../../public/topSpecialists/specialist4.png'
import Container from "./UI/Container"
import TitleCvalInvest from "./TitleCvalInvest"

type TUser = {
    id: number,
    name: string,
    desc: string,
    image: StaticImageData
}

const listSpecialists: TUser[] = [
    { id: 1, name: 'Светлана', desc: '5 лет опыта', image: specialist1 },
    { id: 2, name: 'Александр', desc: '12 лет опыта', image: specialist2 },
    { id: 3, name: 'Мария', desc: '8 лет опыта', image: specialist3 },
    { id: 4, name: 'Елена', desc: '10 лет опыта', image: specialist4 }
]

const getAnimationProps = (id: number, index: number) => {
    switch (id) {
        case 1:
            return {
                initial: { x: -50, opacity: 0 },
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
                initial: { y: 50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: false, amount: 0.5 }
            }
        case 4:
            return {
                initial: { x: 50, opacity: 0 },
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

export default function TopSpecialists() {
    return (
        <Container purple>
            <>
                <TitleCvalInvest />
                <div className="mt-[100px]
                    lg:flex lg:justify-between
                    sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:gap-y-[50px]
                    max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-[50px]">
                    {
                        listSpecialists.map((obj: TUser, index: number) => {
                            const animProps = getAnimationProps(obj.id, index)
                            return (
                                <motion.div key={index}
                                    {...animProps}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className="flex flex-col items-center text-text">
                                    <Image src={obj.image} alt='' width={220} height={220} draggable='false' />
                                    <div className="text-[24px] font-semibold">{obj.name}</div>
                                    <div className="text-[18px]">{obj.desc}</div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}
