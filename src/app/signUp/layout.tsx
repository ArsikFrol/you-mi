import Header from '@/components/Header';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Регистрация | You-Mi',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header white />
            {children}
        </>
    )
}