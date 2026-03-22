
'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";

import Container from './UI/Container';

import PathFromLinks from "./UI/PathFromLinks";
import { IArticleCategory, IListArticles } from "@/store/article/types";

type Props = {
    title: string,
    listElem: IListArticles
}

export default function CategoriesArticle(props: Props) {
    const listCategories = Object.values(props.listElem)

    return (
        <Container>
            <>
                <PathFromLinks onePath={'Категории ' + props.title} twoPath="" threePath="" hideOneImage hideTwoImage hideCross />
                <div className='grid grid-cols-4 gap-[20px] mt-[50px]'>
                    {
                        listCategories.map((obj: IArticleCategory, index: number) => {
                            return (
                                <motion.div key={index}
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className='relative cursor-pointer bg-[rgba(235,245,255,1)]
                                    rounded-2xl pt-[20px] pl-[20px] h-[250px]
                                    hover:scale-105 transition-transform duration-300'>
                                    <Link href={'/articles/' + obj.linkName}>
                                        <div className='text-text text-[20px] font-medium w-[200px]'>{obj.titleArticle}</div>
                                        <Image className="absolute right-0 bottom-0" src={obj.imageArticle} alt='' width={180} height={165} draggable='false' />
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
