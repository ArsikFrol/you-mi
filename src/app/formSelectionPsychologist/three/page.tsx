'use client'

import React from "react";

import VisitCardPsycholog from "@/components/VisitCardPsycholog";
import FormSelectionThree from "@/components/FormSelectionThree";

export default function () {
    const [showVisitCard, setShowVisitCard] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (showVisitCard) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showVisitCard]);


    return (
        <>
            <FormSelectionThree setShowVisitCard={setShowVisitCard} />
            {showVisitCard &&
                <div className='w-full h-full bg-[rgba(74,70,117,0.6)] 
                    fixed left-0 top-0 flex items-center z-100'>
                    <VisitCardPsycholog setShowVisitCard={setShowVisitCard} />
                </div>
            }
        </>
    )
}