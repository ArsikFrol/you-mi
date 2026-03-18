import Header from "@/components/Header";
import Btn from "@/components/UI/Btn";
import Container from "@/components/UI/Container";

export default function NotFound() {
    return (
        <>
            <Header white />
            <Container minH>
                <>
                    <div className='bg-bg p-[100px] text-center rounded-2xl text-[40px]'>
                        <span>Страница не найдена 😩</span>
                    </div>
                    <div className='w-[360px] mx-auto mt-[100px]'>
                        <Btn textBtn="Вернуться на главную" widht={350} link="/" />
                    </div>
                </>
            </Container>
        </>
    );
}
