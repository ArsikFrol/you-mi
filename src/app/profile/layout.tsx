import Link from "next/link";
import Image from "next/image";

import HeaderProfile from "@/components/HeaderProfile";
import Container from "@/components/UI/Container";

import logo from '../../../public/logo.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Профиль | You-Mi',
}

export default async function RootLayoutProfile({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Container paddingNoneY>
            <>
                <div className='flex justify-between py-[20px]'>
                    <Link href='/'>
                        <Image src={logo} alt='' width={170} height={45} draggable='false' />
                    </Link>
                    <HeaderProfile />
                </div>
                {children}
            </>
        </Container>
    );
}
