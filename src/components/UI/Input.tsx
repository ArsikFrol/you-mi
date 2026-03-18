'use client'

import React from 'react'

type TOneTypeData = 'number' | 'string' | 'numberPhone' | 'email' | 'any'

type Props = {
    placeholder: string,
    width: number,
    textCenter?: boolean,
    height?: number,
    name?: string,
    value: string,
    onChange: (newInput: string) => void,
    maxLength: number,
    oneTypeData?: TOneTypeData,
    error?: boolean
}

export default function Input(props: Props) {
    const [error, setError] = React.useState<boolean>(props.error || false)
    const [invalidChar, setInvalidChar] = React.useState<boolean>(false)

    const handleChange = (str: string) => {
        props.onChange(str)
    }

    const borderClass = error
        ? 'border-red-500 focus:outline-red-300 bg-red-50'
        : 'border-(--color-btn-and-title) focus:outline-blue-200'

    return (
        <>
            <input style={{
                ...(props.textCenter ?
                    { textAlign: 'center', width: `${props.width}px`, height: `${props.height}px` } :
                    { width: `${props.width}px`, height: `${props.height}px` })
            }}
                className={`focus:outline-4 px-[20px] border-2 rounded-2xl ${borderClass}`}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => handleChange(e.target.value)}
                maxLength={props.maxLength}
                type="text" />
            {error && invalidChar && (
                <div className='text-[rgba(250,120,140,1)] mt-[8px]'>
                    Вы ввели недопустимый элемент: "{invalidChar}"
                </div>
            )}
        </>
    )
}
