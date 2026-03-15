import Image from 'next/image'

import rightActive from '../../public/popularCategories/rightActive.png'
import rightNotActive from '../../public/popularCategories/rightNotActive.png'
import leftNotActive from '../../public/popularCategories/leftNotActive.png'
import leftActive from '../../public/popularCategories/leftActive.png'
import useCalendar, { listMonthGenitiveCase } from '@/store/calendar/calendarStore'

type Props = {
    plusCount: number,
    setPlusCount: React.Dispatch<React.SetStateAction<number>>
}

export default function SliderWeeks(props: Props) {
    const {
        monthNow
    } = useCalendar()

    const clickLeft = () => {
        if (props.plusCount !== 0) props.setPlusCount(props.plusCount - 7)
    }

    const clickRigth = () => {
        if (props.plusCount !== 28) props.setPlusCount(props.plusCount + 7)
    }

    return (
        <div className='flex justify-between'>
            <div onClick={clickLeft}
                className={`group w-[50px] h-[50px] select-none ${props.plusCount !== 0 ? 'cursor-pointer' : ''}`}>
                <Image src={props.plusCount !== 0 ? leftActive : leftNotActive} alt='' width={30} height={30} draggable='false'
                    className={props.plusCount !== 0 ?
                        `group-hover:-translate-x-[10px] transition-transform duration-300`
                        : ''
                    } />
            </div>
            <div className='text-[18px] font-semibold text-(--color-btn-and-title)'>
                {1 + props.plusCount}-{7 + props.plusCount} {listMonthGenitiveCase[monthNow]}
            </div>
            <div onClick={clickRigth}
                className={`group w-[50px] h-[50px] select-none ${props.plusCount !== 28 ? 'cursor-pointer' : ''}`}>
                <Image src={props.plusCount !== 28 ? rightActive : rightNotActive} alt='' width={30} height={30} draggable='false'
                    className={props.plusCount !== 28 ?
                        `group-hover:translate-x-[10px] transition-transform duration-300`
                        : ''
                    } />
            </div>
        </div>
    )
}