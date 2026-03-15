import AdvantagesWork from "@/components/AdvantagesWork";
import AnyOtherQuestions from "@/components/AnyOtherQuestions";
import FourStepsForGetStarted from "@/components/FourStepsForGetStarted";
import Header from "@/components/Header";
import PartTeam from "@/components/PartTeam";
import PracticeOnline from "@/components/PracticeOnline";
import QuestionsAnswers from "@/components/QuestionsAnswers";
import WaitingYou from "@/components/WaitingYou";

export default function psychologists() {
    return (
        <>
            <Header white />
            <PracticeOnline />
            <AdvantagesWork />
            <WaitingYou />
            <FourStepsForGetStarted />
            <QuestionsAnswers />
            <PartTeam />
            <AnyOtherQuestions />
        </>
    )
}