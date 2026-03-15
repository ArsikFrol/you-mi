'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Btn from "@/components/UI/Btn";

import logo from '../../../public/logo.png'
import { TRoute } from '@/types/routes/types';
import useFormTeam from '@/store/formTeam/formTeamStore';
import Container from '@/components/UI/Container';
import { TCompletedHigher } from '@/store/formTeam/types';

const listELem = [
    { id: 1, link: '/formPartTeam/one' },
    { id: 2, link: '/formPartTeam/two' },
    { id: 3, link: '/formPartTeam/three' },
    { id: 4, link: '/formPartTeam/four' },
    { id: 5, link: '/formPartTeam/five' }
]

export default function FormLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const {
        haveCompletedHigher,
        allFieldsFilledOne,
        allFieldsFilledTwo,
        chooseListQuestions,
        allFieldsFilledFour,
        allFieldsFilledFive,
    } = useFormTeam()

    const router = useRouter();
    const pathName: TRoute = usePathname() as TRoute

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    };

    const clickBack = () => {
        router.back();

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    }

    return (
        <Container paddingNone minH={pathName === '/formPartTeam/two' ? true : false}>
            <>
                <div className='' style={pathName === '/formPartTeam/complete' ? {
                    padding: '25px 0',
                    background: 'rgba(249, 252, 255, 1)'
                } : {
                    margin: '50px 0'
                }}>
                    <Link href='/' className='w-[180px] mx-auto block'>
                        <Image className='hover:scale-105 transition-transform duration-300'
                            src={logo} alt='' width={180} height={46} draggable='false' />
                    </Link>
                </div>
                <>{children}</>
                <div style={{
                    ...(pathName == '/formPartTeam/one' ? { width: '230px' } : {}),
                    ...(pathName == '/formPartTeam/complete' ? { display: 'none' } : {})
                }} className='flex gap-x-[50px] items-center w-[500px] mx-auto mt-[50px]'>
                    <div style={{
                        ...(pathName == '/formPartTeam/one' ? { display: 'none' } : {})
                    }}
                        onClick={clickBack} className='transition-transform hover:scale-105 
                    duration-300 cursor-pointer w-[220px] border border-(--color-btn-and-title) h-[60px] leading-[60px] 
                    text-center rounded-2xl'>Назад</div>
                    <div style={
                        pathName === '/formPartTeam/five' ? { display: 'none' } : {}
                    }
                        className='w-[230px]' onClick={scrollToTop}>
                        <Btn style={
                            pathName == '/formPartTeam/five' ? { display: 'none' } : {}
                        }
                            link={
                                pathName == '/formPartTeam/one' && allFieldsFilledOne ? '/formPartTeam/two' :
                                    pathName == '/formPartTeam/two' && allFieldsFilledTwo ? '/formPartTeam/three' :
                                        pathName == '/formPartTeam/three' && chooseListQuestions.length ? '/formPartTeam/four' :
                                            pathName == '/formPartTeam/four' && allFieldsFilledFour ? '/formPartTeam/five' : ''
                            } textBtn='Далее' widht={220} />
                    </div>
                    <Btn link='/formPartTeam/complete' textBtn='Сохранить' widht={220} style={
                        pathName == '/formPartTeam/five' ? { display: 'block' } : { display: 'none' }
                    } />
                </div>
                <div className='flex justify-center mt-8 gap-5 mb-[100px]'
                    style={{
                        ...(pathName === '/formPartTeam/complete' ? { display: 'none' } : {}),
                        ...(pathName === '/formPartTeam/two' && haveCompletedHigher === '' &&
                            haveCompletedHigher as TCompletedHigher === 'нет' ? { marginBottom: '0' } : {})
                    }}>
                    {
                        listELem.map((obj: { id: number, link: string }, index: number) => {
                            return (
                                <Link href={
                                    pathName === '/formPartTeam/one' && allFieldsFilledOne ? '/formPartTeam/two' :
                                        pathName === '/formPartTeam/two' && allFieldsFilledTwo ? '/formPartTeam/three' :
                                            pathName === '/formPartTeam/three' && chooseListQuestions ? '/formPartTeam/four' :
                                                pathName === '/formPartTeam/four' && allFieldsFilledFour ? '/formPartTeam/five' : ''
                                }
                                    key={index}
                                    style={{
                                        ...(pathName == '/formPartTeam/one' && index == 0 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                        ...(pathName == '/formPartTeam/two' && index == 1 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                        ...(pathName == '/formPartTeam/three' && index == 2 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                        ...(pathName == '/formPartTeam/four' && index == 3 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                        ...(pathName == '/formPartTeam/five' && index == 4 ? { background: 'rgba(120, 114, 185, 1)' } : {})
                                    }}
                                    className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 bg-gray-300`}
                                    onClick={scrollToTop} />
                            )
                        })
                    }
                </div>
            </>
        </Container>
    );
}