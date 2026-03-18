import CartScheduleSession from "@/components/CartScheduleSession";
import Header from "@/components/Header";
import Container from "@/components/UI/Container";

export default function page() {
    return (
        <>
            <Header white />
            <Container>
                <>
                    <div className='text-btn-and-title
                        text-[30px] font-extrabold mb-[30px]'>Запланировать сессию</div>
                    <div className="bg-(-bg) py-[50px] px-[40px]">
                        <CartScheduleSession />
                    </div>
                </>
            </Container>
        </>
    )
}
