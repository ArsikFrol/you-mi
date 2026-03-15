'use client'

import React from "react"
import Image, { StaticImageData } from "next/image"

import Input from "./UI/Input"

import userSender from '../../public/specialist.png'
import userReceiver from '../../public/user.png'

type TListMessages = {
    idMessage: number,
    senderID: number,
    textMessage: string,
    senderImage: StaticImageData,
    receiverImage: StaticImageData
}

const listChatMessages: TListMessages[] = [
    { idMessage: 1, receiverImage: userReceiver, senderImage: userSender, senderID: 1, textMessage: 'Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.' },
    { idMessage: 2, receiverImage: userReceiver, senderImage: userSender, senderID: 2, textMessage: 'Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.' },
    { idMessage: 3, receiverImage: userReceiver, senderImage: userSender, senderID: 1, textMessage: 'Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.' },
    { idMessage: 4, receiverImage: userReceiver, senderImage: userSender, senderID: 1, textMessage: 'Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.' },
    { idMessage: 5, receiverImage: userReceiver, senderImage: userSender, senderID: 2, textMessage: 'Часто бывает так, что смысл текста не имеет большого значения, а важен только его объем или структура.' }
]

export default function Chat() {
    const chatContainerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, []);

    return (
        <div >
            <div className='flex justify-between flex-col h-[400px] gap-y-[30px] overflow-x-hidden'
                ref={(el) => { chatContainerRef.current = el }}>
                {
                    listChatMessages.map((obj: TListMessages, index: number) => {
                        return (
                            <div className="flex gap-x-[10px] items-end" key={index}
                                style={{
                                    ...(obj.senderID === 1 ? {
                                        marginLeft: 'auto'
                                    } : {})
                                }}>
                                <div className='w-[300px] p-[20px] rounded-2xl'
                                    style={{
                                        ...(obj.senderID === 1 ? {
                                            background: 'rgba(120, 114, 185, 1)',
                                            color: 'white'
                                        } : {
                                            background: 'white',
                                            color: 'rgba(77, 77, 82, 1)',
                                            order: '2'
                                        })
                                    }}>
                                    {obj.textMessage}
                                </div>
                                <Image className="" src={obj.receiverImage} alt='' width={50} height={50} draggable='false' />
                            </div>
                        )
                    })
                }
            </div>
            <div className='h-[40px] mt-[30px]'>
                <Input maxLength={10000} onChange={() => { }} value="" height={50}
                    width={740} placeholder="Введите сообщение" />
            </div>
        </div>
    )
}