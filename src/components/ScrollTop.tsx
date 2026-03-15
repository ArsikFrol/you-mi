'use client'

import Image from "next/image"
import React from 'react';

import arrowScrollTop from '../../public/arrowScrollTop.png'

export default function ScrollTop() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className='w-[50px] h-[50px] rounded-[9999px] left-[30px] bottom-[20px] fixed bg-[rgba(74,70,117,0.2)]
            hover:scale-105 transition-transform duration-300 cursor-pointer'
            onClick={scrollToTop}>
            <Image style={{ transform: 'rotate(270deg)' }}
                className="mx-auto py-[10px]"
                src={arrowScrollTop} alt='' width={30} height={30} draggable='false' />
        </div>
    )
}