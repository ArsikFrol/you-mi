import Image from "next/image"

import CrossClose from "@/components/UI/CrossClose";

import visitCard from '../../public/formSelectionThree/videoCard.png'

type Props = {
    setShowVisitCard: (show: boolean) => void
}

export default function VisitCardPsycholog(props: Props) {

    return (
        <div className='w-full'>
            <div className='w-[960px] mx-auto flex gap-x-[10px]'>
                <Image className=""
                    src={visitCard} alt='' width={900} height={700} draggable='false' />
                <div className=''>
                    <CrossClose closeFunction={props.setShowVisitCard} />
                </div>
            </div>
        </div>
    )
}