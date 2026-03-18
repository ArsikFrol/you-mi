import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import user from '../../public/specialist.png'

type TListUsers = {
    id: number,
    name: string,
    lastTimeMessage: string,
    lastMessage: string,
    userImage: StaticImageData,
    linkPsychology: string
}

const listUsers: TListUsers[] = [
    { id: 1, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 2, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 3, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 4, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 5, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 6, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 7, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 8, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 9, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' },
    { id: 10, name: 'Инна Ильина', linkPsychology: '', userImage: user, lastTimeMessage: '12:09', lastMessage: 'Часто бывает таксмысл текста не имеет большого значения, а важен только его объем или структура.' }
]
/* rgba(76, 175, 80, 0.5) */
export default function Dialogues() {
    return (
        <div>
            <div className='text-btn-and-title text-[20px] font-semibold mb-[30px]'>Сообщения</div>
            <div className='flex flex-col gap-y-[20px] overflow-x-hidden h-[400px]'>
                {
                    listUsers.map((obj: TListUsers, index: number) => {
                        return (
                            <div className="flex justify-between w-[300px]" key={index}>
                                <Link className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    href={obj.linkPsychology}>
                                    <Image className=""
                                        src={obj.userImage} alt='' width={50} height={50} draggable='false' />
                                </Link>
                                <div className='flex flex-col'>
                                    <div className='text-text text-[18px] font-medium'>{obj.name}</div>
                                    <div className='text-[rgba(77,77,82,0.7)] text-[16px] font-light'>{obj.lastMessage.slice(0, 18)}..</div>
                                </div>
                                <div className='text-text text-[14px]'>{obj.lastTimeMessage}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
