'use client'

import React from "react"
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import toast from "react-hot-toast"

import WarningWindow from "./UI/WarningWindow"
import Btn from "./UI/Btn"
import CrossClose from "./UI/CrossClose"
import useProfile from "@/store/profile/profileStore"

import { TLanguage } from "@/store/profile/types"

type TLang = {
    id: number,
    title: string,
    type: TLanguage
}

type Props = {
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const listLang: Array<TLang> = [
    {id: 1, title: 'Рус.', type: 'ru'},
    {id: 2, title: 'Англ.', type: 'en'}
]

export default function AppearanceSettings(props: Props) {

    const {
        language, setLanguage
    } = useProfile()

    const { theme, setTheme } = useTheme()

    const [showWarning, setShowWarning] = React.useState<boolean>(false)
    const [showLang, setShowLang] = React.useState<boolean>(false)
    const [activeLang, setActiveLang] = React.useState<TLanguage>(language)

    console.log(language, activeLang)

    const clickTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const clickLang = (type: TLanguage) => {
        setActiveLang(type)
        setShowLang(false)
    }

    const clickSaveChanges = () => {
        setShowWarning(true)
    }

    const clickWarningLeft = () => {
        setLanguage(activeLang)
        props.setShowSettings(false)
        toast.success('Настройки сохранены!')
    }

    return (
        <>
            <>
                <div className='text-(--color-btn-and-title) font-extrabold text-[44px] mb-[50px] text-center'>Внешний вид</div>
                <div className='w-[600px] mx-auto gap-y-[40px] grid grid-cols-2 h-[500px] overflow-y-scroll'>
                    <div className=''>
                        <div className='text-[20px] mb-[10px] text-center'>Язык на странице</div>
                        <div className='flex items-center gap-x-[10px] w-[200px] mx-auto relative'>
                            <div className='bg-[rgba(74,70,117,0.2)] rounded-2xl w-[150px] text-center
                                text-[18px] leading-[40px]'>{activeLang === 'ru' ? 'Рус.' : 'Англ.'}</div>
                            <div className="hover:scale-110 transition-transform duration-300
                                cursor-pointer w-[40px] h-[40px] p-[5px]"
                                onClick={() => setShowLang(!showLang)}>
                                <ChevronDown size={30} style={showLang ? { rotate: '180deg' } : {}}/>
                            </div>
                            {showLang &&
                                <div className='absolute bg-white shadow rounded-2xl right-0 top-[50px] py-[10px] px-[10px]'>
                                    {
                                        listLang.map((obj, index: number) => {
                                            return(
                                                <div className={`cursor-pointer text-(--text) text-center
                                                    text-[18px] font-medium h-[40px] w-[100px] leading-[40px]
                                                    hover:scale-105 transition-transform duration-300 group
                                                    ${activeLang === obj.type ?
                                                        'bg-[rgba(74,70,117,0.2)] rounded-2xl text-center font-medium' : ''}
                                                    `} key={index}
                                                    onClick={() => clickLang(obj.type)}>
                                                        {obj.title}
                                                </div>
                                            )
                                    })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-[20px] mb-[10px] text-center'>Тема страницы</div>
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
                <div className='absolute bottom-[40px] left-[45%]' onClick={clickSaveChanges}>
                    <Btn textBtn='Сохранить' widht={250} />
                </div>
            </>
            {showWarning &&
                <WarningWindow leftClick={clickWarningLeft} rightClick={setShowWarning}
                    setShowWarning={setShowWarning} showWarning={showWarning}
                    text='Уверены что хотите сохранить изменения?' />
            }
        </>
    )
}
