import Image, { StaticImageData } from "next/image";

import Title from "./UI/Title";
import Container from "./UI/Container";

import one from '../../public/theyWriteAboutUs/one.png'
import two from '../../public/theyWriteAboutUs/two.png'
import three from '../../public/theyWriteAboutUs/three.png'
import four from '../../public/theyWriteAboutUs/four.png'
import five from '../../public/theyWriteAboutUs/five.png'

const listElem = [
    { id: 1, width: 151, image: one },
    { id: 2, width: 141, image: two },
    { id: 3, width: 141, image: three },
    { id: 4, width: 72, image: four },
    { id: 5, width: 154, image: five }
]

export default function TheyWriteAboutUs() {
    return (
        <Container>
            <>
                <Title text="О нас пишут" marginNone />
                <div className="mt-[50px] 
                    lg:flex lg:justify-between lg:items-center
                    max-lg:flex max-lg:flex-col max-lg:gap-y-[50px]">
                    {
                        listElem.map((obj: { id: number, image: StaticImageData, width: number }, index: number) => {
                            return (
                                <Image key={index} src={obj.image} alt='' width={obj.width} height={38} draggable='false' 
                                    className="mx-auto"/>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}