'use client'

import Image from "next/image"
import React from "react"

import crossClose from '../../../public/crossClose.png'

type Props = {
    closeFunction: (show: boolean) => void
}

export default function CrossClose(props: Props) {
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                props.closeFunction(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [props.closeFunction])

    const clickClose = () => {
        props.closeFunction(false)

        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY.replace('-', '')) || 0);
        }
    }

    return (
        <div onClick={clickClose} tabIndex={0}
            className='w-[60px] h-[60px] bg-[rgba(74,70,117,0.2)] rounded-[9999px]
                hover:scale-105 hover:rotate-90 transition-transform duration-300 cursor-pointer'>
            <Image className="mx-auto py-[15px]"
                src={crossClose} alt='' width={0} height={30} draggable='false' />
        </div>
    )
}
