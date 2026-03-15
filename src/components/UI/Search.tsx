'use client'

import Image from "next/image"
import React from "react"

import magnifier from '../../../public/magnifier.png'
import cross from '../../../public/cross.png'

type Props = {
    hideSearch?: boolean,
    hideCross?: boolean,
    placeholder?: string,
    width?: number
}

export default function Search(props: Props) {
    const [showSearch, setShowSearch] = React.useState<boolean>(false)
    const [hideSearch, setHideSearch] = React.useState<boolean>(props.hideSearch || false)
    const [valumeInput, setValumeInput] = React.useState<string>('')

    const clickInput = () => {
        setShowSearch(!showSearch)
        setHideSearch(false)
    }

    const clickCross = () => {
        setValumeInput('')
        setHideSearch(true)
        setShowSearch(false)
    }

    return (
        <>
            {hideSearch ?
                <div className='relative text-(--text) text-[18px] font-medium group'
                    onClick={() => clickInput()}>
                    <input style={{
                        ...(showSearch ? { width: '420px' } : { cursor: 'pointer' })
                    }} type="text"
                        onChange={(e) => setValumeInput(e.target.value)}
                        value={valumeInput}
                        placeholder={props.placeholder ? props.placeholder : "Что вас тревожит?"}
                        className="rounded-2xl bg-[rgba(235,245,255,1)] w-[50px] pl-[60px] leading-[50px]
                            focus:outline-blue-200 focus:outline-4" />
                    <Image className="group-hover:scale-110 transition-transform duration-300 absolute left-[20px] top-[15px]"
                        style={{
                            ...(showSearch ? {} : { cursor: 'pointer' })
                        }}
                        src={magnifier} alt='' width={22} height={22} draggable='false' />
                </div> :
                <div className='relative text-(--text) text-[18px] font-medium group'>
                    <input type="text"
                        onChange={(e) => setValumeInput(e.target.value)}
                        value={valumeInput}
                        placeholder={props.placeholder ? props.placeholder : "Что вас тревожит?"}
                        className="rounded-2xl bg-[rgba(235,245,255,1)] w-[420px] pl-[60px] pr-[50px] leading-[50px]
                            focus:outline-blue-200 focus:outline-4"
                        style={{
                            ...(props.width ? { width: `${props.width}px` } : {})
                        }} />
                    <Image className="group-hover:scale-110 transition-transform duration-300 absolute left-[20px] top-[15px]"
                        src={magnifier} alt='' width={22} height={22} draggable='false' />
                    <Image style={props.hideCross ? { display: 'none' } : {}}
                        onClick={() => clickCross()}
                        className="absolute right-[20px] top-[18px] cursor-pointer hover:scale-120 transition-transform duration-300" src={cross} alt='' width={15} height={15} draggable='false' />
                </div>
            }
        </>
    )
}