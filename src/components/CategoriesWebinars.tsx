'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

import { TListArchive, TListUpcomingOnes } from '@/store/webinars/types'

import Container from './UI/Container'
import useWebinars from '@/store/webinars/webinarsStore'
import Btn from './UI/Btn'

type Props = {
    listArchive: TListArchive[],
    listUpcomingOnes: TListUpcomingOnes[]
}

export default function CategoriesWebinars(props: Props) {

    const {
        activeBtn, setActiveBtn
    } = useWebinars()

    return (
        <Container paddingNoneY>
            <div className='grid grid-cols-3 justify-between gap-x-[50px] gap-y-[50px] mb-[100px]'>
                {activeBtn === 'archive' &&
                    props.listArchive.map((obj: TListArchive, index: number) => {
                        return (
                            <motion.div key={index}
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }} className=''>
                                <Link href={`/webinars/${activeBtn}/${obj.id}`}
                                    className="w-[370px] shadow-2xl rounded-2xl p-[15px]
                                    hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    <div className='w-[340px] h-[320px] bg-[rgba(235,245,255,1)] rounded-2xl mb-[10px]'>
                                        <Image className='mx-auto py-[10px]'
                                            src={obj.smallImage} alt='' width={274} height={274} draggable='false' />
                                    </div>
                                    <div className='text-text text-[24px] font-semibold mb-[10px]'>{obj.title}</div>
                                    <div className='text-text text-[18px]'>{obj.smallDesc}</div>
                                </Link>
                            </motion.div>
                        )
                    })
                }
                {activeBtn === 'upcomingOnes' &&
                    props.listUpcomingOnes.map((obj: TListUpcomingOnes, index: number) => {
                        return (
                            <motion.div key={index}
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }} className="w-[370px] shadow-2xl rounded-2xl p-[15px]
                                hover:scale-105 transition-transform duration-300">
                                <div className='w-[340px] h-[320px] bg-[rgba(235,245,255,1)] rounded-2xl mb-[10px]'>
                                    <Image className='mx-auto py-[10px]'
                                        src={obj.smallImage} alt='' width={274} height={274} draggable='false' />
                                </div>
                                <div className='flex items-center justify-between text-text text-[18px] mb-[10px]'>
                                    <div className=''>Онлайн</div>
                                    <div className='font-semibold h-[40px] leading-[40px] bg-[rgba(235,245,255,1)]
                                        px-[20px] rounded-2xl'>
                                        {obj.price ? `${obj.price} руб.` : 'Басплатно'}
                                    </div>
                                </div>
                                <div className='text-text text-[24px] font-semibold mb-[10px]'>{obj.title}</div>
                                <div className='text-text text-[18px] mb-[15px]'>{obj.smallDesc}</div>
                                <div className='text-btn-and-title text-[18px] font-bold mb-[20px]'>{obj.dateStart}</div>
                                <div className='w-[290px] mx-auto mb-[15px]'>
                                    <Btn textBtn='Записаться' widht={280} link={`/webinars/${activeBtn}/${obj.id}`} />
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </Container>
    )
}
