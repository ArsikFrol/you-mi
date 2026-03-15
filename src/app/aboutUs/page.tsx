import Header from "@/components/Header";
import RequiredDocuments from "@/components/RequiredDocuments";
import TopSpecialists from "@/components/TopSpecialists";
import ThreeElem from "@/components/UI/ThreeElem";
import YouMiTogether from "@/components/YouMiTogether";
import History from '@/components/History'
import TheyWriteAboutUs from "@/components/TheyWriteAboutUs";

export default function aboutUs() {
    return (
        <>
            <Header />
            <YouMiTogether />
            <ThreeElem listElem='aboutUs' title='Наши ценности' />
            <TopSpecialists />
            <RequiredDocuments />
            <History />
            <TheyWriteAboutUs />
        </>
    )
}