'use client';
import Image from "next/image";
import PersonalInfo from "./components/PersonalInfo";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  // Recibe the state of the sidebar
  const [sidebar, setSidebar] = useState(false);
  // Change this state from the NavBar component
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  // Pass the state to the NavBar component
  const sidebarState = sidebar ? 'navbar--open' : 'navbar--closed';
  return (
    <>
      <PersonalInfo />
    <main className = {sidebarState}>
      <MainContent />
      <NavBar toggleSidebar = {toggleSidebar} />
    </main>
   
     </>
  );
}
