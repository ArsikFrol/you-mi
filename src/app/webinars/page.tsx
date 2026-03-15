'use client'

import CategoriesWebinars from "@/components/CategoriesWebinars";
import Header from "@/components/Header";
import PickPsychologist from "@/components/PickPsychologist";
import TopContentWebinars from "@/components/TopContentWebinars";

import CardSlider from "@/components/UI/CardSlider";

import useWebinars from "@/store/webinars/webinarsStore";

export default function Webinars() {

    const {
        popularListWebinars,
        listArchive,
        listUpcomingOnes,
    } = useWebinars()

    return (
        <>
            <Header white />
            <TopContentWebinars />
            <CategoriesWebinars listArchive={listArchive} listUpcomingOnes={listUpcomingOnes} />
            <CardSlider listElem={popularListWebinars} title="Популярное" />
            <PickPsychologist />
        </>
    )
}