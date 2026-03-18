import Image from "next/image"

import Btn from "./UI/Btn"

import pickPsychologist from '../../public/pickPsychologist.png'

export default function PickPsychologist() {
    return (
        <div className=''>
            <div className='w-[1200px] bg-(-bg) mx-auto my-[150px] relative p-[100px] rounded-2xl'>
                <div className='w-[480px] text-btn-and-title text-[40px] font-extrabold mb-[50px]'>Подберите своего психолога онлайн</div>
                <Btn textBtn="Подобрать психолога" widht={380} link='/formSelectionPsychologist/one' />
                <Image className="absolute right-[20px] -top-[70px]" src={pickPsychologist} alt='' width={360} height={360} draggable='false' />
            </div>
        </div>
    )
}
