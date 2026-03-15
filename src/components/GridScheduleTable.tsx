export default function GridScheduleTable() {
    return (
        <div className='grid grid-cols-7 gap-y-[40px] gap-x-[30px] justify-between mt-[30px]'>
            {
                [...Array(84)].map((_, index: number) => {
                    return (
                        <div key={`empty-${index}`} className="w-[120px] h-[100px] bg-[rgba(235,245,255,1)]
                            mx-auto rounded-2xl"></div>
                    )
                })
            }
        </div>
    )
}
