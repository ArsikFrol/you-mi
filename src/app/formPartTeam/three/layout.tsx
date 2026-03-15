import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Этап 3 | You-Mi',
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