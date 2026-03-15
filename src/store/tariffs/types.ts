
export type ITariffsWorkUse = 'faceToFace' | 'online' | 'withFamilies' | ''

export type TElem = {
    id: number,
    countSession: number,
    priceOneSession: number,
    installmentPlan: boolean,
    benefit: number
}

export type TListElemHistory = {
    id: number,
    data: string,
    desc: string,
    price: number
}

export interface ITariffs {
    listTariffs: TElem[],
    autoRenewal: boolean,
    setAutoRenewal: (newValue: boolean) => void,

    youHaveBalance: number,
    setYouHaveBalance: (newValue: number) => void,
    youHavePaidSessions: number,
    setYouHavePaidSessions: (newValue: number) => void,

    historyListSession: TListElemHistory[],
    addHistoryListSession: (newValue: TListElemHistory) => void,

    countPay: number,
    setCountPay: (newValue: string) => void,

    tariffPsychologist: ITariffsWorkUse,
    setTariffPsychologist: (newValue: ITariffsWorkUse) => void,

    promoCode: string,
    setPromoCode: (newValue: string) => void
}