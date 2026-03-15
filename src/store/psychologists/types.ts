import { StaticImageData } from "next/image";
import { timeType, TStatus } from "../calendar/types";


export type TListQuestions = { id: number, checked: boolean, text: string }
export type TWhatMonthFreeTimeUse = 'now' | 'next'
export type TFreeDays = {
    now: TFreeDay[],
    next: TFreeDay[]
}

export type ITariffsWork = {
    faceToFace: number,
    online: number,
    withFamilies: number
}

export type TListPsychologist = {
    id: number;
    name: string;
    bigImage: StaticImageData;
    imagePhoto: StaticImageData,
    workExperience: string;
    worksWithQueries: string[];
    videoCard: StaticImageData;
    freeDays: TFreeDays,
    favorite: boolean,
    tariffsWork: ITariffsWork,
    aboutMe: string,
    education: string,
    approachesToWork: string
}
export type TFreeDay = { id: number, status: TStatus, freeTime: Array<timeType> }

export type TusePsychologists = {
    listPsychologist: TListPsychologist[],

    listQuestions: TListQuestions[],
    changeListQuestions: (idElem: number, newValue: boolean) => void

    activePsychologist: number,
    setActivePsychologist: (active: number) => void,
    profileActivePsychologist: number,
    setProfileActivePsychologist: (newValue: number) => void,
    whatMonthFreeTimeUse: TWhatMonthFreeTimeUse,
    setWhatMonthFreeTimeUse: (newValue: TWhatMonthFreeTimeUse) => void,

    favoritePsychologists: () => void,
    setFavoritePsychologist: (idPsychologist: number) => void
}