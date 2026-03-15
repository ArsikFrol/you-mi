import { create } from "zustand";
import { IProfile, TGender, TWebinarEntries } from "./types";

import archive from '../../../public/webinars/archive.png'
import live from '../../../public/webinars/live.png'

const webinarEntries: TWebinarEntries[] = [{
    id: 1,
    title: 'Как побороть тревогу?',
    smallDesc: 'В работе с психологом очень важно чувствовать себя в безопасности.',
    bigDesc: 'В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом.<br /><br />Какие у вас права и как обезопасить себя?',
    tags: ['#отношения', '#отношения', '#отношения', '#отношения'],
    author: 'Дмитреева Анастасия',
    video: '',
    smallImage: archive,
    bigImage: live,
    price: 0,
    payment: false,
    dateStart: '20 августа в 19.00'
},
{
    id: 2,
    title: 'Как побороть тревогу?',
    smallDesc: 'В работе с психологом очень важно чувствовать себя в безопасности.',
    bigDesc: 'В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом.<br /><br />Какие у вас права и как обезопасить себя?',
    tags: ['#отношения', '#отношения', '#отношения', '#отношения'],
    author: 'Дмитреева Анастасия',
    video: '',
    smallImage: archive,
    bigImage: live,
    price: 190,
    payment: true,
    dateStart: '20 августа в 19.00'
},
{
    id: 3,
    title: 'Как побороть тревогу?',
    smallDesc: 'В работе с психологом очень важно чувствовать себя в безопасности.',
    bigDesc: 'В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом.<br /><br />Какие у вас права и как обезопасить себя?',
    tags: ['#отношения', '#отношения', '#отношения', '#отношения'],
    author: 'Дмитреева Анастасия',
    video: '',
    smallImage: archive,
    bigImage: live,
    price: 890,
    payment: false,
    dateStart: '20 августа в 19.00'
}, {
    id: 4,
    title: 'Как побороть тревогу?',
    smallDesc: 'В работе с психологом очень важно чувствовать себя в безопасности.',
    bigDesc: 'В работе с психологом очень важно чувствовать себя в безопасности, а конфиденциальность — важная составляющая этого вопроса. Профессионалы очень серьезно к этому относятся. На хороших обучающих программах этому посвящено много времени. То, что происходит в стенах кабинета психолога, должно там остаться — в том числе факт самих встреч с психологом.<br /><br />Какие у вас права и как обезопасить себя?',
    tags: ['#отношения', '#отношения', '#отношения', '#отношения'],
    author: 'Дмитреева Анастасия',
    video: '',
    smallImage: archive,
    bigImage: live,
    price: 80,
    payment: false,
    dateStart: '20 августа в 19.00'
}]

const useProfile = create<IProfile>((set, get) => ({
    password: '',
    setPassword: (newValue: string) => set({ password: newValue }),
    email: '',
    setEmail: (newValue: string) => set({ email: newValue }),
    FIO: '',
    setFIO: (newValue: string) => set({ FIO: newValue }),
    numberPhone: '',
    setNumberPhone: (newValue: string) => set({ numberPhone: newValue }),
    gender: '',
    setGender: (newValue: TGender) => set({ gender: newValue }),

    referralPiple: 0,
    setReferralPiple: (newValue: number) => set({ referralPiple: newValue }),
    moneyReferralPiple: 0,
    setMoneyReferralPiple: (newValue: number) => set({ moneyReferralPiple: newValue }),

    webinarEntries: webinarEntries,
    addWebinarEntries: (newValue: TWebinarEntries) => set((state) => ({
        webinarEntries: [newValue, ...state.webinarEntries]
    })),
    payElemWebinarEntries: (id: number, newValue: boolean) => set((state) => ({
        webinarEntries: state.webinarEntries.map(
            (elem) => elem.id === id ? {
                ...elem, payment: newValue
            } : elem
        )
    })),

    nameForWebinar: '',
    setNameForWebinar: (newValue: string) => set({ nameForWebinar: newValue }),
    emailForWebinar: '',
    setEmailForWebinar: (newValue: string) => set({ emailForWebinar: newValue }),
    surnameForWebinar: '',
    setSurnameForWebinar: (newValue: string) => set({ surnameForWebinar: newValue }),
    agreeWithRules: false,
    setAgreeWithRules: (newValue: boolean) => set({ agreeWithRules: newValue }),
}))

export default useProfile;
export const { getState, setState, subscribe } = useProfile;