import Image from "next/image";

import book from '../../public/waitingYou/book.png'
import checkMark from '../../public/waitingYou/checkMark.png'

import Title from "./UI/Title";
import Container from "./UI/Container";

const listElem = [
    { id: 1, width: 334, title: 'Диплом', desc: 'об окончании профильного высшего учебного заведения.' },
    { id: 2, width: 190, title: 'Прохождение ', desc: 'супервизии от 20 часов в год.' },
    { id: 3, width: 200, title: 'Прохождение', desc: 'личной терапии от 50 часов в год.' }
]

export default function WaitingYou() {
    return (
        <Container>
            <>
                <Title text="Ждем от вас" />
                <div className="bg-[rgba(235,245,255,1)] rounded-2xl py-7.5 px-12.5 flex gap-x-10 items-center mb-10">
                    <Image src={book} alt='' width={150} height={150} draggable='false' />
                    <div className="">
                        <div className="text-text text-[24px] font-semibold mb-3">Документы</div>
                        <div className="text-text text-[20px] w-185">подтверждающие дополнительное образование в определенном направлении психотерапии. Мы рассматриваем только длительные программы обучения, около 500 часов.</div>
                    </div>
                </div>
                <div className='flex justify-between mb-10'>
                    {

                        listElem.map((obj: { id: number, title: string, desc: string, width: number }, index: number) => {
                            return (
                                <div className="bg-[rgba(235,245,255,1)] rounded-2xl py-5 px-15 text" key={index}>
                                    <div className='text-[24px] font-semibold'>{obj.title}</div>
                                    <div style={{ width: `${obj.width}px` }} className='text-[20px]'>{obj.desc}</div>
                                </div>
                            )
                        })

                    }
                </div>
                <div className="bg-[rgba(235,245,255,1)] rounded-2xl py-7.5 px-12.5 flex gap-x-10 items-center mb-10">
                    <Image src={checkMark} alt='' width={150} height={150} draggable='false' />
                    <div className="">
                        <div className="text-text text-[24px] font-semibold mb-3">Подтвержденнный опыт работы</div>
                        <div className="text-text text-[20px] w-185">не менее 3-х лет. Учитывается только опыт консультирования за оплату и не в рамках учебной программы.</div>
                    </div>
                </div>
            </>
        </Container>
    )
}
