'use client'

import React from 'react'

import LeftSettings from './LeftSettings'
import PersonalDataSettings from './PersonalDataSettings'
import AppearanceSettings from './AppearanceSettings'

export type settingsTitleT = 'personalData' | 'webSite' | 'safety'

type Props = {
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Settings(props: Props) {

    const [activeSettings, setActiveSettings] = React.useState<settingsTitleT>('personalData')

    return (
        <div className='w-full h-full bg-[rgba(74,70,117,0.6)]
                    left-0 top-0 flex items-center z-100 fixed'>
            <div className='relative w-[1000px] h-[800px] mx-auto bg-white rounded-2xl py-[50px]
                flex gap-x-[20px] px-[30px]'>
                <LeftSettings setActiveSettings={setActiveSettings} activeSettings={activeSettings} />
                <div>
                    {activeSettings === 'personalData' ?
                        <PersonalDataSettings setShowSettings={props.setShowSettings}/> :
                        activeSettings === 'webSite' ?
                            <AppearanceSettings setShowSettings={props.setShowSettings} /> :
                        <div className=''>sdf</div>
                    }
                </div>
            </div>
        </div>
    )
}
