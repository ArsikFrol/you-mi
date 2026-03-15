'use client'

import CategoriesArticle from "@/components/CategoriesArticle";
import Header from "@/components/Header";
import PickPsychologist from "@/components/PickPsychologist";
import CardSlider from "@/components/UI/CardSlider";

import useArticles from "@/store/article/articleStore";

export default function Articles() {
    const {
        popularListArticles,
        listArticles
    } = useArticles()

    return (
        <>
            <Header white />
            <CategoriesArticle title="статей" listElem={listArticles} />
            <CardSlider listElem={popularListArticles} title="Популярное" />
            <PickPsychologist />
        </>
    )
}