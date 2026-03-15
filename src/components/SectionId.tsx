'use client'

import Image from 'next/image'

import Container from './UI/Container'
import PathFromLinks from './UI/PathFromLinks'
import Title from './UI/Title'

import { IArticlesSection } from '@/store/article/types'

import sectionId from '../../public/sectionId.png'

type Props = {
    onePath: string,
    twoPath: string,
    threePath: string,
    hrefOne: string,
    hrefTwo: string,
    objElem: IArticlesSection,
    backPage: string
}

export const renderTextWithBreaks = (text: string) => {
    return text.split('<br />').map((line, index, array) => (
        <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
        </span>
    ));
};

export default function SectionId(props: Props) {
    return (
        <Container>
            <>
                <PathFromLinks onePath={props.onePath} twoPath={props.twoPath} backTwo='/articles' backThree={`/articles/${props.backPage}`}
                    threePath={props.threePath} hrefOne={props.hrefOne} hrefTwo={props.hrefTwo} hideSearch noneSearch />
                <div className='w-[1080px] mx-auto pt-[100px]'>
                    <Title text='Как побороть тревогу?' />
                    <Image className='rounded-2xl mb-[50px]' src={sectionId} alt='' width={1080} height={540} draggable='false' />
                    <div className='text-(--text) text-[22px]'>{renderTextWithBreaks(props.objElem.bigDesc)}</div>
                </div>
                <div className='text-(--text) text-[20px] flex justify-between mt-[80px] w-[1080px] mx-auto'>
                    <div className='font-semibold'>{props.objElem.author}</div>
                    <div className=''>{props.objElem.date}</div>
                </div>
            </>
        </Container>
    )
}