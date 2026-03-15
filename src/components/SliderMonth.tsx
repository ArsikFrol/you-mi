import Image from "next/image";

import useCalendar, { listMonthName } from "@/store/calendar/calendarStore";

import rightActive from '../../public/formSelectionTwo/rightActive.png'
import leftActive from '../../public/formSelectionTwo/leftActive.png'
import { TWhereToShow } from "./UI/Calendar";
import { timeType } from "@/store/calendar/types";
import { ITariffsWorkUse } from "@/store/tariffs/types";

type Props = {
    setActiveIdDay: React.Dispatch<React.SetStateAction<number>>,
    setShowBtnChoose: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveFreeTime: React.Dispatch<React.SetStateAction<timeType>>,
    setActiveTariff: React.Dispatch<React.SetStateAction<ITariffsWorkUse>>,
    setShowTariffs: React.Dispatch<React.SetStateAction<boolean>>,
    setShowFreeTimePsychologist: React.Dispatch<React.SetStateAction<boolean>>,
    whereToShow: TWhereToShow,
}

export default function SliderMonth(props: Props) {
    const {
        activeMonth, setActiveMonth,
        monthNow
    } = useCalendar()

    const clickLeft = () => {
        if (activeMonth > monthNow) {
            setActiveMonth(activeMonth - 1)
            props.setActiveIdDay(0)
            props.setActiveFreeTime('')
            props.setActiveTariff('')
            props.setShowTariffs(false)
            props.setShowFreeTimePsychologist(false)
            props.setShowBtnChoose(false)
        }
    }

    const clickRight = () => {
        if (activeMonth < monthNow + 1) {
            setActiveMonth(activeMonth + 1)
            props.setActiveIdDay(0)
            props.setActiveFreeTime('')
            props.setActiveTariff('')
            props.setShowTariffs(false)
            props.setShowFreeTimePsychologist(false)
            props.setShowBtnChoose(false)
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-[40px] w-[460px] mx-auto'>
                <div style={{
                    ...(props.whereToShow === 'formSelectionPsychologist' ? { display: 'none' } : {}),
                    ...(activeMonth === 1 ? { opacity: 0.3, pointerEvents: 'none' } : {})
                }}
                    onClick={clickLeft}
                    className='w-[30px] h-[27px] group cursor-pointer'>
                    <Image className="block mx-auto py-[5px] group-hover:scale-105 
                                            group-hover:-translate-x-[5px] transition-transform duration-300"
                        src={leftActive} alt='' width={8} height={16} draggable='false' />
                </div>
                <div style={props.whereToShow === 'formSelectionPsychologist' ? { width: '460px' } : {}}
                    className='w-[320px] text-(--color-btn-and-title) text-[20px] font-medium text-center'>
                    {listMonthName[activeMonth]}
                </div>
                <div style={{
                    ...(props.whereToShow === 'formSelectionPsychologist' ? { display: 'none' } : {}),
                    ...(activeMonth === 2 ? { opacity: 0.3, pointerEvents: 'none' } : {})
                }}
                    onClick={clickRight}
                    className='w-[30px] h-[27px] group cursor-pointer'>
                    <Image className="block mx-auto py-[5px] group-hover:scale-105 
                                            group-hover:translate-x-[5px] transition-transform duration-300"
                        src={rightActive} alt='' width={8} height={16} draggable='false' />
                </div>
            </div>
        </div>
    )
}