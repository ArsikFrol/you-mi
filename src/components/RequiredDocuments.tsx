import Container from "./UI/Container";
import EducationTherapy from "./UI/EducationTherapy";

export default function RequiredDocuments() {
    return (
        <Container>
            <>
                <div className="text-text text-[24px]
                    lg:w-[840px]
                    md:max-lg:w-[700px]">
                    Помимо серии собеседований и испытаний по разработанной нами методологии, психологи предоставляют
                </div>
                <div className="text-btn-and-title text-[40px] font-extrabold">
                    необходимые документы:
                </div>
                <EducationTherapy />
            </>
        </Container>
    )
}
