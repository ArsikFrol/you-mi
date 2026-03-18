import Image from "next/image"

import Container from "@/components/UI/Container"
import Btn from "@/components/UI/Btn"

import complet from '../../../../public/complet.png'

export default function () {
    return (
        <div className='bg-(-bg)'>
            <Container purple minH paddingNoneY>
                <>
                    <div className='flex justify-between items-center mb-[100px]'>
                        <div className=''>
                            <div className='text-(--color-btn-and-title) text-[40px] font-extrabold w-[580px]'>
                                Спасибо! Ваша анкета успешно отправлена.
                            </div>
                            <div className='text-(--text) text-[24px] font-medium'>Средний срок ожидания ответа 5-7 дней.</div>
                        </div>
                        <Image src={complet} alt='' width={220} height={220} draggable='false' />
                    </div>
                    <Btn link="/" textBtn="На главную" widht={320} style={{ margin: '0 auto' }} />
                </>
            </Container>
        </div>
    )
}
