import Image from "next/image";

import Title from "./UI/Title";
import Container from "./UI/Container";


import RunningLine from "./RunningLine";

export default function NotAlone() {
    return (
        <Container relative purple fullWidth>
            <>
                <div className="text-(--text) text-[24px] font-semibold text-center
                    max-md:text-[22px]">Вместе мы справимся</div>
                <Title text="В YouMi вы не одни" marginNone />
                <div className="w-[580px] mx-auto mb-25 text-(--text) text-[20px] font-normal">
                    Профессиональные психологи помогут разобрать вопросы, которые вы не можете решить в одиночку:
                </div>
                <RunningLine />
            </>
        </Container>
    )
}