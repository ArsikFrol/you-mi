import { TListQuestions } from "../psychologists/types";

export type TTherapy = 'да' | 'нет' | 'Планирую начать' | 'Не проходил и не планирую' | ''
export type TCompletedHigher = 'да' | 'нет' | 'Нахожусь в процессе получения ВО' | ''
export type TYesOrNo = 'да' | 'нет' | ''

export interface IFormTeam {
    dayBirth: string,
    setDayBirth: (day: string) => void,
    monthBirth: string,
    setMonthBirth: (month: string) => void,
    yearBirth: string,
    setYearBirth: (year: string) => void,
    citizenship: string,
    setCitizenship: (newValue: string) => void,
    country: string,
    setCountry: (newValue: string) => void,
    numberPhone: string,
    setNumberPhone: (newValue: string) => void,
    email: string,
    setEmail: (newEmail: string) => void,
    socialNetwork: string,
    setSocialNetwork: (newValue: string) => void,
    allFieldsFilledOne: boolean,
    setAllFieldsFilledOne: (newValue: boolean) => void,

    haveCompletedHigher: TCompletedHigher,
    setHaveCompletedHigher: (newValue: TCompletedHigher) => void
    nameUniversities: string,
    setNameUniversities: (newValue: string) => void,
    faculty: string,
    setFaculty: (newValue: string) => void,
    specialization: string,
    setSpecialization: (newValue: string) => void,
    degree: string,
    setDegree: (newValue: string) => void,
    startYear: string,
    setStartYear: (newValue: string) => void,
    graduationYear: string,
    setGraduationYear: (newValue: string) => void,
    allFieldsFilledTwo: boolean,
    setAllFieldsFilledTwo: (newValue: boolean) => void,

    listQuestions: TListQuestions[],
    changeListQuestions: (idElem: number, newValue: boolean) => void,
    chooseListQuestions: TListQuestions[],
    addChooseListQuestions: (obj: TListQuestions) => void,
    removeChooseListQuestions: (obj: TListQuestions) => void,

    howManyYearsConsulting: string,
    setHowManyYearsConsulting: (newValue: string) => void,
    doYouHaveExperienceWorking: TYesOrNo,
    setDoYouHaveExperienceWorking: (newValue: TYesOrNo) => void,
    ifYesHowManyYears: string,
    setIfYesHowManyYears: (newValue: string) => void,
    howManyClients: string,
    setHowManyClients: (newValue: string) => void,
    howLongYourClients: string,
    setHowLongYourClients: (newValue: string) => void,
    areYouPersonalTherapy: TTherapy,
    setAreYouPersonalTherapy: (newValue: TTherapy) => void,
    howManyHoursPersonalTherapy: string,
    setHowManyHoursPersonalTherapy: (newValue: string) => void,
    whatApproachPersonalTherapy: string,
    setWhatApproachPersonalTherapy: (newValue: string) => void,
    youUndergoingSupervision: TTherapy,
    setYouUndergoingSupervision: (newValue: TTherapy) => void,
    howManyHoursYouUndergoingSupervision: string,
    setHowManyHoursYouUndergoingSupervision: (newValue: string) => void,
    whatApproachSupervision: string,
    setWhatApproachSupervision: (newValue: string) => void,
    allFieldsFilledFour: boolean,
    setAllFieldsFilledFour: (newValue: boolean) => void,

    formatWork: {
        faceToFace: boolean;
        online: boolean;
        withChildren: boolean;
    };
    setFormatWork: (key: keyof IFormTeam['formatWork'], newValue: boolean) => void,
    workOtherThanPsychotherapy: TYesOrNo,
    setWorkOtherThanPsychotherapy: (newValue: TYesOrNo) => void,
    howManyHoursWeek: number,
    setHowManyHoursWeek: (newValue: number) => void,
    tellUsAboutYourself: string,
    setTellUsAboutYourself: (newValue: string) => void,
    allFieldsFilledFive: boolean,
    setAllFieldsFilledFive: (newValue: boolean) => void,
}
