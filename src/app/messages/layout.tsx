import Header from "@/components/Header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Диалоги | You-Mi',
}

export default function TariffLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header notShowNav white />
            {children}
        </>
    );
}
