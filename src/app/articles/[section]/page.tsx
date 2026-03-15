'use client'

import { usePathname } from "next/navigation";

import CategorySection from "@/components/CategorySection";
import Header from "@/components/Header";
import { TRoute } from "@/types/routes/types";

import useArticle from "@/store/article/articleStore";

export default function Section() {
    const pathName: TRoute = usePathname() as TRoute
    const backPage = pathName.split('/')[2]

    const {
        listArticles
    } = useArticle()

    return (
        <>
            <Header white />
            <CategorySection onePath="Статьи" twoPath={listArticles[backPage].titleArticle} />
        </>
    )
}