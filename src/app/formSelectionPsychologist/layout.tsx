'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast'

import Btn from "@/components/UI/Btn";
import useFormSelect from '@/store/formSelection/formSelectionStore';

import { TRoute } from '@/types/routes/types';

import logo from '../../../public/logo.png'

type TListElem = {
    id: number, link: TRoute
}

type TListPage = {
    id: number, link: string, width: number, text: string
}

const listELem: TListElem[] = [
    { id: 1, link: '/formSelectionPsychologist/one' },
    { id: 2, link: '/formSelectionPsychologist/two' },
    { id: 3, link: '/formSelectionPsychologist/three' },
    { id: 4, link: '/payService?backPage=formPsychologists' }
]

const listPage: TListPage[] = [
    { id: 1, link: 'one', width: 220, text: 'Запрос' },
    { id: 2, link: 'two', width: 220, text: 'Данные' },
    { id: 3, link: 'three', width: 310, text: 'Выбор психолога' },
    { id: 4, link: 'payService?backPage=formPsychologists', width: 310, text: 'Оплата' }
]

export default function FormLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const {
        allFieldsFilledOne,
        allFieldsFilledTwo,
        selectData,
        allFieldsFilledPayService
    } = useFormSelect()

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

    const payToast = () => {
        toast.success('Оплата прошла успешно!')
    }

    return (
        <>
            <Link href='/'
                className='w-[180px] mx-auto my-[50px] block'>
                <Image className='hover:scale-105 transition-transform duration-300' src={logo} alt='' width={180} height={46} draggable='false' />
            </Link>
            <div style={{
                display: pathName === '/formSelectionPsychologist/complete' ? 'none' : ''
            }}
                className='flex justify-between w-[1180px] mx-auto mb-[50px]'>
                {
                    listPage.map((obj: TListPage) => {
                        const pageNumber = pathName === '/formSelectionPsychologist/one' ? 1 :
                            pathName === '/formSelectionPsychologist/two' ? 2 :
                                pathName === '/formSelectionPsychologist/three' ? 3 :
                                    pathName === '/payService?backPage=formPsychologists' ? 4 : 0;

                        const isActive = obj.id <= pageNumber;

                        return (
                            <Link key={obj.id}
                                href={
                                    obj.id === 1 ? '/formSelectionPsychologist/one' :
                                        obj.id === 2 && allFieldsFilledOne ? '/formSelectionPsychologist/two' :
                                            obj.id === 3 && allFieldsFilledTwo ? '/formSelectionPsychologist/three' :
                                                obj.id === 4 && selectData ? '/payService?backPage=formPsychologists' : ''
                                }
                                style={{ width: `${obj.width}px` }}
                                className={`block text-center h-[50px] leading-[50px] text-white text-[20px] 
                                    font-semibold bg-(--color-btn-and-title) rounded-3xl transition-all 
                                    duration-300 cursor-pointer hover:scale-105 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                                {obj.text}
                            </Link>
                        )
                    })
                }
            </div>
            <>
                {children}
            </>
            <div className='flex gap-x-[50px] items-center w-[500px] mx-auto mt-[50px]'
                style={{
                    ...(pathName == '/formSelectionPsychologist/one' || pathName === '/formSelectionPsychologist/three' ?
                        { width: '230px' } : {}),
                    ...(pathName == '/formSelectionPsychologist/complete' ? { display: 'none' } : {})
                }}>
                <div onClick={clickBack} className='transition-transform hover:scale-105 
                    duration-300 cursor-pointer w-[220px] border border-(--color-btn-and-title) h-[60px] leading-[60px] 
                    text-center rounded-2xl'
                    style={{
                        ...(pathName == '/formSelectionPsychologist/one' ? { display: 'none' } : {})
                    }}>Назад</div>
                <div style={pathName === '/formSelectionPsychologist/three' ? { display: 'none' } : {}}
                    className='w-[230px]' onClick={pathName === '/payService' ? () => payToast() : scrollToTop}>
                    <Btn textBtn={pathName !== '/payService' ? 'Далее' : 'Оплатить'} widht={220}
                        link={pathName == '/formSelectionPsychologist/one' && allFieldsFilledOne ? '/formSelectionPsychologist/two' :
                            pathName == '/formSelectionPsychologist/two' && allFieldsFilledTwo ? '/formSelectionPsychologist/three' :
                                pathName == '/formSelectionPsychologist/three' && selectData ? '/payService?backPage=formPsychologists' :
                                    pathName == '/payService?backPage=formPsychologists' && allFieldsFilledPayService ?
                                        '/formSelectionPsychologist/complete' : ''
                        } />
                </div>
            </div>
            <div className='flex justify-center mt-8 gap-5 mb-[100px]'
                style={{
                    ...(pathName == '/formSelectionPsychologist/complete' ? { display: 'none' } : {})
                }}>
                {
                    listELem.map((obj: TListElem, index: number) => {
                        return (
                            <Link href={obj.link}
                                key={index}
                                style={{
                                    ...(pathName == '/formSelectionPsychologist/one' && index == 0 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                    ...(pathName == '/formSelectionPsychologist/two' && index == 1 ? { background: 'rgba(120, 114, 185, 1)' } : {}),
                                    ...(pathName == '/formSelectionPsychologist/three' && index == 2 ? { background: 'rgba(120, 114, 185, 1)' } : {})
                                }}
                                className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 bg-gray-300`}
                                onClick={scrollToTop} />
                        )
                    })
                }
            </div>
        </>
    );
}