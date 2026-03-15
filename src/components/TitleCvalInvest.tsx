import Image from 'next/image';

import vector from '../../public/vector.png';

export default function TitleCvalInvest() {
  return (
    <div className="">
      <div className="text-[24px] text-(--text) font-semibold">Мы работаем только с</div>
      <div className="relative mb-5 lg:w-[1080px]">
        <div
          className="text-(--color-btn-and-title) font-extrabold
            lg:text-[40px]
            md:text-[35px]
            sm:text-[30px]">
          квалифицированными специалистами, которые прошли наш строгий отбор
        </div>
        <Image src={vector} alt="" width={321} height={11} draggable="false"
          className="absolute
            lg:right-[270px] lg:bottom-0
            md:right-[300px] md:bottom-[-5px]
            [@media(max-width:767px)_and_(min-width:722px)]:right-[50px]"
        />
      </div>
    </div>
  );
}
