'use client'

import React from 'react'
import Image from "next/image"
import { usePathname } from "next/navigation"

import useWebinars from "@/store/webinars/webinarsStore"
import { TRoute } from "@/types/routes/types"
import { renderTextWithBreaks } from "./SectionId"

import play from '../../public/webinars/play.png'
import crossChangeOrCancel from '../../public/crossChangeOrCancel.png'

export default function SectionIdArchive() {
    const [showVidoe, setShowVidoe] = React.useState<boolean>(false)

    const pathName: TRoute = usePathname() as TRoute

    const idElem = Number(pathName.split('/')[3]) - 1

    const {
        listArchive
    } = useWebinars()

    React.useEffect(() => {
        const handleScrollLock = () => {
            if (showVidoe) {
                const scrollY = window.scrollY

                document.body.style.overflow = 'hidden'
                document.body.style.position = 'fixed'
                document.body.style.top = `-${scrollY}px`
                document.body.style.width = '100%'

                return () => {
                    document.body.style.overflow = ''
                    document.body.style.position = ''
                    document.body.style.top = ''
                    document.body.style.width = ''
                    window.scrollTo(0, scrollY)
                }
            }
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
        }

        return handleScrollLock()
    }, [showVidoe])

    return (
        <div className=''>
            <div className='w-[780px] h-[450px] relative mx-auto mt-[70px] group'
                onClick={() => setShowVidoe(true)} >
                <Image src={listArchive[idElem].bigImage} alt=''
                    width={780} height={450} draggable='false' />
                <div className='w-[780px] h-[450px] bg-[rgba(52,50,79,0.6)]
                    absolute left-0 top-0 rounded-2xl'></div>
                <Image className="absolute left-[45%] top-[40%]
                    group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    src={play} alt='' width={76} height={76} draggable='false' />
            </div>
            <div className='w-[760px] mx-auto'>
                <div className='text-(--color-btn-and-title) text-[40px] font-extrabold mt-[40px]'>{listArchive[idElem].title}</div>
                <div className='text-(--text) text-[18px] mt-[30px] mb-[60px]'>{renderTextWithBreaks(listArchive[idElem].bigDesc)}</div>
                <div className='flex justify-between text-(--text) text-[20px] mb-[20px]'>
                    <div className='font-semibold'>{listArchive[idElem].author}</div>
                    <div className=''>Эфир был: {listArchive[idElem].date}</div>
                </div>
                <div className='flex items-center gap-x-[30px]'>
                    <div className=''>Тэги: </div>
                    <div className='flex gap-x-[10px]'>
                        {
                            listArchive[idElem].tags.map((elem, index: number) => {
                                return (
                                    <div className="h-[40px] leading-[40px] text-(--text)bg-[rgba(235,245,255,1)]
                                    px-[10px] rounded-2xl"
                                        key={index}>{elem}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {showVidoe &&
                <div className='w-full h-full bg-[rgba(74,70,117,0.6)] 
                    left-0 top-0 flex items-center z-100 fixed'>
                    <div className='mx-auto flex gap-x-[10px] items-start relative'>
                        <Image src={listArchive[idElem].bigImage} alt=''
                            width={830} height={500} draggable='false' />
                        <Image src={crossChangeOrCancel} alt='' width={40} height={40} draggable='false'
                            onClick={() => setShowVidoe(false)}
                            className='hover:scale-115 transition-transform duration-300 cursor-pointer
                                absolute -right-[50px] top-0'/>
                    </div>
                </div>
            }
        </div>
    )
}