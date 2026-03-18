import Image from "next/image"

import specialist from '../../public/specialist.png'

const listElemLeft = [
    { id: 1, tel: '+7 495 989 50 50', desc: 'Центр экстренной психологической помощи МЧС России' },
    { id: 2, tel: '8 800 333 44 34', desc: 'Бесплатная кризисная линия доверия' },
    { id: 3, tel: '8 800 2000 122', desc: 'Всероссийская служба детского телефона доверия' }
]

const listElemRight = [
    { id: 1, tel: '+7 499 173 09 09', desc: 'Московская служба психологической помощи населению' },
    { id: 2, tel: '8 800 700 06 00', desc: 'Всероссийский телефон доверия для женщин, пострадавших от домашнего насилия' }
]

export default function EmergencyAssistance() {
    return (
        <div className="relative bg-(-bg) mx-auto my-25 p-12.5 rounded-2xl
            4xl:w-[1500px]
            3xl:w-[1300px]
            2xl:w-[1200px]
            xl:w-[1140px]
            lg:w-[960px]
            md:w-[690px]
            sm:max-md:mx-[30px]">
            <div className="mb-5 text-btn-and-title font-extrabold
                md:text-[40px]
                max-md:text-[35px]">Экстренная помощь</div>
            <div className="mb-7.5 text-text
                xl:w-[780px]
                max-xl:md:w-[550px]
                md:text-[20px] max-md:text-[18px]">Если вам необходима
                <span className="font-semibold"> срочная психологическая помощь </span>
                и вы чувствуете, что не можете больше справиться самостоятельно, обратитесь по одному из контактов ниже.
            </div>
            <div className="mt-[50px] flex
                xl:justify-between
                max-xl:flex-col max-xl:gap-y-[30px]">
                <div className="flex flex-col gap-y-[20px]  w-[450px]">
                    {
                        listElemLeft.map((obj: { id: number, tel: string, desc: string }, index: number) => {
                            return (
                                <div className="text-text flex flex-col gap-y-[5px]" key={index}>
                                    <div className="font-semibold
                                        md:text-[24px]
                                        max-md:text-[20px]">{obj.tel}</div>
                                    <div className="md:text-[20px] max-md:text-[18px]">{obj.desc}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col gap-y-5  w-112.5">
                    {
                        listElemRight.map((obj: { id: number, tel: string, desc: string }, index: number) => {
                            return (
                                <div className="text-text flex flex-col gap-y-[5px]" key={index}>
                                    <div className="font-semibold
                                        md:text-[24px]
                                        max-md:text-[20px]">{obj.tel}</div>
                                    <div className="md:text-[20px] max-md:text-[18px]">{obj.desc}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Image  src={specialist} alt='' width={240} height={240} draggable='false'
                className="absolute right-25 -top-12.5
                    max-lg:hidden" />
        </div>
    )
}
