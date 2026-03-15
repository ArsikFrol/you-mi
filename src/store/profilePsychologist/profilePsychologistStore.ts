import { create } from "zustand";

import { IuseProfilePsychologist, TListBookedDate } from "./types";
import { ITariffsWork, TFreeDays } from "../psychologists/types";

const listBookedDate: TListBookedDate[] = [
    {
        id: 1,
        FIO: 'Сергей Иванов',
        fariff: 'faceToFace',
        time: '10:00',
        day: 3,
        indexMonth: 1
    },
    {
        id: 2,
        FIO: 'Сергей Иванов',
        fariff: 'online',
        time: '11:00',
        day: 10,
        indexMonth: 1
    },
    {
        id: 3,
        FIO: 'Сергей Иванов',
        fariff: 'withFamilies',
        time: '12:00',
        day: 21,
        indexMonth: 1
    }
]

const listFreeTime: TFreeDays = {
    now: [
        { id: 1, status: 'free', freeTime: ['12:00', '13:00', '15:00'] },
        { id: 2, status: 'crossedOut', freeTime: ['12:00', '15:00', '16:00'] },
        { id: 3, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 4, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] },
        { id: 5, status: 'free', freeTime: ['18:00'] },
        { id: 6, status: 'free', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 7, status: 'crossedOut', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 8, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 9, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 10, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 11, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 12, status: 'crossedOut', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 13, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 14, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 15, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 16, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 17, status: 'free', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 18, status: 'free', freeTime: ['12:00', '16:00', '18:00'] },
        { id: 19, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 20, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 21, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] },
        { id: 22, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 23, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 24, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 25, status: 'crossedOut', freeTime: ['12:00', '13:00', '16:00'] },
        { id: 26, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 27, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 28, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 29, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 30, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 31, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] }
    ],
    next: [
        { id: 1, status: 'free', freeTime: ['12:00', '13:00', '15:00'] },
        { id: 2, status: 'crossedOut', freeTime: ['12:00', '15:00', '16:00'] },
        { id: 3, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 4, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] },
        { id: 5, status: 'free', freeTime: ['18:00'] },
        { id: 6, status: 'free', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 7, status: 'crossedOut', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 8, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 9, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 10, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 11, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 12, status: 'crossedOut', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 13, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 14, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 15, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 16, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 17, status: 'free', freeTime: ['13:00', '15:00', '16:00', '18:00'] },
        { id: 18, status: 'free', freeTime: ['12:00', '16:00', '18:00'] },
        { id: 19, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 20, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 21, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] },
        { id: 22, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 23, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 24, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 25, status: 'crossedOut', freeTime: ['12:00', '13:00', '16:00'] },
        { id: 26, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 27, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 28, status: 'free', freeTime: ['12:00', '13:00', '16:00', '18:00'] },
        { id: 29, status: 'crossedOut', freeTime: ['12:00', '13:00', '15:00', '16:00', '18:00'] },
        { id: 30, status: 'free', freeTime: ['12:00', '13:00', '15:00', '18:00'] },
        { id: 31, status: 'free', freeTime: ['12:00', '13:00', '15:00', '16:00'] }
    ]
}

const listTaiffs: ITariffsWork = {
    faceToFace: 11,
    online: 12,
    withFamilies: 13
}

const useProfilePsychologist = create<IuseProfilePsychologist>((set) => ({
    listBookedDate: listBookedDate,
    listFreeTime: listFreeTime,
    listTaiffs: listTaiffs
}))

export default useProfilePsychologist;
export const { getState, setState, subscribe } = useProfilePsychologist;