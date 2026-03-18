
import usePsychologists from '@/store/psychologists/psychologistsStore'
import { TActiveAcquaint } from './SliderPsychologist'
import Btn from './UI/Btn'

import Container from './UI/Container'

import useFormSelect from '@/store/formSelection/formSelectionStore'

type Props = {
    setActiveAcquaint: React.Dispatch<React.SetStateAction<TActiveAcquaint>>,
    activeAcquaint: TActiveAcquaint
}

export default function Acquaint(props: Props) {

    const {
        listPsychologist,
        activePsychologist
    } = usePsychologists()

    return (
        <div className='mt-[100px]'>
            <Container purple rounded >
                <div className='px-[50px]'>
                    <div className='grid grid-cols-4 text-center text-[18px] text-textfont-medium
                                            justify-between mb-[50px]'>
                        <div onClick={() => props.setActiveAcquaint('aboutMe')}
                            style={{
                                ...(props.activeAcquaint === 'aboutMe' ? {
                                    borderRadius: '16px',
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white'
                                } : {})
                            }}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer
                                                    h-[50px] leading-[50px]'>О психологе</div>
                        <div onClick={() => props.setActiveAcquaint('education')}
                            style={{
                                ...(props.activeAcquaint === 'education' ? {
                                    borderRadius: '16px',
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white'
                                } : {})
                            }}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer
                                                    h-[50px] leading-[50px]'>Образование</div>
                        <div onClick={() => props.setActiveAcquaint('approachesToWork')}
                            style={{
                                ...(props.activeAcquaint === 'approachesToWork' ? {
                                    borderRadius: '16px',
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white'
                                } : {})
                            }}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer
                                                    h-[50px] leading-[50px]'>Подходы в работе</div>
                        <div onClick={() => props.setActiveAcquaint('tariffs')}
                            style={{
                                ...(props.activeAcquaint === 'tariffs' ? {
                                    borderRadius: '16px',
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white'
                                } : {})
                            }}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer
                                                    h-[50px] leading-[50px]'>Тарифы</div>
                    </div>
                    {props.activeAcquaint === 'aboutMe' &&
                        <>
                            <div className='text-text text-[24px] font-semibold mb-[30px]'>О себе</div>
                            <div className='flex flex-col gap-y-[10px]'>
                                {
                                    listPsychologist[activePsychologist].aboutMe.split('<br />').map((part: string, index: number) => {
                                        return (
                                            <div className="text-text text-[18px]" key={index}>{part}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-[370px] mx-auto mt-[50px]'>
                                <Btn textBtn='Пообщаться с психологом' widht={360} link='/messages' />
                            </div>
                        </>
                    }
                    {props.activeAcquaint === 'education' &&
                        <>
                            <div className='text-text text-[24px] font-semibold mb-[30px]'>Образование</div>
                            <div className='flex flex-col gap-y-[10px]'>
                                {
                                    listPsychologist[activePsychologist].education.split('<br />').map((part: string, index: number) => {
                                        return (
                                            <div className="text-text text-[18px]" key={index}>{part}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-[370px] mx-auto mt-[50px]'>
                                <Btn textBtn='Пообщаться с психологом' widht={360} link='/messages' />
                            </div>
                        </>
                    }
                    {props.activeAcquaint === 'approachesToWork' &&
                        <>
                            <div className='text-text text-[24px] font-semibold mb-[30px]'>Подходы в работе</div>
                            <div className='flex flex-col gap-y-[10px]'>
                                {
                                    listPsychologist[activePsychologist].approachesToWork.split('<br />').map((part: string, index: number) => {
                                        return (
                                            <div className="text-text text-[18px]" key={index}>{part}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-[370px] mx-auto mt-[50px]'>
                                <Btn textBtn='Пообщаться с психологом' widht={360} link='/messages' />
                            </div>
                        </>
                    }
                    {props.activeAcquaint === 'tariffs' &&
                        <>
                            <div className='text-text text-[24px] font-semibold mb-[30px]'>Тарифы работы с психологом</div>
                            <div className='flex flex-col gap-y-[20px]'>
                                <div className='text-text text-[22px]'>Очная встреча - {listPsychologist[activePsychologist].tariffsWork.faceToFace} ₽</div>
                                <div className='text-text text-[22px]'>Онлайн созвон - {listPsychologist[activePsychologist].tariffsWork.online} ₽</div>
                                <div className='text-text text-[22px]'>Очная встреча с семьей - {listPsychologist[activePsychologist].tariffsWork.withFamilies} ₽</div>
                            </div>
                            <div className='w-[370px] mx-auto mt-[50px]'>
                                <Btn textBtn='Пообщаться с психологом' widht={360} link='/messages' />
                            </div>
                        </>
                    }
                </div>
            </Container>
        </div>
    )
}
