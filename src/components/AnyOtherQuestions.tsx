import Title from "./UI/Title";

export default function AnyOtherQuestions() {
    return (
        <div className="my-[100px]">
            <Title marginNone text="Остались вопросы?" />
            <div className='text-center text-text text-[24px] font-medium mb-[50px] mt-[10px]'>Задайте их в чат поддержки психологов</div>
            <div className='cursor-pointer rounded-2xl border border-btn-and-title w-[360px] text-center mx-auto leading-[70px] h-[70px] text-btn-and-title text-[20px] font-bold'>@youmipsy</div>
        </div>
    )
}
