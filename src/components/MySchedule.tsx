import ScheduleTable from "./ScheduleTable";

export default function MySchedule() {
    return (
        <>
            <div className='text-(--text) text-[30px] font-semibold w-[290px] mx-auto mb-[50px] mt-[50px]'>
                Ваше расписание
            </div>
            <ScheduleTable />
        </>
    )
}