'use client'

import useCalendar from "@/store/calendar/calendarStore";
import usePsychologists from "@/store/psychologists/psychologistsStore";
import { getDay } from "date-fns";
import Calendar from "./UI/Calendar";
import useProfilePsychologist from "@/store/profilePsychologist/profilePsychologistStore";

type Props = {
    setActiveClient: React.Dispatch<React.SetStateAction<number>>,
    activeClient: number
}

export default function CalendarScheduleSession(props: Props) {

    const {
        monthNow,
        yearNow,
        dayNow,
        globalActiveDay
    } = useCalendar()

    const {
        listPsychologist,
        activePsychologist,
        whatMonthFreeTimeUse
    } = usePsychologists()

    const {
        listFreeTime,

    } = useProfilePsychologist()

    return (
        <div className=''
            style={{
                ...(props.activeClient === 0 && {
                    display: 'none'
                })
            }}>
            <Calendar closeFunction={() => { }} whereToShow="scheduleSession" crossCloseBool />
        </div>
    )
}