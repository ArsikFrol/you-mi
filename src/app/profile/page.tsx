'use client'

import Profile from "@/components/Profile";

import Calendar from "@/components/UI/Calendar";
import useCalendar from "@/store/calendar/calendarStore";


export default function () {
    const {
        showCalendar, setShowCalendar,
        setActiveMonth,
        monthNow
    } = useCalendar()

    const clickShowCalendar = () => {
        setShowCalendar(false)
        setActiveMonth(monthNow)
    }

    return (
        <div>
            {showCalendar &&
                <div className='w-full h-full bg-[rgba(74,70,117,0.6)] 
                    absolute left-0 top-0 flex items-center z-100'>
                    <Calendar whereToShow="profile" crossCloseBool closeFunction={clickShowCalendar} />
                </div>
            }
            <Profile />
        </div>
    )
}