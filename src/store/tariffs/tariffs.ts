import { create } from "zustand";

import { ITariffs, ITariffsWorkUse, TElem, TListElemHistory } from "./types";

const listTariffs: Array<TElem> = [
    { id: 1, countSession: 1, priceOneSession: 2800, installmentPlan: false, benefit: 2520 },
    { id: 2, countSession: 4, priceOneSession: 2800, installmentPlan: false, benefit: 0 },
    { id: 3, countSession: 8, priceOneSession: 2800, installmentPlan: true, benefit: 2520 },
    { id: 4, countSession: 16, priceOneSession: 2800, installmentPlan: false, benefit: 2520 },
    { id: 5, countSession: 32, priceOneSession: 2800, installmentPlan: false, benefit: 0 },
    { id: 6, countSession: 64, priceOneSession: 2800, installmentPlan: false, benefit: 2520 },
    { id: 7, countSession: 96, priceOneSession: 2800, installmentPlan: true, benefit: 2520 },
    { id: 8, countSession: 128, priceOneSession: 2800, installmentPlan: true, benefit: 0 }
]

const useTariffs = create<ITariffs>((set, get) => ({
    listTariffs: listTariffs,
    autoRenewal: false,
    setAutoRenewal: (newValue: boolean) => set({ autoRenewal: newValue }),

    youHaveBalance: 1000000,
    setYouHaveBalance: (newValue: number) => set({ youHaveBalance: newValue }),
    youHavePaidSessions: 44000,
    setYouHavePaidSessions: (newValue: number) => set({ youHavePaidSessions: newValue }),

    historyListSession: [],
    addHistoryListSession: (newValue: Omit<TListElemHistory, 'id'>) =>
        set((state) => {
            const maxId = state.historyListSession.length > 0
                ? Math.max(...state.historyListSession.map(item => item.id))
                : 0
            const newItem: TListElemHistory = {
                ...newValue,
                id: maxId + 1
            }
            return {
                historyListSession: [newItem, ...state.historyListSession]
            }
        }),

    countPay: 0,
    setCountPay: (newValue: string) => set({ countPay: Number(newValue) }),

    tariffPsychologist: '',
    setTariffPsychologist: (newValue: ITariffsWorkUse) => set({ tariffPsychologist: newValue }),

    promoCode: '',
    setPromoCode: (newValue: string) => set({ promoCode: newValue })
}))

export default useTariffs;
export const { getState, setState, subscribe } = useTariffs;