import useTariffs from "@/store/tariffs/tariffs"
import useCalendar, { listMonthGenitiveCase } from "@/store/calendar/calendarStore"
import { timeType } from "@/store/calendar/types"
import { ITariffsWorkUse } from "@/store/tariffs/types"
import { TWhereToShow } from "./UI/Calendar"
import toast from "react-hot-toast"
import Btn from "./UI/Btn"
import usePsychologists from "@/store/psychologists/psychologistsStore"

type Props = {
    activeTariff: ITariffsWorkUse,
    setActiveTariff: React.Dispatch<React.SetStateAction<ITariffsWorkUse>>,
    activeIdDay: number,
    activeFreeTime: timeType,
    whereToShow: TWhereToShow,
    setActiveFreeTime: React.Dispatch<React.SetStateAction<timeType>>,
    showBtnChoose: boolean,
    setShowBtnChoose: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function TariffsPsychologist(props: Props) {
    const {
        tariffPsychologist,
        youHavePaidSessions, setYouHavePaidSessions
    } = useTariffs()

    const {
        listPsychologist,
        activePsychologist,
    } = usePsychologists()

    const {
        globalActiveDay, setGlobalActiveDay,
        globalActiveTime, setGlobalActiveTime,
        setShowCalendar,
        setGlobalActiveMonth,
        activeMonth
    } = useCalendar()

    const clickTariff = (tariff: ITariffsWorkUse) => {
        props.setActiveTariff(tariff)
        props.setShowBtnChoose(true)
    }

    const clickChooseTime = () => {
        setShowCalendar(false)
        props.setActiveFreeTime(props.activeFreeTime)
        setGlobalActiveTime(props.activeFreeTime)
        setGlobalActiveDay(props.activeIdDay)
        setGlobalActiveMonth(listMonthGenitiveCase[activeMonth])
        toast.success('Сессия добавлена')
        setYouHavePaidSessions(youHavePaidSessions - 1)
    }

    return (
        <>
            <div className='flex flex-col items-center border-t-1 border-t-gray-400 pt-[40px]'>
                <div className='flex gap-x-[40px] mb-[20px]'
                    style={{
                        ...(props.whereToShow === 'scheduleSession' && {
                            flexDirection: 'column',
                            rowGap: '20px'
                        })
                    }}>
                    <div onClick={() => clickTariff('faceToFace')}
                        style={{
                            ...(tariffPsychologist && globalActiveDay === props.activeIdDay &&
                                globalActiveTime === props.activeFreeTime &&
                                listPsychologist[activePsychologist].tariffsWork['faceToFace'] ===
                                listPsychologist[activePsychologist].tariffsWork[tariffPsychologist] ? {
                                background: 'rgba(70, 65, 150, 1)',
                                border: 'none',
                                color: 'white'
                            } : {}),
                            ...(props.activeTariff === 'faceToFace' ? {
                                background: 'rgba(120, 114, 185, 1)',
                                color: 'white'
                            } : {})
                        }}
                        className='text-center border-2 rounded-[10px] border-btn-and-title
                            h-[40px] w-[220px] leading-[40px] px-[30px] text-[18px] text-btn-and-title
                            hover:scale-105 transition-transform duration-300 cursor-pointer'>
                        Очно {listPsychologist[activePsychologist].tariffsWork.faceToFace} ₽
                    </div>
                    <div onClick={() => clickTariff('online')}
                        style={{
                            ...(tariffPsychologist && props.activeTariff && globalActiveDay === props.activeIdDay &&
                                globalActiveTime === props.activeFreeTime &&
                                listPsychologist[activePsychologist].tariffsWork['online'] ===
                                listPsychologist[activePsychologist].tariffsWork[tariffPsychologist] ? {
                                background: 'rgba(70, 65, 150, 1)',
                                border: 'none',
                                color: 'white'
                            } : {}),
                            ...(props.activeTariff === 'online' ? {
                                background: 'rgba(120, 114, 185, 1)',
                                color: 'white'
                            } : {})
                        }}
                        className='text-center border-2 rounded-[10px] border-btn-and-title
                            h-[40px] w-[220px] leading-[40px] px-[30px] text-[18px] text-btn-and-title
                            hover:scale-105 transition-transform duration-300 cursor-pointer'>
                        Онлайн {listPsychologist[activePsychologist].tariffsWork.online} ₽
                    </div>
                </div>
                <div onClick={() => clickTariff('withFamilies')}
                    style={{
                        ...(tariffPsychologist && props.activeTariff && globalActiveDay === props.activeIdDay &&
                            globalActiveTime === props.activeFreeTime &&
                            listPsychologist[activePsychologist].tariffsWork['withFamilies'] ===
                            listPsychologist[activePsychologist].tariffsWork[tariffPsychologist] ? {
                            background: 'rgba(70, 65, 150, 1)',
                            border: 'none',
                            color: 'white'
                        } : {}),
                        ...(props.activeTariff === 'withFamilies' ? {
                            background: 'rgba(120, 114, 185, 1)',
                            color: 'white'
                        } : {})
                    }}
                    className='text-center border-2 rounded-[10px] border-btn-and-title
                            h-[40px] w-[220px] leading-[40px] px-[30px] text-[18px] text-btn-and-title
                            hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    С семьей {listPsychologist[activePsychologist].tariffsWork.withFamilies} ₽
                </div>
            </div>

            {props.whereToShow === 'profile' && props.showBtnChoose &&
                <div onClick={clickChooseTime}
                    className='w-[230px] mx-auto mt-[20px]'>
                    <Btn textBtn="Выбрать" widht={220} />
                </div>
            }
        </>
    )
}
