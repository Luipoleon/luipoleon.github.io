import Image from "next/image";
import PersonalInfo from "./components/PersonalInfo";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main >
      <PersonalInfo />
      <MainContent />
    </main>
  );
}
