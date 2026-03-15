'use client'

import Header from "@/components/Header";
import useWebinars from "@/store/webinars/webinarsStore";
import SectionIdArchive from "@/components/SectionIdArchive";
import SectionIdUpcomingOnes from "@/components/SectionIdUpcomingOnes";

import PathFromLinks from "@/components/UI/PathFromLinks";
import Container from "@/components/UI/Container";

import { TRoute } from "@/types/routes/types";

import { usePathname } from "next/navigation";

export default function SectionIdPage() {
    const pathName: TRoute = usePathname() as TRoute

    const idElemFromListArchive = Number(pathName.split('/')[3]) - 1

    const {
        activeBtn,
        listArchive
    } = useWebinars()

    return (
        <>
            <Header white />
            <Container>
                <>
                    <PathFromLinks onePath="Категории" threePath={listArchive[idElemFromListArchive].title}
                        twoPath={activeBtn === 'archive' ? 'Архив' : 'Предстоящие'}
                        hideSearch={true} backTwo='/webinars' backThree="/webinars" />
                    {activeBtn === 'archive' &&
                        <SectionIdArchive />
                    }
                    {activeBtn === 'upcomingOnes' &&
                        <SectionIdUpcomingOnes />
                    }
                </>
            </Container>
        </>
    )
}