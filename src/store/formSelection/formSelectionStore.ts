import { create } from "zustand"

import { IFormSelection, TGender, TYesOrNoOrEmpty } from "./type"

const useFormSelect = create<IFormSelection>((set, get) => ({
    agePsychologist: 32,
    setAgePsychologist: (newValue: number) => set({ agePsychologist: newValue }),
    genderPsychologist: '',
    setGenderPsychologist: (newValue: TGender) => set({ genderPsychologist: newValue }),
    firstAskPsychologist: '',
    setFirstAskPsychologist: (newValue: TYesOrNoOrEmpty) => set({ firstAskPsychologist: newValue }),
    workExperiencePsychologist: '',
    setWorkExperiencePsychologist: (newValue: TYesOrNoOrEmpty) => set({ workExperiencePsychologist: newValue }),
    allFieldsFilledOne: false,
    setAllFieldsFilledOne: (newValue: boolean) => set({ allFieldsFilledOne: newValue }),

    name: '',
    setName: (newName: string) => set({ name: newName }),
    dayBirth: '',
    setDayBirth: (newValue: string) => set({ dayBirth: newValue }),
    monthBirth: '',
    setMonthBirth: (newValue: string) => set({ monthBirth: newValue }),
    yearBirth: '',
    setYearBirth: (newValue: string) => set({ yearBirth: newValue }),
    numberPhone: '',
    setNumberPhone: (newNumber: string) => set({ numberPhone: newNumber }),
    email: '',
    setEmail: (newEmail: string) => set({ email: newEmail }),
    allFieldsFilledTwo: false,
    setAllFieldsFilledTwo: (newValue: boolean) => set({ allFieldsFilledTwo: newValue }),

    selectData: false,
    setSelectData: (value: boolean) => set({ selectData: value }),

    numberCard: '',
    setNumberCard: (newNumberCard: string) => set({ numberCard: newNumberCard }),
    validUntil: '',
    setValidUntil: (newValid: string) => set({ validUntil: newValid }),
    CVV: '',
    setCVV: (newCVV: string) => set({ CVV: newCVV }),
    cardHolder: '',
    setCardHolder: (newCardHolder: string) => set({ cardHolder: newCardHolder }),
    rememberUser: false,
    setRememberUser: (newValue: boolean) => set({ rememberUser: newValue }),
    allFieldsFilledPayService: false,
    setAllFieldsFilledPayService: (newValue: boolean) => set({ allFieldsFilledPayService: newValue }),
    clearAllFields: () => set({
        numberCard: '',
        validUntil: '',
        CVV: '',
        cardHolder: ''
    })

}))

export default useFormSelect;
export const { getState, setState, subscribe } = useFormSelect;