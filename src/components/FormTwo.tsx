'use client'

import React from 'react'

import Input from './UI/Input'
import useFormTeam from '@/store/formTeam/formTeamStore'

export default function FormTwo() {
    const {
        haveCompletedHigher, setHaveCompletedHigher,
        nameUniversities, setNameUniversities,
        faculty, setFaculty,
        specialization, setSpecialization,
        degree, setDegree,
        startYear, setStartYear,
        graduationYear, setGraduationYear,
        allFieldsFilledTwo, setAllFieldsFilledTwo
    } = useFormTeam()

    React.useEffect(() => {
        if (haveCompletedHigher && nameUniversities && faculty && specialization && degree && startYear && graduationYear) {
            setAllFieldsFilledTwo(true)
        } else setAllFieldsFilledTwo(false)
    }, [haveCompletedHigher, nameUniversities, faculty, specialization, degree, startYear, graduationYear])

    return (
        <div className='w-[620px] mx-auto'
            style={haveCompletedHigher === 'нет' || haveCompletedHigher === '' ? { padding: '100px 0' } : {}}>
            <div className='text-(--color-btn-and-title) text-[20px] font-semibold mb-[30px]'>
                <div className=''>Шаг 2</div>
                <div className=''>Образование</div>
            </div>
            <div className=''>
                <div className='w-[580px] text-(--text) text-[16px] font-medium mb-[10px]'>У вас есть законченное высшее психологическое либо психиатрическое образование?</div>
                <div className='flex justify-between mb-[30px]'>
                    <div style={{
                        ...(haveCompletedHigher == 'да' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } : { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setHaveCompletedHigher('да')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform 
                            duration-300 leading-[50px] text-center border-2 
                            border-(--color-btn-and-title) rounded-2xl text-[18px]'>Да</div>
                    <div style={{
                        ...(haveCompletedHigher == 'нет' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } : { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setHaveCompletedHigher('нет')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform 
                            duration-300 leading-[50px] text-center border-2 
                            border-(--color-btn-and-title) rounded-2xl text-[18px]'>Нет</div>
                    <div style={{
                        ...(haveCompletedHigher == 'Нахожусь в процессе получения ВО' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } : { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setHaveCompletedHigher('Нахожусь в процессе получения ВО')}
                        className='w-[360px] cursor-pointer h-[50px] hover:scale-105 transition-transform 
                            duration-300 leading-[50px] text-center border-2 
                            border-(--color-btn-and-title) rounded-2xl text-[16px]'>Нахожусь в процессе получения ВО</div>
                </div>
            </div>
            {haveCompletedHigher !== 'нет' && haveCompletedHigher !== '' &&
                <div className='mb-[30px] border-l boder-(--color-btn-and-title) pl-[20px] ml-[20px]'>
                    <div className='mb-[20px]'>
                        <div className='text-(--text) text-[16px] font-medium'>Какое у вас высшее образование?</div>
                        <div className='w-[580px] text-(--text) text-[14px] font-light'>Укажите ваше психологическое либо психиатрическое образование. Если вы имеете несколько высших образований, укажите их последовательно.</div>
                    </div>
                    <div className='mb-[30px]'>
                        <div className='text-(--text) text-[16px] font-medium mb-[10px]'>Название ВУЗа (полностью)</div>
                        <Input maxLength={100} onChange={setNameUniversities} value={nameUniversities} error={false}
                            placeholder='' width={580} height={50} oneTypeData='string' />
                    </div>
                    <div className='mb-[30px]'>
                        <div className='text-(--text) text-[16px] font-medium mb-[10px]'>Факультет</div>
                        <Input maxLength={100} onChange={setFaculty} value={faculty} error={false}
                            placeholder='' width={580} height={50} oneTypeData='string' />
                    </div>
                    <div className='mb-[30px]'>
                        <div className='text-(--text) text-[16px] font-medium mb-[10px]'>Специальность</div>
                        <Input maxLength={100} onChange={setSpecialization} value={specialization} error={false}
                            placeholder='' width={580} height={50} oneTypeData='string' />
                    </div>
                    <div className='mb-[30px]'>
                        <div className='text-(--text) text-[16px] font-medium mb-[10px]'>Степень</div>
                        <Input maxLength={100} onChange={setDegree} value={degree} error={false}
                            placeholder='' width={580} height={50} oneTypeData='string' />
                    </div>
                    <div className='flex justify-between'>
                        <div className=''>
                            <div className='text-(--text) text-[16px] font-medium mb-[5px]'>Год начала</div>
                            <Input maxLength={4} onChange={setStartYear} value={startYear} error={false}
                                placeholder='' width={280} height={50} oneTypeData='number' />
                        </div>
                        <div className=''>
                            <div className='text-(--text) text-[16px] font-medium mb-[5px]'>Год окончания</div>
                            <Input maxLength={4} onChange={setGraduationYear} value={graduationYear} error={false}
                                placeholder='' width={280} height={50} oneTypeData='number' />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}