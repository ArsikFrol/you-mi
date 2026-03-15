import React from "react"
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import WarningWindow from "./UI/WarningWindow"
import Btn from "./UI/Btn"
import CrossClose from "./UI/CrossClose"

type Props = {
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AppearanceSettings(props: Props) {


    const { theme, setTheme } = useTheme()
    const [showWarning, setShowWarning] = React.useState<boolean>(false)

    const clickTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const clickLang = () => {

    }

    return (
        <>
            <>
                <div className='text-(--color-btn-and-title) font-extrabold text-[44px] mb-[50px]'>Внешний вид</div>
                <div className='w-[600px] mx-auto gap-y-[40px] grid grid-cols-2 h-[500px] overflow-y-scroll'>
                    <div className=''>
                        <div className='text-[20px] mb-[10px]'>Язык на странице</div>
                        <div className='flex items-center gap-x-[10px] w-[200px] mx-auto'>
                            <div className='bg-[rgba(74,70,117,0.2)] rounded-2xl w-[150px] text-center
                                text-[18px] leading-[40px]'>Рус</div>
                            <div className="hover:scale-110 transition-transform duration-300
                                cursor-pointer w-[40px] h-[40px] p-[5px]"
                                onClick={clickLang}>
                                <ChevronDown size={30} />
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-[20px] mb-[10px]'>Тема страницы</div>
                        <div className='flex items-center gap-x-[10px] w-[200px] mx-auto'>
                            <div className='bg-[rgba(74,70,117,0.2)] rounded-2xl w-[150px] text-center
                                text-[18px] leading-[40px]'>{theme === 'light' ? 'Светлая' : 'Темная'}</div>
                            <div className="hover:scale-110 transition-transform duration-300
                                cursor-pointer w-[40px] h-[40px] py-[5px]"
                                onClick={clickTheme}>
                                {theme === 'light' ?
                                    <Moon size={30}/> : <Sun size={30}/>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className='absolute right-[20px] top-[20px]'>
                    <CrossClose closeFunction={props.setShowSettings} />
                </div>
                <div className='absolute bottom-[40px] left-[45%]' onClick={() => {}}>
                    <Btn textBtn='Сохранить' widht={250} />
                </div>
            </>
            {showWarning &&
                <WarningWindow leftClick={() => {  }} rightClick={setShowWarning}
                    setShowWarning={setShowWarning} showWarning={showWarning}
                    text='Уверены что хотите сохранить изменения?' />
            }
        </>
    )
}
