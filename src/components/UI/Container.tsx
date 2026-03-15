'use client'

import React, { JSX } from "react"
import { useTheme } from "next-themes"

type Props = {
    children: JSX.Element,
    purple?: boolean,
    relative?: boolean,
    minH?: boolean
    paddingNoneY?: boolean,
    fullWidth?: boolean,
    rounded?: boolean,
    insidePadding?: boolean
}

export default function Container(props: Props) {

    const [mounted, setMounted] = React.useState(false)
    const { resolvedTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const bgColor = props.purple
        ? (resolvedTheme === 'dark' ? 'rgba(45, 55, 72, 1)' : 'rgba(249, 252, 255, 1)')
        : 'transparent'

    if (!mounted) return null

    return (
        <div className="py-25
                max-md:px-[30px]"
            style={{ background : bgColor,
                ...(props.minH ? {
                    minHeight: 'calc(100vh - 100px)',
                    display: 'flex',
                    alignItems: 'center'
                } : {}),
                ...(props.paddingNoneY ? { paddingTop: '0', paddingBottom: '0' } : {}),
                ...(props.rounded ? { borderRadius: '16px' } : {}),
                ...(props.insidePadding ? { padding: '50px' } : {})
                }}>
            <div className='mx-auto
                    4xl:w-[1500px]
                    3xl:w-[1300px]
                    2xl:w-[1200px]
                    xl:max-2xl:w-[1140px]
                    lg:max-xl:w-[960px]
                    md:max-lg:w-[690px]'
                style={{
                    ...(props.relative ? { position: 'relative' } : {}),
                    ...(props.fullWidth ? { width: '100%' } : {})
                    }} >
                {props.children}
            </div>
        </div>
    )
}
