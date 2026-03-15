import AppYouMi from "@/components/AppYouMi";
import HowReferral from "@/components/HowReferral";
import NumberSessions from "@/components/NumberSessions";
import ReferralProgram from "@/components/ReferralProgram";
import Tariffs from "@/components/Tariffs";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Тарифы | You-Mi',
    description: 'Краткое описание вашего сайта',
}

export default function tariff() {
    return (
        <>
            <NumberSessions />
            <Tariffs />
            <AppYouMi />
            <ReferralProgram relative />
            <HowReferral />
        </>
    )
}
