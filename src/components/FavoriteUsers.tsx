import Image from 'next/image'

import { TListPsychologist } from '@/store/formSelection/type'
import useFormSelect from '@/store/formSelection/formSelectionStore'

type Props = {
    favoritePsychologists: TListPsychologist[]
}

export default function FavoritePsychologists(props: Props) {
    const { setActivePsychologist } = useFormSelect()

    const clickPsychologist = (id: number) => {
        setActivePsychologist(id)
        window.scrollBy({
            top: -550,
            behavior: 'smooth'
        });
    }

    return (
        <div className='bg-(--bg) rounded-2xl py-[50px] px-[100px] mt-[100px]'>
            <div className='text-(--text) text-[24px] font-semibold mb-[20px]'>В избранном:</div>
            <div className='flex gap-x-[40px]'>
                {
                    props.favoritePsychologists.map((obj: TListPsychologist, index: number) => {
                        return (
                            <Image className='hover:scale-105 transition-transform duration-300 cursor-pointer'
                                onClick={() => clickPsychologist(obj.id)}
                                src={obj.imagePhoto} alt='' width={120} height={120} draggable='false' key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}