import { create } from "zustand";

import { IFormTeam, TCompletedHigher, TTherapy, TYesOrNo } from "./types"
import { TListQuestions } from "../psychologists/types";

const listQuestions: Array<TListQuestions> = [
    { id: 1, checked: false, text: 'Гештальт-терапия' },
    { id: 2, checked: false, text: 'Когнитивно-поведенческая терапия (в том числе АСТ / CFT / DBT / Схематерапия)' },
    { id: 3, checked: false, text: 'Психодинамическая терапия (психоаналитическая)' },
    { id: 4, checked: false, text: 'Эмоционально-фокусированная терапия (EFT)' },
    { id: 5, checked: false, text: 'Клиент-центрированая терапия' },
    { id: 6, checked: false, text: 'Системная семейная терапия' },
    { id: 7, checked: false, text: 'Нарративная терапия' },
    { id: 8, checked: false, text: 'Экзистенциальная и логотерапия' },
    { id: 9, checked: false, text: 'Краткосрочная терапия' },
    { id: 10, checked: false, text: 'Гипнотерапия' },
    { id: 11, checked: false, text: 'Майндфулнесс' }
]

const useFormTeam = create<IFormTeam>((set, get) => ({
    dayBirth: '',
    setDayBirth: (newValue: string) => set({ dayBirth: newValue }),
    monthBirth: '',
    setMonthBirth: (newValue: string) => set({ monthBirth: newValue }),
    yearBirth: '',
    setYearBirth: (newValue: string) => set({ yearBirth: newValue }),
    citizenship: '',
    setCitizenship: (newValue: string) => set({ citizenship: newValue }),
    country: '',
    setCountry: (newValue: string) => set({ country: newValue }),
    numberPhone: '',
    setNumberPhone: (newValue: string) => set({ numberPhone: newValue }),
    email: '',
    setEmail: (newEmail: string) => set({ email: newEmail }),
    socialNetwork: '',
    setSocialNetwork: (newValue: string) => set({ socialNetwork: newValue }),
    allFieldsFilledOne: false,
    setAllFieldsFilledOne: (newValue: boolean) => set({ allFieldsFilledOne: newValue }),

    haveCompletedHigher: '',
    setHaveCompletedHigher: (newValue: TCompletedHigher) => set({ haveCompletedHigher: newValue }),
    nameUniversities: '',
    setNameUniversities: (newValue: string) => set({ nameUniversities: newValue }),
    faculty: '',
    setFaculty: (newValue: string) => set({ faculty: newValue }),
    specialization: '',
    setSpecialization: (newValue: string) => set({ specialization: newValue }),
    degree: '',
    setDegree: (newValue: string) => set({ degree: newValue }),
    startYear: '',
    setStartYear: (newValue: string) => set({ startYear: newValue }),
    graduationYear: '',
    setGraduationYear: (newValue: string) => set({ graduationYear: newValue }),
    allFieldsFilledTwo: false,
    setAllFieldsFilledTwo: (newValue: boolean) => set({ allFieldsFilledTwo: newValue }),

    listQuestions: listQuestions,
    changeListQuestions: (idElem: number, newValue: boolean) => set((state) => ({
        listQuestions: state.listQuestions.map(
            (elem) => elem.id === idElem ? { ...elem, checked: newValue } : elem)
    })),
    chooseListQuestions: [],
    addChooseListQuestions: (obj: TListQuestions) => set((state) => ({
        chooseListQuestions: [obj, ...state.chooseListQuestions]
    })),
    removeChooseListQuestions: (obj: TListQuestions) => set((state) => ({
        chooseListQuestions: state.chooseListQuestions.filter(
            (elem) => elem.id !== obj.id
        )
    })),

    howManyYearsConsulting: '',
    setHowManyYearsConsulting: (newValue: string) => set({ howManyYearsConsulting: newValue }),
    doYouHaveExperienceWorking: '',
    setDoYouHaveExperienceWorking: (newValue: TYesOrNo) => set({ doYouHaveExperienceWorking: newValue }),
    ifYesHowManyYears: '',
    setIfYesHowManyYears: (newValue: string) => set({ ifYesHowManyYears: newValue }),
    howManyClients: '',
    setHowManyClients: (newValue: string) => set({ howManyClients: newValue }),
    howLongYourClients: '',
    setHowLongYourClients: (newValue: string) => set({ howLongYourClients: newValue }),
    areYouPersonalTherapy: '',
    setAreYouPersonalTherapy: (newValue: TTherapy) => set({ areYouPersonalTherapy: newValue }),
    howManyHoursPersonalTherapy: '',
    setHowManyHoursPersonalTherapy: (newValue: string) => set({ howManyHoursPersonalTherapy: newValue }),
    whatApproachPersonalTherapy: '',
    setWhatApproachPersonalTherapy: (newValue: string) => set({ whatApproachPersonalTherapy: newValue }),
    youUndergoingSupervision: '',
    setYouUndergoingSupervision: (newValue: TTherapy) => set({ youUndergoingSupervision: newValue }),
    howManyHoursYouUndergoingSupervision: '',
    setHowManyHoursYouUndergoingSupervision: (newValue: string) => set({ howManyHoursYouUndergoingSupervision: newValue }),
    whatApproachSupervision: '',
    setWhatApproachSupervision: (newValue: string) => set({ whatApproachSupervision: newValue }),
    allFieldsFilledFour: false,
    setAllFieldsFilledFour: (newValue: boolean) => set({ allFieldsFilledFour: newValue }),

    formatWork: {
        faceToFace: false,
        online: false,
        withChildren: false
    },
    setFormatWork: (key, newValue) =>
        set((state) => ({
            formatWork: {
                ...state.formatWork,
                [key]: newValue
            }
        })),
    workOtherThanPsychotherapy: '',
    setWorkOtherThanPsychotherapy: (newValue: TYesOrNo) => set({ workOtherThanPsychotherapy: newValue }),
    howManyHoursWeek: 0,
    setHowManyHoursWeek: (newValue: number) => set({ howManyHoursWeek: newValue }),
    tellUsAboutYourself: '',
    setTellUsAboutYourself: (newValue: string) => set({ tellUsAboutYourself: newValue }),
    allFieldsFilledFive: false,
    setAllFieldsFilledFive: (newValue: boolean) => set({ allFieldsFilledFive: newValue }),
}))

export default useFormTeam;
export const { getState, setState, subscribe } = useFormTeam;
