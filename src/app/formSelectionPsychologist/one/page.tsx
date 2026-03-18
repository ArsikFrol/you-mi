import Image from "next/image";

import FormSelectionOne from "@/components/FormSelectionOne";

import underline from '../../../../public/underline.png'

export default function () {
    return (
        <>
            <div
                className='relative w-[1180px] mx-auto'>
                <div className='text-center text-btn-and-title text-[40px] font-bold mb-[50px]'>
                    Давайте подберем вашего психолога онлайн
                </div>
                <Image className='absolute right-[260px] top-[50px]' src={underline} alt='' width={425} height={101} draggable='false' />
            </div>
            <FormSelectionOne />
        </>
    )
}
