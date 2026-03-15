import { settingsTitleT } from "./Settings"

type titleSettingsT = {
    id: number,
    title: string,
    type: settingsTitleT
}

type Props = {
    setActiveSettings: React.Dispatch<React.SetStateAction<settingsTitleT>>,
    activeSettings :settingsTitleT
}

const listTitleSettings: Array<titleSettingsT> = [
    {id: 1, title: 'Личные данные', type: 'personalData'},
    {id: 2, title: 'Внешний вид', type: 'webSite'},
    {id: 2, title: 'Безопасность', type: 'safety'},
]

export default function LeftSettings(props: Props) {
    const clickTitle = (type: settingsTitleT) => {
        props.setActiveSettings(type)
    }

    return (
        <div className='flex flex-col gap-y-[10px] w-[230px] pt-[15px]'>
            {
                listTitleSettings.map((obj, index: number) => {
                    return(
                        <div className={`text-[18px] text-(--text) leading-[40px] w-[200px]
                            hover:scale-105 transition-transform duration-300 cursor-pointer
                            ${props.activeSettings === obj.type ? 'bg-[rgba(74,70,117,0.2)] rounded-2xl text-center font-medium' : ''}`}
                            key={index}
                            onClick={() => clickTitle(obj.type)}>
                            {obj.title}
                        </div>
                    )
                })
            }
        </div>
    )
}
