import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'О нас | You-Mi',
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