import Image from 'next/image';

import Container from './UI/Container';

import referralProgram from '../../public/referralProgram.png';

type Props = {
  paddingNone?: boolean;
  relative?: boolean;
  purple?: boolean;
  rounded?: boolean;
  insidePadding?: boolean;
};

export default function ReferralProgram(props: Props) {
  return (
    <Container paddingNoneY={props.paddingNone} purple={props.purple} rounded={props.rounded}
      insidePadding={props.insidePadding} relative={props.relative}>
      <div className='w-[580px]
          max-lg:mx-auto'>
         <div className='text-text text-[24px] font-semibold
               max-lg:text-center'> Реферальная программа</div>
         <div className='text-btn-and-title text-[40px] font-extrabold mb-5
              max-lg:text-center'>
            Позаботьтесь о других
         </div>
         <div className='w-[480px] text-text text-[18px]
            max-lg:text-center max-lg:mx-auto'>
          С помощью реферальной программы вы можете приглашать своих друзей по вашей индивидуальной
          ссылке и получать 500 рублей за каждого, кто пройдет первую сессию. <br /> <br />
          Деньги поступают на ваш баланс, с которого вы можете оплачивать сесии.
        </div>
        <Image src={referralProgram} alt='' width={420} height={400} draggable='false'
            style={{
            ...(props.insidePadding ? { right: '100px', top: '-100px' } : {}),
          }} className='absolute right-[50px] top-[-50px]
            xl:w-[420px] xl:h-[400px]
            lg:max-xl:w-[350px] lg:max-xl:h-[330px]
            max-lg:hidden' />
      </div>
    </Container>
  );
}
