'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

import Container from "@/components/UI/Container";

import Header from "@/components/Header";

type TListElem = {
    id: number,
    text: string,
    link: string
}

type TActiveElem = '/tariff' | '/tariff/history' | '/tariff/topUpBalance' | '/tariff/referralProgram' | string

const listElem: Array<TListElem> = [
    { id: 1, text: 'Выбрать тариф', link: '/tariff' },
    { id: 2, text: 'История', link: '/tariff/history' },
    { id: 3, text: 'Пополнить баланс', link: '/tariff/topUpBalance' },
    { id: 4, text: 'Реферальная программа', link: '/tariff/referralProgram' }
]

export default function TariffLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName: TActiveElem = usePathname()

    return (
        <>
            <Header showNav
                white={['/tariff/history', '/tariff/topUpBalance', '/tariff/referralProgram'].includes(pathName)} />
            <Container purple={['/tariff'].includes(pathName)} 
                paddingNoneY>
                <div className='grid mx-auto py-[50px]
                    4xl:w-[1500px]       
                    3xl:w-[1300px]
                    2xl:w-[1200px]
                    xl:w-[1140px] xl:text-[20px]
                    lg:max-xl:w-[960px] lg:grid-cols-[1fr_1fr_1.5fr_1.5fr] max-lg:grid-cols-2 
                        max-lg:gap-y-[20px] max-xl:text-[18px]
                    md:max-lg:w-[690px]'>
                    {
                        listElem.map((obj: TListElem, index: number) => {
                            return (
                                <Link href={obj.link}
                                    style={{
                                        ...(pathName === obj.link ? {
                                            background: 'rgba(120, 114, 185, 1)',
                                            borderRadius: '16px',
                                            color: 'white'
                                        } : {})
                                    }}
                                    className="text-center text-(--text) font-medium h-[50px] leading-[50px]" 
                                    key={index}>{obj.text}</Link>
                            )
                        })
                    }
                </div>
            </Container>
            {children}
        </>
    );
}
