'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import { TRoute } from "@/types/routes/types"

import bg from '../../../public/bgBtn.png'

type Props = {
    textBtn: string,
    widht: number,
    link?: TRoute | '',
    style?: any,
    scroll?: boolean | false
}

export default function Btn(props: Props) {
    const router = useRouter()

    const clickBtn = () => {
        if (props.scroll) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } if (props.link) router.push(props.link)
    }

    return (
        <div onClick={clickBtn}
            style={{
                ...({ width: `${props.widht}px` }),
                ...(props.style)
            }} className='relative group block'>
            <div style={{ width: `${props.widht}px` }}
                className='relative z-10 cursor-pointer rounded-2xl
                bg-btn-and-title text-white text-[20px] font-bold text-center leading-[70px]'>
                {props.textBtn}
            </div>
            <Image style={{ height: '70px' }}
                className='absolute top-2.5 left-2.5 transition-transform group-hover:translate-[-5px]'
                src={bg} alt='' width={props.widht} />
        </div>
    )
}
