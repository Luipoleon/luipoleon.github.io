import Image from "next/image";
import PersonalInfo from "./components/PersonalInfo";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main >
      <PersonalInfo />
      <MainContent />
      <NavBar />
    </main>
  );
}
