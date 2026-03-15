'use client'

import React from 'react';

import useFormSelect from '@/store/formSelection/formSelectionStore'
import { Slider } from '@mui/material';
import usePsychologists from '@/store/psychologists/psychologistsStore';
import { TListQuestions } from '@/store/psychologists/types';

export default function FormSelectionOne() {
    const {
        agePsychologist, setAgePsychologist,
        firstAskPsychologist, setFirstAskPsychologist,
        genderPsychologist, setGenderPsychologist,
        workExperiencePsychologist, setWorkExperiencePsychologist,
        allFieldsFilledOne, setAllFieldsFilledOne,
    } = useFormSelect()

    const {
        listQuestions, changeListQuestions,
    } = usePsychologists()

    const clickAge = () => {
        if (agePsychologist === 0) setAgePsychologist(32)
        else setAgePsychologist(0)
    }

    const clickChecked = (idElem: number, index: number) => {
        if (listQuestions[index].checked) {
            changeListQuestions(idElem, false)
        } else {
            changeListQuestions(idElem, true)
        }
    }

    const trueElemFromListQuestions = listQuestions.find((obj: TListQuestions) => obj.checked)

    React.useEffect(() => {
        if (firstAskPsychologist && genderPsychologist && workExperiencePsychologist && trueElemFromListQuestions) {
            setAllFieldsFilledOne(true)
        } else { setAllFieldsFilledOne(false) }
    }, [firstAskPsychologist, genderPsychologist, workExperiencePsychologist, trueElemFromListQuestions])

    return (
        <div className='w-[580px] mx-auto'>
            <div className=''>
                <div className='text-(--text) text-[18px] font-medium'>Что вас беспокоит?</div>
                <div className='text-(--text) text-[14px] font-light mb-[30px]'>Выберите одну или несколько тем, с которыми хотите разобраться в первую очередь. Это поможет алгоритму точнее подобрать для вас психолога.</div>
            </div>
            <div className='flex flex-col gap-y-[20px] mb-[30px]'>
                {
                    listQuestions.map((obj: TListQuestions, index: number) => {
                        return (
                            <div className="select-none hover:scale-102 transition-transform duration-300 flex gap-x-[10px] 
                                items-center" key={index}>
                                <div className="relative">
                                    <input className=" w-[22px] h-[22px]  border-(--color-btn-and-title) border-2 
                                      checked:bg-blue-500  focus:outline-none  cursor-pointer  
                                        rounded-[5px]  appearance-none peer" id={`${obj.id}`} type="checkbox"
                                        onChange={() => clickChecked(obj.id, index)}
                                        checked={obj.checked} />
                                    <svg
                                        className=" absolute top-[11px] left-1/2 -translate-x-1/2 
                                            -translate-y-1/2 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 
                                            pointer-events-none transition-opacity duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <label className='cursor-pointer text-(--text) text-[16px] w-[540px]' htmlFor={`${obj.id}`}>
                                    {obj.text}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Выберите пол психолога</div>
                <div className='w-[300px] border-2 border-(--color-btn-and-title) rounded-2xl flex justify-between'>
                    <div style={{
                        ...(genderPsychologist === 'жен' ? { borderRadius: '12px', background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }}
                        onClick={() => setGenderPsychologist('жен')}
                        className='text-center text-(--color-btn-and-title) cursor-pointer h-[50px] leading-[50px] w-[90px]'>Жен</div>
                    <div style={{
                        ...(genderPsychologist === 'муж' ? { borderRadius: '12px', background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }}
                        onClick={() => setGenderPsychologist('муж')}
                        className='text-center text-(--color-btn-and-title) cursor-pointer h-[50px] leading-[50px] w-[90px]'>Муж</div>
                    <div style={{
                        ...(genderPsychologist === 'не важно' ? { borderRadius: '12px', background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }}
                        onClick={() => setGenderPsychologist('не важно')}
                        className='text-center text-(--color-btn-and-title) cursor-pointer h-[50px] leading-[50px] w-[120px]'>Не важно</div>
                </div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Укажите возраст психолога</div>
                <div className='mt-[40px]'
                    style={{
                        ...(agePsychologist === 0 ? { display: 'none' } : {})
                    }}>
                    <Slider
                        value={agePsychologist}
                        onChange={(_, newValue) => setAgePsychologist(newValue)}
                        min={20}
                        max={100}
                        step={1}
                        valueLabelDisplay="on"
                    />
                </div>
                <div onClick={clickAge}
                    style={{
                        ...(agePsychologist === 0 ? {
                            background: 'rgba(120, 114, 185, 1)',
                            color: 'white'
                        } : {})
                    }}
                    className='hover:scale-105 transition-transform duration-300 cursor-pointer w-[140px] text-center h-[50px] leading-[50px] text-(--color-btn-and-title) 
                        text-[16px] rounded-2xl border-2 border-(--color-btn-and-title)'>Не важно</div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Вы впервые обращаетесь к психологу?</div>
                <div className='flex justify-between mb-[30px] w-[200px]'>
                    <div style={{
                        ...(firstAskPsychologist == 'да' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } :
                            { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setFirstAskPsychologist('да')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform duration-300 
                                leading-[50px] text-center border-2 
                                border-(--color-btn-and-title) rounded-2xl'>Да</div>
                    <div style={{
                        ...(firstAskPsychologist == 'нет' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } :
                            { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setFirstAskPsychologist('нет')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform duration-300 
                                leading-[50px] text-center border-2 
                                border-(--color-btn-and-title) rounded-2xl'>Нет</div>
                </div>
            </div>
            <div className=''>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Важен ли опыт работы психолога с ЛГБТК+?</div>
                <div className='flex justify-between mb-[30px] w-[200px]'>
                    <div style={{
                        ...(workExperiencePsychologist == 'да' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setWorkExperiencePsychologist('да')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform duration-300 
                                leading-[50px] text-center border-2 
                                border-(--color-btn-and-title) rounded-2xl'>Да</div>
                    <div style={{
                        ...(workExperiencePsychologist == 'нет' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : { color: 'rgba(120, 114, 185, 1)' })
                    }} onClick={() => setWorkExperiencePsychologist('нет')}
                        className='w-[90px] cursor-pointer h-[50px] hover:scale-105 transition-transform duration-300 
                                leading-[50px] text-center border-2 
                                border-(--color-btn-and-title) rounded-2xl'>Нет</div>
                </div>
            </div>
        </div>
    )
}