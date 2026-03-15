'use client'

import React from 'react'

import SliderPsychologist, { TActiveAcquaint } from './SliderPsychologist'

import Container from './UI/Container'
import Calendar from './UI/Calendar'

import useFormSelect from '@/store/formSelection/formSelectionStore'

import Acquaint from './Acquaint'
import CartSelectionThree from './CartSelectionThree'
import useCalendar from '@/store/calendar/calendarStore'
import FavoritePsychologists from './FavoriteUsers'
import useTariffs from '@/store/tariffs/tariffs'
import usePsychologists from '@/store/psychologists/psychologistsStore'
import { TListPsychologist } from '@/store/psychologists/types'

type Props = {
    setShowVisitCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormSelectionThree(props: Props) {
    const [showCalendar, setShowCalendar] = React.useState<boolean>(false)

    const [showAcquaint, setShowAcquaint] = React.useState<boolean>(false)
    const [activeAcquaint, setActiveAcquaint] = React.useState<TActiveAcquaint>('')

    const {
        listPsychologist,
        activePsychologist
    } = usePsychologists()

    const {
        globalActiveDay,
        globalActiveTime,
    } = useCalendar()

    const {
        tariffPsychologist
    } = useTariffs()

    const favoritePsychologists = listPsychologist.filter((Psychologist: TListPsychologist) => Psychologist.favorite === true)

    return (
        <Container>
            <>
                <SliderPsychologist setActiveAcquaint={setActiveAcquaint}
                    setShowAcquaint={setShowAcquaint} setShowCalendar={setShowCalendar}
                    showCalendar={showCalendar} />
                <Container purple rounded paddingNoneY relative>
                    <CartSelectionThree setShowAcquaint={setShowAcquaint}
                        setShowCalendar={setShowCalendar} showAcquaint={showAcquaint} showCalendar={showCalendar}
                        setShowVisitCard={props.setShowVisitCard} />
                </Container>
                {showCalendar &&
                    <div className='mt-[100px]'>
                        <Calendar closeFunction={() => { }} whereToShow='formSelectionPsychologist'
                            objPsychologist={listPsychologist[activePsychologist]}
                            preSelectedDay={globalActiveTime && globalActiveDay && tariffPsychologist ? true : false} />
                    </div>
                }
                {showAcquaint &&
                    <Acquaint activeAcquaint={activeAcquaint} setActiveAcquaint={setActiveAcquaint} />
                }
                {favoritePsychologists.length ?
                    <FavoritePsychologists favoritePsychologists={favoritePsychologists} /> : <></>
                }
            </>
        </Container>
    )
}
