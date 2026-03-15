'use client'

import useFormTeam from "@/store/formTeam/formTeamStore"

export default function FormThree() {
    const {
        listQuestions, changeListQuestions,
        chooseListQuestions,
        addChooseListQuestions, removeChooseListQuestions
    } = useFormTeam()

    const clickChecked = (idElem: number, index: number) => {
        if (listQuestions[index].checked) {
            changeListQuestions(idElem, false)
            removeChooseListQuestions(listQuestions[index])
        } else {
            changeListQuestions(idElem, true)
            addChooseListQuestions(listQuestions[index])
        }
    }
    console.log(chooseListQuestions)

    return (
        <div className='w-[580px] mx-auto'>
            <div className='text-(--color-btn-and-title) text-[20px] font-semibold mb-[30px]'>
                <div className=''>Шаг 3</div>
                <div className=''>Специализация</div>
            </div>
            <div className=''>
                <div className='w-[580px] text-(--text) text-[16px] font-medium mb-[5px]'>В каком подходе вы работаете?</div>
                <div className='w-[580px] text-(--text) text-[14px] font-light mb-[40px]'>Выберете направления терапии в которых вы работаете и имеете дополнительную подготовку.</div>
            </div>
            <div className='flex flex-col gap-y-[20px]'>
                {
                    listQuestions.map((obj, index: number) => {
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
        </div>
    )
}