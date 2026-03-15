'use client'

import Link from "next/link"
import Image from "next/image"
import React from "react"

import Container from "./UI/Container"

import logo from '../../public/logo.png'
import materialsArrow from '../../public/MaterialsArrow.png'
import HeaderProfile from "./HeaderProfile"

type Props = {
   white?: boolean,
   showNav?: boolean
}

type TListElem = {
   id: number,
   link: string,
   text: string
}

const listNav: Array<TListElem> = [
   { id: 1, link: '/aboutUs', text: 'О нас' },
   { id: 2, link: '/tariff', text: 'Тарифы' },
   { id: 3, link: '/psychologists', text: 'Психологам' },
   { id: 4, link: '', text: 'Материалы' }
]

export default function Header(props: Props) {
   const [showMaterials, setShowMaterials] = React.useState(false)

   const clickMaterials = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowMaterials(!showMaterials);
   };

   React.useEffect(() => {
      const closeDropdown = () => setShowMaterials(false);

      if (showMaterials) {
         document.addEventListener('click', closeDropdown);
      }

      return () => {
         document.removeEventListener('click', closeDropdown);
      };
   }, [showMaterials]);


   /* Перенести NAV в HeaderProfile */


   return (
      <Container purple={props.white ? false : true} paddingNoneY>
         <div className='flex text-center justify-between py-5'>
            <Link onClick={() => setShowMaterials(false)} href='/'>
               <Image src={logo} alt='' width={170} height={44} loading="eager"/>
            </Link>
            {!props.showNav &&
               <div className='relative flex text-(--text) font-semibold 
                     xl:gap-[60px]
                     lg:gap-[40px]
                     max-lg:hidden'>
                  {
                     listNav.map((obj: TListElem, index: number) => {
                        return (
                           <Link
                              onClick={obj.id == 4 ? (e) => clickMaterials(e) : () => { }} 
                              href={obj.link}
                              className='leading-[50px] cursor-pointer 
                                 flex items-center gap-x-[10px] relative text-[16px]' 
                              key={index}>
                                 {obj.text}
                              <Image style={obj.id != 4 ? { display: 'none' } : {}} 
                                 src={materialsArrow} alt=''
                                 width={12} height={6} draggable='false' />
                           </Link>
                        )
                     })
                  }
                  {showMaterials &&
                     <div onClick={(e) => e.stopPropagation()}
                        className='absolute -right-[25px] top-[50px] flex flex-col py-[10px]
                                 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl z-10 bg-white'>
                        <Link href='/articles'
                           className='w-[180px] text-center leading-[50px] hover:scale-115 
                           transition-transform duration-100 cursor-pointer'>Статьи</Link>
                        <Link href='/webinars'
                           className='w-[180px] text-center leading-[50px] hover:scale-115 
                           transition-transform duration-100 cursor-pointer'>Вебинары</Link>
                     </div>
                  }
               </div>
            }
            <HeaderProfile />
         </div>
      </Container>
   )
}