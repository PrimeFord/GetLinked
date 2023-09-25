"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "./Components/Layouts/Footer";
import NavBar from "./Components/Layouts/NavBar";
import FAQS from "./Pages/FAQS";
import Overview from "./Pages/Overview";
import Timeline from "./Pages/Timeline";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <main>
          <NavBar
            border={"border-b-2"}
            toggle={toggle}
            setToggle={setToggle}
            setShowModal={setShowModal}
          />
          <Overview />
          <Timeline />
          <FAQS />
          <Footer />
        </main>
      ) : (
        ""
      )}
    </>
  );
}
