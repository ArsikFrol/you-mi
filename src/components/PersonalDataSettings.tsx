import React from "react";

import Btn from "./UI/Btn";
import CrossClose from "./UI/CrossClose";
import Input from "./UI/Input";

import useProfile from "@/store/profile/profileStore";
import WarningWindow from "./UI/WarningWindow";

type Props = {
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PersonalDataSettings(props: Props) {
    const {
        FIO, setFIO,
        numberPhone, setNumberPhone,
        gender, setGender,
    } = useProfile()

    const [nameUse, setNameUse] = React.useState<string>(FIO.split(' ')[0])
    const [surnameUse, setSurnameUse] = React.useState<string>(FIO.split(' ')[1])
    const [numberUse, setNumberUse] = React.useState<string>(numberPhone)

    const [showWarning, setShowWarning] = React.useState<boolean>(false)

    const clickSave = () => {
        if (nameUse && surnameUse && nameUse !== FIO.split(' ')[0] &&
                surnameUse !== FIO.split(' ')[1]) {
            setShowWarning(true)
        }
    }

    const clickSaveStore = () => {
        setFIO(nameUse + ' ' + surnameUse)
        setNumberPhone(numberUse)
        props.setShowSettings(false)

        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY.replace('-', '')) || 0);
        }
    }

    return (
        <>
            <>
                <div className='text-(--color-btn-and-title) font-extrabold text-[44px] mb-[50px] text-center'>Личные данные</div>
                <div className='w-[600px] mx-auto flex flex-col gap-y-[40px] h-[500px] overflow-y-scroll'>
                    <div className='text-left'>
                        <div className='text-[20px] mb-[10px]'>Имя</div>
                        <Input maxLength={100} onChange={setNameUse}
                            placeholder='Иван' value={nameUse} width={600} height={50} />
                    </div>
                    <div className='text-left'>
                        <div className='text-[20px] mb-[10px]'>Фамилия</div>
                        <Input maxLength={100} onChange={setSurnameUse}
                            placeholder='Иванов' value={surnameUse} width={600} height={50} />
                    </div>
                    <div className='text-left'>
                        <div className='text-[20px] mb-[10px]'>Номер телефона</div>
                        <Input maxLength={100} onChange={setNumberUse} oneTypeData='numberPhone'
                            placeholder="8-___-___-__-__ " value={numberUse} width={600} height={50} error={false} />
                    </div>
                    <div className=''>
                        <div className='text-(--text) text-[16px] font-medium mb-[10px] text-left'>Пол</div>
                        <div className='flex text-(--text) text-[16px] border-2
                            border-(--color-btn-and-title) rounded-2xl h-[50px] w-[180px]'>
                            <div onClick={() => setGender('муж')} style={{
                                ...(gender === 'муж' ? {
                                    fontWeight: '600',
                                    color: 'white',
                                    background: 'rgba(120, 114, 185, 1)',
                                    borderRadius: '10px'
                                } : {
                                    fontWeight: '400'
                                })
                            }} className='w-[90px] leading-[50px] text-center cursor-pointer'>Муж</div>
                            <div onClick={() => setGender('жен')} style={{
                                ...(gender === 'жен' ? {
                                    fontWeight: '600',
                                    color: 'white',
                                    background: 'rgba(120, 114, 185, 1)',
                                    borderRadius: '10px'
                                } : {
                                    fontWeight: '400'
                                })
                            }} className='w-[90px] leading-[50px] text-center cursor-pointer'>Жен</div>
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
                <WarningWindow leftClick={clickSaveStore} rightClick={setShowWarning}
                    setShowWarning={setShowWarning} showWarning={showWarning}
                    text='Уверены что хотите сохранить изменения?' />
            }
        </>
    )
}
