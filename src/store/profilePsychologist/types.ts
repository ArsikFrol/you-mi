import { timeType } from "../calendar/types"
import { ITariffsWork, TFreeDays } from "../psychologists/types"

export type TTariff = 'faceToFace' | 'online' | 'withFamilies'

export type TListBookedDate = {
    id: number,
    FIO: string,
    fariff: TTariff,
    time: timeType,
    day: number,
    indexMonth: number
}

export interface IuseProfilePsychologist {
    listBookedDate: TListBookedDate[],
    listFreeTime: TFreeDays,
    listTaiffs: ITariffsWork
}