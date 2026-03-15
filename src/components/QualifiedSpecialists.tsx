import EducationTherapy from "./UI/EducationTherapy"
import Container from "./UI/Container"
import TitleCvalInvest from "./TitleCvalInvest"

export default function QualifiedSpecialists() {
    return (
        <Container relative>
            <>
                <TitleCvalInvest />
                <div className="text-(--text) text-[20px] font-normal
                    lg:w-[780px] 
                    md:w-[690px]">
                    Помимо серии собеседований и испытаний по разработанной нами методологии, 
                    психологи предоставляют необходимые документы:
                </div>
                <EducationTherapy />
            </>
        </Container>
    )
}