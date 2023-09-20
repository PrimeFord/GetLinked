// import Image from "next/image";

import NavBar from "./Components/NavBar";
import FAQS from "./Pages/FAQS";
import Overview from "./Pages/Overview";
import Timeline from "./Pages/Timeline";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    <>
      <NavBar />
      <Overview />
      <Timeline />
      <FAQS />
    </>
  );
}
