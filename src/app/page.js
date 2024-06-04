import Image from "next/image";
import PersonalInfo from "./components/PersonalInfo";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
    <PersonalInfo />
    <main >
      <MainContent />
    </main>
     <NavBar />
     </>
  );
}
