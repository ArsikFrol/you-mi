'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import Container from './UI/Container'
import PathFromLinks from './UI/PathFromLinks'

import useArticle from '@/store/article/articleStore'
import { TRoute } from '@/types/routes/types'
import { IArticlesSection } from '@/store/article/types'

type Props = {
    onePath: string,
    twoPath: string
}

export default function CategorySection(props: Props) {
    const pathName: TRoute = usePathname() as TRoute
    const backPage = pathName.split('/')[2]

    const {
        listArticles
    } = useArticle()

    return (
        <Container>
            <>
                <div className=''>
                    <PathFromLinks hrefOne='articles' backTwo='/articles' onePath={props.onePath} twoPath={props.twoPath} threePath=''
                        hideSearch hideTwoImage />
                </div>
                <div className='grid grid-cols-3 mt-[50px] gap-x-[55px] gap-y-[50px]'>
                    {
                        listArticles[backPage].section.map((obj: IArticlesSection, index: number) => {
                            return (
                                <motion.div
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }} className=''>
                                    <Link href={`${backPage}/${obj.id}`} className="w-[360px] text-textcursor-pointer hover:scale-105 transition-transform duration-300" key={index}>
                                        <Image src={obj.imageSection} alt='' width={360} height={170} draggable='false' />
                                        <div className='text-[20px] font-semibold my-[10px]'>{obj.titleSection}</div>
                                        <div className='text-[18px]'>{obj.smallDesc}</div>
                                    </Link>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </>
        </Container>
    )
}
