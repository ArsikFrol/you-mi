'use client'

import React from "react";

import Input from "./UI/Input";
import useFormTeam from "@/store/formTeam/formTeamStore";

export default function FormFour() {
    const {
        howManyYearsConsulting, setHowManyYearsConsulting,
        doYouHaveExperienceWorking, setDoYouHaveExperienceWorking,
        ifYesHowManyYears, setIfYesHowManyYears,
        howManyClients, setHowManyClients,
        howLongYourClients, setHowLongYourClients,
        areYouPersonalTherapy, setAreYouPersonalTherapy,
        howManyHoursPersonalTherapy, setHowManyHoursPersonalTherapy,
        whatApproachPersonalTherapy, setWhatApproachPersonalTherapy,
        youUndergoingSupervision, setYouUndergoingSupervision,
        howManyHoursYouUndergoingSupervision, setHowManyHoursYouUndergoingSupervision,
        whatApproachSupervision, setWhatApproachSupervision,
        allFieldsFilledFour, setAllFieldsFilledFour
    } = useFormTeam()

    setAllFieldsFilledFour(true)

    return (
        <div className='w-[620px] mx-auto text'>
            <div className='text-btn-and-title text-[20px] font-semibold mb-[30px]'>
                <div className=''>Шаг 4</div>
                <div className=''>Профессиональные данные</div>
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium'>Сколько лет вы консультируете в рамках частной практики или работы в компании?</div>
                <div className='text-[14px] font-light mb-[10px]'>Учитывается только опыт консультирования за оплату и не в рамках учебной программы.</div>
                <Input height={50} error={false} oneTypeData="number" maxLength={100}
                    onChange={setHowManyYearsConsulting} value={howManyYearsConsulting} placeholder="" width={180} />
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium mb-[10px]'>Есть ли у вас опыт работы онлайн?</div>
                <div className='flex gap-x-[20px]'>
                    <div style={{
                        ...(doYouHaveExperienceWorking == 'да' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => { setDoYouHaveExperienceWorking('да') }}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Да</div>
                    <div style={{
                        ...(doYouHaveExperienceWorking == 'нет' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => { setDoYouHaveExperienceWorking('нет') }}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Нет</div>
                </div>
            </div>
            {doYouHaveExperienceWorking == 'да' &&
                <div className='mb-[30px] border-l boder-btn-and-title pl-[20px] ml-[20px]'>
                    <div className='text-[16px] font-medium mb-[10px]'>Если да, то сколько лет из общего опыта?</div>
                    <Input height={50} error={false} oneTypeData="number" maxLength={100}
                        onChange={setIfYesHowManyYears} value={ifYesHowManyYears} placeholder="" width={180} />
                </div>
            }
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium'>Сколько клиентов в настоящий момент у вас в терапии?</div>
                <div className='text-[14px] font-light mb-[10px]'>Укажите количество клиентов которые регулярно работают с вами на текущий момент.</div>
                <Input height={50} error={false} maxLength={100} oneTypeData="number"
                    onChange={setHowManyClients} value={howManyClients} placeholder="" width={180} />
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium'>Сколько времени заняла самая длительная терапия среди ваших клиентов?</div>
                <div className='text-[14px] font-light mb-[10px]'>Укажите количество часов.</div>
                <Input height={50} error={false} maxLength={100} oneTypeData="number"
                    onChange={setHowLongYourClients} value={howLongYourClients} placeholder="" width={180} />
            </div>
            <div className='mb-[30px]'>
                <div className='text-[16px] font-medium mb-[10px]'>Проходите ли вы личную терапию?</div>
                <div className='flex gap-x-[20px] w-[700px]'>
                    <div style={{
                        ...(areYouPersonalTherapy == 'да' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setAreYouPersonalTherapy('да')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Да</div>
                    <div style={{
                        ...(areYouPersonalTherapy == 'нет' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setAreYouPersonalTherapy('нет')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Нет</div>
                    <div style={{
                        ...(areYouPersonalTherapy == 'Планирую начать' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setAreYouPersonalTherapy('Планирую начать')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[210px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>
                        Планирую начать
                    </div>
                    <div style={{
                        ...(areYouPersonalTherapy == 'Не проходил и не планирую' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setAreYouPersonalTherapy('Не проходил и не планирую')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[300px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>
                        Не проходил и не планирую
                    </div>
                </div>
            </div>
            {areYouPersonalTherapy == 'да' &&
                <div className="border-l boder-btn-and-title pl-[20px] ml-[50px]">
                    <div className='mb-[30px]'>
                        <div className='w-[580px] text-text text-[16px] font-medium'>Сколько часов личной терапии вы прошли?</div>
                        <div className='text-[14px] font-light mb-[10px]'>Укажите количество часов, если вы ответили "да" на прошлый вопрос.</div>
                        <Input height={50} error={false} maxLength={100} oneTypeData="number"
                            onChange={setHowManyHoursPersonalTherapy} value={howManyHoursPersonalTherapy} placeholder="" width={180} />
                    </div>
                    <div className='mb-[30px]'>
                        <div className='w-[580px] text-text text-[16px] font-medium mb-[10px]'>В каком подходе работал ваш терапевт?</div>
                        <Input height={50} error={false} maxLength={100}
                            onChange={setWhatApproachPersonalTherapy} value={whatApproachPersonalTherapy} placeholder="" width={380} />
                    </div>
                </div>
            }
            <div className='mb-[30px]'>
                <div className='w-[580px] text-text text-[16px] font-medium mb-[10px]'>Проходите ли вы супервизию?</div>
                <div className='flex gap-x-[20px] w-[700px]'>
                    <div style={{
                        ...(youUndergoingSupervision == 'да' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setYouUndergoingSupervision('да')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Да</div>
                    <div style={{
                        ...(youUndergoingSupervision == 'нет' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setYouUndergoingSupervision('нет')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[90px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>Нет</div>
                    <div style={{
                        ...(youUndergoingSupervision == 'Планирую начать' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setYouUndergoingSupervision('Планирую начать')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[210px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>
                        Планирую начать
                    </div>
                    <div style={{
                        ...(youUndergoingSupervision == 'Не проходил и не планирую' ?
                            { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                    }} onClick={() => setYouUndergoingSupervision('Не проходил и не планирую')}
                        className='cursor-pointer hover:scale-105 transition-transform duration-300
                            w-[300px] text-center h-[50px] leading-[50px] border-2 border-btn-and-title rounded-2xl'>
                        Не проходил и не планирую
                    </div>
                </div>
            </div>
            {youUndergoingSupervision == 'да' &&
                <div className='border-l boder-btn-and-title pl-[20px] ml-[50px]'>
                    <div className='mb-[30px]'>
                        <div className='w-[580px] text-text text-[16px] font-medium'>Сколько часов супервизии вы прошли?</div>
                        <div className='text-[14px] font-light mb-[10px]'>
                            Укажите количество часов, если вы ответили "да" на прошлый вопрос.
                        </div>
                        <Input height={50} error={false} maxLength={100} oneTypeData="number"
                            onChange={setHowManyHoursYouUndergoingSupervision} value={howManyHoursYouUndergoingSupervision}
                            placeholder="" width={180} />
                    </div>
                    <div className=''>
                        <div className='w-[580px] text-text text-[16px] font-medium mb-[10px]'>В каком подходе работал ваш супервизор?</div>
                        <Input height={50} error={false} maxLength={100}
                            onChange={setWhatApproachSupervision} value={whatApproachSupervision} placeholder="" width={380} />
                    </div>
                </div>
            }
        </div>
    )
}
