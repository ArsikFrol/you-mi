'use client'

import React from 'react'
import Image from "next/image"

import crossChangeOrCancel from '../../../public/crossChangeOrCancel.png'

type Props = {
    text: string,
    leftClick: Function,
    rightClick: Function,
    setShowWarning: Function,
    showWarning: boolean
}

export default function WarningWindow(props: Props) {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            props.setShowWarning(false)
            console.log('Esc нажат - закрываем модалку')
        } if (event.key === 'Enter') {
            clickYes()
        }
    }

    React.useEffect(() => {
        if (!props.showWarning) return

        const scrollY = window.scrollY

        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.width = '100%'

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            window.scrollTo(0, scrollY)

            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [props.showWarning])

    const clickYes = () => {
        props.setShowWarning(false)
        props.leftClick()
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }, 100)
    }

    const clickNo = () => {
        props.setShowWarning(false)
        props.rightClick()
    }

    return (
        <div className='w-full h-full bg-[rgba(74,70,117,0.6)]
            left-0 top-0 flex items-center z-100 fixed'>
            <div className='relative w-[580px] bg-[rgba(249,252,255,1)] rounded-2xl px-[100px] py-[50px] mx-auto z-100'>
                <div className='w-[380px] mx-auto text-text text-[24px] font-medium text-center'>{props.text}</div>
                <div className='flex justify-between w-[350px] mx-auto mt-[40px]'>
                    <div onClick={clickYes} className='text-white w-[150px] h-[50px]
                    leading-[50px] text-center bg-btn-and-title
                    hover:scale-105 transition-transform duration-300 cursor-pointer rounded-2xl'>Да</div>
                    <div onClick={clickNo} className='text-white w-[150px] h-[50px]
                    leading-[50px] text-center bg-btn-and-title
                    hover:scale-105 transition-transform duration-300 cursor-pointer rounded-2xl'>Нет</div>
                </div>
                <Image onClick={() => props.setShowWarning(false)}
                    className="absolute top-[20px] right-[30px] hover:scale-105
                        hover:rotate-90 transition-transform duration-300 cursor-pointer"
                    src={crossChangeOrCancel} alt='' width={40} height={40} draggable='false' />
            </div>
        </div>
    )
}
