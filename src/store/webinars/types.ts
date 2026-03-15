import { StaticImageData } from "next/image"
import { IRelated } from "../article/types"

type TImage = StaticImageData | string

export type TActiveBtn = 'upcomingOnes' | 'archive'

export type TListArchive = {
    id: number,
    title: string,
    smallDesc: string,
    bigDesc: string,
    date: string,
    tags: string[]
    author: string,
    video: string,
    smallImage: TImage,
    bigImage: TImage
}

export type TListUpcomingOnes = {
    id: number,
    title: string,
    smallDesc: string,
    bigDesc: string,
    tags: string[]
    author: string,
    video: string,
    smallImage: TImage,
    bigImage: TImage,
    price: number,
    dateStart: string
}

export interface IuseWebinars {
    listArchive: TListArchive[],
    popularListWebinars: IRelated[],
    listUpcomingOnes: TListUpcomingOnes[],

    activeBtn: TActiveBtn,
    setActiveBtn: (newValue: TActiveBtn) => void
}