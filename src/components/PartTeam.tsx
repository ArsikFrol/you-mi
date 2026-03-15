import Image from "next/image"

import Container from "./UI/Container"
import Btn from "./UI/Btn"

import partTeam from '../../public/partTeam.png'

export default function PartTeam() {
    return (
        <Container purple relative>
            <>
                <div className='text-(--color-btn-and-title) text-[40px] font-extrabold mb-[20px]'>Станьте частью команды YouMi</div>
                <div className='text-(--text) text-[24px] font-medium mb-[100px] w-[780px]'>Отправьте заявку, пройдите отбор, выберите часы в расписании и начните терапию.</div>
                <div className='w-[390px] mx-auto'><Btn link="/formPartTeam/one" textBtn="Оставить заявку" widht={380} /></div>
                <Image className="absolute right-0 -top-[150px]" src={partTeam} alt='' width={320} height={320} draggable='false' />
            </>
        </Container>
    )
}