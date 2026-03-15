'use client'

import React from "react"

import useFormSelect from "@/store/formSelection/formSelectionStore";
import Input from "./UI/Input";

export default function FormSelectionTwo() {
    const {
        dayBirth, setDayBirth,
        monthBirth, setMonthBirth,
        yearBirth, setYearBirth,
        numberPhone, setNumberPhone,
        email, setEmail,
        setAllFieldsFilledTwo,
        name, setName
    } = useFormSelect()

    React.useEffect(() => {
        if (name && dayBirth && monthBirth && yearBirth && numberPhone && email) setAllFieldsFilledTwo(true)
    }, [name, dayBirth, monthBirth, yearBirth, numberPhone, email])

    return (
        <div className='w-[580px] mx-auto mb-[30px]'>
            <div className=''>
                <div className='text-(--text) text-[18px] font-medium'>Расскажите о себе</div>
                <div className='text-(--text) text-[14px] font-light mb-[30px]'>Данные нужны для создания личного кабинета</div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Имя</div>
                <Input height={50} maxLength={100} placeholder="" width={480} value={name} onChange={setName} />
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Дата рождения</div>
                <div className='flex gap-x-[20px]'>
                    <Input oneTypeData="number" height={50} maxLength={2} value={dayBirth}
                        onChange={setDayBirth} placeholder="01" width={70} textCenter />
                    <Input oneTypeData="number" height={50} maxLength={2} value={monthBirth}
                        onChange={setMonthBirth} placeholder="01" width={70} textCenter />
                    <Input oneTypeData="number" height={50} maxLength={4} value={yearBirth}
                        onChange={setYearBirth} placeholder="1991" width={100} textCenter />
                </div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Номер телефона</div>
                <Input oneTypeData="numberPhone" height={50} maxLength={15} value={numberPhone}
                    onChange={setNumberPhone} placeholder="+7 ( ___ )" width={480} />
            </div>
            <div className=''>
                <div className='text-(--text) text-[18px] font-medium mb-[10px]'>Электронная почта</div>
                <Input height={50} maxLength={100} value={email} onChange={setEmail}
                    placeholder="" width={480} oneTypeData="email" />
            </div>
        </div>
    )
}