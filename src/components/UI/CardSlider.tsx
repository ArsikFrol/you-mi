'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Container from '../UI/Container'

import { IRelated } from '@/store/article/types';

import rightActive from '../../../public/popularCategories/rightActive.png'
import rightNotActive from '../../../public/popularCategories/rightNotActive.png'
import leftNotActive from '../../../public/popularCategories/leftNotActive.png'
import leftActive from '../../../public/popularCategories/leftActive.png'
import bgPopular from '../../../public/popularCategories/bgPopular.png'

type Props = {
    listElem: IRelated[],
    title: string
}

export default function CardSlider(props: Props) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsToShow = 3;
    const itemWidth = 280;
    const gap = 30;
    const containerRef = React.useRef(null);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const clickLeft = () => {
        if (currentIndex <= 0 || isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev - 1);
    };

    const clickRight = () => {
        if (currentIndex >= props.listElem.length - itemsToShow || isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
    };

    React.useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <Container purple>
            <>
                <div className='text-text text-[24px] font-semibold mb-[70px]'>{props.title}</div>

                <div className='flex items-center gap-x-[50px] justify-between'>
                    <button
                        onClick={clickLeft}
                        disabled={currentIndex === 0 || isAnimating}
                        className={`cursor-pointer hover:-translate-x-2 transition-transform duration-300
                            ${currentIndex === 0 || isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <Image
                            src={currentIndex === 0 ? leftNotActive : leftActive}
                            alt='Назад'
                            width={60}
                            height={60}
                            draggable='false' />
                    </button>

                    <div ref={containerRef} className='overflow-hidden w-[920px]'>
                        <div className='flex gap-x-[30px] transition-transform duration-500 ease-in-out'
                            style={{
                                transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
                                width: `${props.listElem.length * (itemWidth + gap) - gap}px`
                            }}>
                            {props.listElem.map((obj: IRelated) => (
                                <Link href={obj.link}
                                    className="relative flex-shrink-0 h-[270px] pt-[10px] cursor-pointer
                                        hover:scale-105 transition-transform duration-300"
                                    key={obj.id}
                                    style={{ width: `${itemWidth}px` }}>
                                    <div className='w-full h-[240px] bg-white relative z-10 rounded-2xl'>
                                        <div className='w-[200px] text-text text-[20px] font-medium pt-[20px] pl-[30px]'>
                                            {obj.title}
                                        </div>
                                        <Image
                                            className='mx-auto mt-[20px]'
                                            src={obj.image}
                                            alt={obj.title}
                                            width={120}
                                            height={120}
                                            draggable='false' />
                                    </div>
                                    <Image
                                        className='absolute left-[10px] top-[20px]'
                                        src={bgPopular}
                                        alt='Фон'
                                        width={280}
                                        height={240}
                                        draggable='false' />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={clickRight}
                        disabled={currentIndex >= props.listElem.length - itemsToShow || isAnimating}
                        className={`cursor-pointer hover:translate-x-2 transition-transform duration-300
                            ${currentIndex >= props.listElem.length - itemsToShow || isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <Image
                            src={currentIndex >= props.listElem.length - itemsToShow ? rightNotActive : rightActive}
                            alt='Вперёд'
                            width={60}
                            height={60}
                            draggable='false' />
                    </button>
                </div>
                <div className='flex justify-center mt-8 gap-2'>
                    {Array.from({ length: props.listElem.length - itemsToShow + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (!isAnimating) {
                                    setIsAnimating(true);
                                    setCurrentIndex(index);
                                }
                            }}
                            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300
                                ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </>
        </Container>
    );
}
