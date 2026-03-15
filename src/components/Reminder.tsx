import React from "react"

type Props = {
    showReminder: boolean,
    setShowReminder: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Reminder(props: Props) {

    return (
        <>
            {props.showReminder &&
                <div className='flex flex-col gap-y-[20px] w-[480px]'>
                    <div className='flex items-center gap-x-[10px]'>
                        <div className='rounded-2xl w-[68.6px] h-[44.1px] bg-[rgba(150,145,210,1)]'></div>
                        <div className='text-[20px]'>Сегодняшняя дата</div>
                    </div>
                    <div className='flex items-center gap-x-[10px]'>
                        <div className='rounded-2xl w-[68.6px] h-[44.1px] bg-[rgba(120,114,185,1)]'></div>
                        <div className='text-[20px]'>Выбранная дата</div>
                    </div>
                    <div className='flex items-center gap-x-[10px]'>
                        <div className='rounded-2xl w-[68.6px] h-[44.1px] bg-[rgba(70,65,150,1)]'></div>
                        <div className='text-[20px]'>Забронированная дата или время</div>
                    </div>
                </div>
            }
            {!props.showReminder &&
                <div className='text-[16px] text-(--text)opacity-50 w-[150px] mb-[10px]
                    hover:scale-105 transition-transform duration-300 cursor-pointer'
                    onClick={() => props.setShowReminder(true)}>
                    Показать памятку
                </div>
            }
        </>
    )
}