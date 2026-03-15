import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Записи | You-Mi',
}

export default function TariffLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
