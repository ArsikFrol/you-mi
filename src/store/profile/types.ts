import { StaticImageData } from "next/image"

type TImage = StaticImageData | string
export type TGender = 'муж' | 'жен' | ''

export type TWebinarEntries = {
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
    payment: boolean | number,
    dateStart: string
}

export interface IProfile {
    password: string | '',
    setPassword: (newValue: string) => void,
    email: string | '',
    setEmail: (newValue: string) => void,
    FIO: string,
    setFIO: (newValue: string) => void,
    numberPhone: string,
    setNumberPhone: (newValue: string) => void,
    gender: TGender,
    setGender: (newValue: TGender) => void,

    referralPiple: number,
    setReferralPiple: (newValue: number) => void,
    moneyReferralPiple: number,
    setMoneyReferralPiple: (newValue: number) => void,

    webinarEntries: TWebinarEntries[],
    addWebinarEntries: (newValue: TWebinarEntries) => void,
    payElemWebinarEntries: (id: number, newValue: boolean) => void,

    nameForWebinar: string,
    setNameForWebinar: (newValue: string) => void,
    emailForWebinar: string,
    setEmailForWebinar: (newValue: string) => void,
    surnameForWebinar: string,
    setSurnameForWebinar: (newValue: string) => void,
    agreeWithRules: boolean,
    setAgreeWithRules: (newValue: boolean) => void,
}