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
    const [invalidChar, setInvalidChar] = React.useState<string>('')

    React.useEffect(() => {
        setError(props.error || false)
    }, [props.error])

    const formatPhoneNumber = (value: string): string => {
        const digits = value.replace(/\D/g, '')

        if (!digits.length) return ''

        let phoneDigits = digits
        if (!phoneDigits.startsWith('8')) {
            phoneDigits = '8' + (phoneDigits.startsWith('7') ? phoneDigits.slice(1) : phoneDigits)
        }

        const limitedDigits = phoneDigits.slice(0, 11)

        if (limitedDigits.length <= 1) return limitedDigits
        if (limitedDigits.length <= 4) return `${limitedDigits.slice(0, 1)}-${limitedDigits.slice(1)}`
        if (limitedDigits.length <= 7) return `${limitedDigits.slice(0, 1)}-${limitedDigits.slice(1, 4)}-${limitedDigits.slice(4)}`
        if (limitedDigits.length <= 9) return `${limitedDigits.slice(0, 1)}-${limitedDigits.slice(1, 4)}-${limitedDigits.slice(4, 7)}-${limitedDigits.slice(7)}`
        return `${limitedDigits.slice(0, 1)}-${limitedDigits.slice(1, 4)}-${limitedDigits.slice(4, 7)}-${limitedDigits.slice(7, 9)}-${limitedDigits.slice(9, 11)}`
    }

    const formatEmail = (value: string): string => {
        let processed = value.replace(/\s/g, '').toLowerCase()
        const originalInput = processed

        const lastAtIndex = processed.lastIndexOf('@')

        let localPart = ''
        let domain = ''

        if (lastAtIndex === -1) {
            localPart = processed.replace(/[^a-z0-9._@]/g, '')
        }
        if (lastAtIndex !== -1) {
            localPart = processed.slice(0, lastAtIndex).replace(/[^a-z0-9._@]/g, '')
            domain = processed.slice(lastAtIndex + 1).replace(/[^a-z0-9.-]/g, '')
        }

        const finalProcessed = localPart + (domain ? '@' + domain : '')

        if (originalInput !== finalProcessed) {
            const removed = findRemovedChars(originalInput, finalProcessed)
            if (removed) {
                setInvalidChar(removed)
            }
        } else {
            setInvalidChar('')
        }

        setError(originalInput !== finalProcessed)

        return finalProcessed
    }

    const findRemovedChars = (original: string, processed: string): string => {
        let removed = ''
        let j = 0

        for (let i = 0; i < original.length; i++) {
            if (j < processed.length && original[i] === processed[j]) {
                j++
            } else {
                removed += original[i]
            }
        }

        return removed
    }

    const handleChange = (newInput: string) => {
        let processedValue = newInput
        setInvalidChar('')

        if (props.oneTypeData === 'number') {
            const removed = newInput.replace(/\d/g, '')
            if (removed) {
                setInvalidChar(removed)
            }
            processedValue = newInput.replace(/\D/g, '')
        } else if (props.oneTypeData === 'string') {
            const removed = newInput.replace(/[a-zA-Zа-яА-Я]/g, '')
            if (removed) {
                setInvalidChar(removed)
            }
            processedValue = newInput.replace(/[^a-zA-Zа-яА-Я]/g, '')
        } else if (props.oneTypeData === 'numberPhone') {
            const allowedPattern = /[\d-]/g

            const removed = newInput.replace(allowedPattern, '')

            if (removed) {
                setInvalidChar(removed)
            }

            const digitCount = (newInput.match(/\d/g) || []).length
            const dashCount = (newInput.match(/-/g) || []).length

            if (dashCount > 4 || digitCount > 11) {
                setInvalidChar(dashCount > 4 ? 'лишний дефис' : '')
            }

            processedValue = formatPhoneNumber(newInput)
        } else if (props.oneTypeData === 'email') {
            processedValue = formatEmail(newInput)
        }

        if (invalidChar) {
            setError(true)
        } else {
            setError(false)
        }

        return props.onChange(processedValue)
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