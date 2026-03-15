export type TStrOrBool = boolean | ''
export type TYesOrNoOrEmpty = 'да' | 'нет' | ''

export type TGender = 'муж' | 'жен' | 'не важно' | ''

export interface IFormSelection {
    agePsychologist: number,
    setAgePsychologist: (newValue: number) => void
    genderPsychologist: TGender,
    setGenderPsychologist: (newGender: TGender) => void
    firstAskPsychologist: TYesOrNoOrEmpty,
    setFirstAskPsychologist: (newValue: TYesOrNoOrEmpty) => void
    workExperiencePsychologist: TYesOrNoOrEmpty,
    setWorkExperiencePsychologist: (newValue: TYesOrNoOrEmpty) => void
    allFieldsFilledOne: boolean,
    setAllFieldsFilledOne: (newValue: boolean) => void

    name: string,
    setName: (newName: string) => void
    dayBirth: string,
    setDayBirth: (day: string) => void
    monthBirth: string,
    setMonthBirth: (month: string) => void
    yearBirth: string,
    setYearBirth: (year: string) => void
    numberPhone: string,
    setNumberPhone: (newNumber: string) => void
    email: string,
    setEmail: (newEmail: string) => void
    allFieldsFilledTwo: boolean,
    setAllFieldsFilledTwo: (newValue: boolean) => void

    selectData: boolean,
    setSelectData: (newValue: boolean) => void

    numberCard: string,
    setNumberCard: (newNumber: string) => void
    validUntil: string,
    setValidUntil: (newValidUntil: string) => void
    CVV: string,
    setCVV: (newCVV: string) => void
    cardHolder: string
    setCardHolder: (newCardHolder: string) => void,
    rememberUser: boolean,
    setRememberUser: (newValue: boolean) => void,
    allFieldsFilledPayService: boolean,
    setAllFieldsFilledPayService: (newValue: boolean) => void
    clearAllFields: () => void,
}