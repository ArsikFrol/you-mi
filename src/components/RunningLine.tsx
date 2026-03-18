const questionsList = {
    one: [
        { id: 1, activeElem: true, text: 'Выгорание' },
        { id: 2, activeElem: false, text: 'Отношения' },
        { id: 3, activeElem: false, text: 'Хроническая усталость' },
        { id: 4, activeElem: true, text: 'Чувство тревоги' },
        { id: 5, activeElem: false, text: 'Безразличие' },
        { id: 6, activeElem: true, text: 'Депрессивное состояние' },
        { id: 7, activeElem: false, text: 'Мотивация' },
        { id: 8, activeElem: false, text: 'Неуверенность в себе' },
        { id: 9, activeElem: true, text: 'Стрессы' },
        { id: 10, activeElem: true, text: 'Апатия' },
        { id: 11, activeElem: false, text: 'Самооценка' },
        { id: 12, activeElem: true, text: 'Неврозы' },
        { id: 13, activeElem: false, text: 'Фобии' }
    ],
    two: [
        { id: 1, activeElem: true, text: 'Фобии' },
        { id: 2, activeElem: false, text: 'Неврозы' },
        { id: 3, activeElem: false, text: 'Самооценка' },
        { id: 4, activeElem: true, text: 'Апатия' },
        { id: 5, activeElem: false, text: 'Стрессы' },
        { id: 6, activeElem: true, text: 'Неуверенность в себе' },
        { id: 7, activeElem: false, text: 'Мотивация' },
        { id: 8, activeElem: false, text: 'Депрессивное состояние' },
        { id: 9, activeElem: true, text: 'Безразличие' },
        { id: 10, activeElem: true, text: 'Чувство тревоги' },
        { id: 11, activeElem: false, text: 'Хроническая усталость' },
        { id: 12, activeElem: true, text: 'Отношения' },
        { id: 13, activeElem: false, text: 'Выгорание' }
    ]
}

export default function RunningLine() {
    return (
        <div className="relative overflow-hidden">
            <div className="flex items-center mb-[10px]">
                <div className="flex animate-marquee whitespace-nowrap">
                    {questionsList.one.map((elem, index) => (
                        <div className="pr-[90px]" key={`one-${index}`}>
                            <div
                                style={elem.activeElem ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white',
                                    border: 'none'
                                } : {}}
                                className="whitespace-nowrap border-2 border-btn-and-title
                                    rounded-[25px] text-[20px] text-btn-and-title
                                    font-semibold px-[40px] h-[50px] leading-[46px]

                                    max-md:text-[17px]">
                                {elem.text}
                            </div>
                        </div>
                    ))}
                    {questionsList.one.map((elem, index) => (
                        <div className="pr-[90px]" key={`one-duplicate-${index}`}>
                            <div
                                style={elem.activeElem ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white',
                                    border: 'none'
                                } : {}}
                                className="whitespace-nowrap border-2 border-btn-and-title
                                    rounded-[25px] text-[20px] text-btn-and-title
                                    font-semibold px-[40px] h-[50px] leading-[46px]

                                    max-md:text-[17px]">
                                {elem.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {questionsList.two.map((elem, index) => (
                        <div className="pr-[90px]" key={`two-${index}`}>
                            <div
                                style={elem.activeElem ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white',
                                    border: 'none'
                                } : {}}
                                className="whitespace-nowrap border-2 border-btn-and-title
                                    rounded-[25px] text-[20px] text-btn-and-title
                                    font-semibold px-[40px] h-[50px] leading-[46px]

                                    max-md:text-[17px]">
                                {elem.text}
                            </div>
                        </div>
                    ))}
                    {questionsList.two.map((elem, index) => (
                        <div className="pr-[90px]" key={`two-duplicate-${index}`}>
                            <div
                                style={elem.activeElem ? {
                                    background: 'rgba(120, 114, 185, 1)',
                                    color: 'white',
                                    border: 'none'
                                } : {}}
                                className="whitespace-nowrap border-2 border-btn-and-title
                                    rounded-[25px] text-[20px] text-btn-and-title
                                    font-semibold px-[40px] h-[50px] leading-[46px]

                                    max-md:text-[17px]">
                                {elem.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
    )
}
