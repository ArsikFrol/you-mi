'use client'

import Header from "@/components/Header";
import SectionId from "@/components/SectionId";
import CardSlider from "@/components/UI/CardSlider";
import PickPsychologist from "@/components/PickPsychologist";

import useArticle from "@/store/article/articleStore";
import { TRoute } from "@/types/routes/types";
import { usePathname } from "next/navigation";

export default function SectionIdPage() {
    const pathName: TRoute = usePathname() as TRoute
    const backPage = pathName.split('/')[2]
    const indexPage: number = Number(pathName.split('/')[3])

    const {
        listArticles
    } = useArticle()

    return (
        <>
            <Header white />
            <SectionId backPage={backPage}
                objElem={listArticles[backPage].section[indexPage - 1]}
                onePath="Статьи" twoPath={listArticles[backPage].titleArticle}
                threePath={listArticles[backPage].section[indexPage - 1].titleSection}
                hrefOne="" hrefTwo="" />
            <CardSlider listElem={listArticles[backPage].section[indexPage - 1].relatedArticles} title="Читайте также" />
            <PickPsychologist />
        </>
    )
}