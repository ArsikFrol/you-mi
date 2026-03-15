import AppYouMi from "@/components/AppYouMi";
import EmergencyAssistance from "@/components/EmergencyAssistance";
import FourStepsForMeeting from "@/components/FourStepsForMeeting";
import Header from "@/components/Header";
import Hugs from "@/components/Hugs";
import NotAlone from "@/components/NotAlone";
import QualifiedSpecialists from "@/components/QualifiedSpecialists";
import QuestionsAnswers from "@/components/QuestionsAnswers";
import ThreeElem from "@/components/UI/ThreeElem";

export default function Home() {
  return (
    <>
      <Header />
      <Hugs />
      <ThreeElem listElem='home' title='Онлайн-психотерапия становится комфортнее' />
      <NotAlone />
      <QualifiedSpecialists />
      <FourStepsForMeeting />
      <QuestionsAnswers />
      <AppYouMi />
      <EmergencyAssistance />
    </>
  );
}
