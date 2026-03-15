import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Вебинары | You-Mi',
    description: 'Краткое описание вашего сайта',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}