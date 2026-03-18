'use client'

import Image from 'next/image'
import React from 'react'

import Container from './UI/Container'
import Title from './UI/Title'
import Input from './UI/Input'

import arrowFormOne from '../../public/arrowFormOne.png'

import useFormTeam from '@/store/formTeam/formTeamStore'
import useProfile from '@/store/profile/profileStore'

export default function FormOne() {
    const {
        dayBirth, setDayBirth,
        monthBirth, setMonthBirth,
        yearBirth, setYearBirth,
        citizenship, setCitizenship,
        country, setCountry,
        numberPhone, setNumberPhone,
        email, setEmail,
        socialNetwork, setSocialNetwork,
        allFieldsFilledOne, setAllFieldsFilledOne,
    } = useFormTeam()

    const {
        gender, setGender,
        FIO, setFIO
    } = useProfile()

    React.useEffect(() => {
        if (FIO && gender && dayBirth && monthBirth && yearBirth && citizenship && country && numberPhone && email && socialNetwork) {
            setAllFieldsFilledOne(true)
        } else setAllFieldsFilledOne(false)
    }, [FIO, gender, dayBirth, monthBirth, yearBirth, citizenship, country, numberPhone, email, socialNetwork])

    return (
        <Container paddingNoneY>
            <>
                <div className='relative w-[780px] mx-auto'>
                    <Title text='Станьте частью команды YouMi' />
                    <Image className='absolute right-[35px] bottom-0' src={arrowFormOne} alt='' width={350}
                        height={11} draggable='false' />
                </div>
                <div className='w-[740px] text-center mx-auto text-text text-[18px] font-medium'>
                    <div>Анкета включает в себя <span className='font-bold text-btn-and-title'>5 этапов.</span></div>
                    Пожалуйста, ответьте на вопросы и приготовьте заранее сканы ваших дипломов и сертификатов, они понадобятся вам в ходе заполнения.
                </div>
                <div className='flex flex-col gap-y-[20px] w-[580px] mx-auto mt-[60px]'>
                    <div className='text-btn-and-title font-semibold text-[20px]'>
                        <div className=''>Шаг 1</div>
                        <div className=''>Личные данные</div>
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>ФИО</div>
                        <Input oneTypeData='string' height={50} maxLength={100}
                            onChange={setFIO} value={FIO} placeholder='Иванова Анна Дмитриевна' width={580} />
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Пол</div>
                        <div className='flex text-text text-[16px] border-2
                            border-btn-and-title rounded-2xl h-[50px] w-[180px]'>
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
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Дата рождения</div>
                        <div className='flex gap-x-[15px]'>
                            <Input oneTypeData='number' height={50} maxLength={2}
                                onChange={setDayBirth} value={dayBirth} placeholder='01' width={70} textCenter />
                            <Input oneTypeData='number' height={50} maxLength={2}
                                onChange={setMonthBirth} value={monthBirth} placeholder='01' width={70} textCenter />
                            <Input oneTypeData='number' height={50} maxLength={4}
                                onChange={setYearBirth} value={yearBirth} placeholder='1991' width={100} textCenter />
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Гражданство</div>
                        <Input oneTypeData='string' height={50}
                            maxLength={100} onChange={setCitizenship} value={citizenship} placeholder='' width={580} />
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Страна и город проживания</div>
                        <Input oneTypeData='string' height={50}
                            maxLength={100} onChange={setCountry} value={country} placeholder='' width={580} />
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Номер телефона для связи</div>
                        <Input height={50} oneTypeData='number' maxLength={100}
                            onChange={setNumberPhone} value={numberPhone} placeholder='+7 (___)' width={580} />
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Электронная почта</div>
                        <Input height={50} maxLength={100}
                            onChange={setEmail} value={email} placeholder='' width={580} />
                    </div>
                    <div className=''>
                        <div className='text-text text-[16px] font-medium mb-[10px]'>Социальные сети</div>
                        <textarea value={socialNetwork} onChange={(e) => setSocialNetwork(e.target.value)} rows={1} className='p-[10px] w-[580px] h-[100px]
                            border-2 border-btn-and-title outline-none rounded-2xl'>
                        </textarea>
                    </div>
                </div>
                <div className='w-[580px] mx-auto'>
                    <div className='w-[480px] text-text text-[14px] font-light'>Страницы в социальных сетях, личный сайт, блог, упоминание на сайтах конференций или профессиональных ассоциаций.</div>
                </div>
            </>
        </Container>
    )
}
