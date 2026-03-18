'use client'

import Image, { StaticImageData } from "next/image"
import React from "react"

import user from '../../public/user.png'

type TClient = {
    id: number,
    image: StaticImageData,
    FIO: string
}

const listClient: TClient[] = [
    { id: 1, image: user, FIO: 'Инна Ильина' },
    { id: 2, image: user, FIO: 'Инна Ильина' },
    { id: 3, image: user, FIO: 'Инна Ильина' },
    { id: 4, image: user, FIO: 'Инна Ильина' },
    { id: 5, image: user, FIO: 'Инна Ильина' },
    { id: 6, image: user, FIO: 'Инна Ильина' },
    { id: 7, image: user, FIO: 'Инна Ильина' },
    { id: 8, image: user, FIO: 'Инна Ильина' }
]

type Props = {
    setActiveClient: React.Dispatch<React.SetStateAction<number>>,
    activeClient: number
}

export default function ColumnClient(props: Props) {

    return (
        <div className='w-[300px] h-[620px] overflow-x-hidden'
            style={{
                ...(props.activeClient === 0 && { margin: '0 auto' })
            }}>
            <div className='text-btn-and-title text-[20px] font-semibold mb-[30px]'
                style={{
                    ...(props.activeClient === 0 && { textAlign: 'center' })
                }}>
                Выберите клиента
            </div>
            <div className='w-[300px]'
                style={{
                    ...(props.activeClient === 0 && { paddingLeft: '30px' })
                }}>
                {
                    listClient.map((obj, index: number) => {
                        return (
                            <div className="flex gap-x-[20px] items-center py-[20px] pl-[30px]
                                hover:scale-105 transition-transform duration-300 cursor-pointer
                                rounded-2xl"
                                style={{
                                    ...(props.activeClient === obj.id && { background: 'white' })
                                }}
                                onClick={() => props.setActiveClient(obj.id)}
                                key={index}>
                                <Image src={obj.image} alt='' width={50} height={50} draggable='false' />
                                <div className='text-text text-[16px]'
                                    style={{
                                        ...(props.activeClient === obj.id ? {
                                            color: 'rgba(120, 114, 185, 1)',
                                            fontWeight: '500'
                                        } : {})
                                    }}>{obj.FIO}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
