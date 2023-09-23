import React from "react";
import Logo from "../Components/Logo";
import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="justify-between h-fit bg-[#100B20] px-[3.5rem] lg:px-[8rem] py-[3rem] lg:pt-[5rem] lg:pb-[2rem] relative">
      <div className="font-montserrat flex flex-col lg:flex-row justify-between mb-6 text-[0.85rem]">
        <div className="lg:w-[35%]">
          <div className="">
            <Logo />
          </div>
          <p className=" text-[0.85rem] lg:text-[0.95rem] font-[400] mt-2">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="mt-8 lg:mt-[4rem] text-[0.85rem] lg:text-[0.95rem] hover:text-[#D434FE]">
            <span className="border-r-[1px] border-solid border-[#D434FE] pr-3">
              Terms of Uses
            </span>
            <span className="border-l-[1px] border-solid border-[#D434FE] pl-3">
              Privacy Policy
            </span>
          </div>
        </div>
        <div className="lg:w-[45%] text-[0.85rem] lg:text-[0.95rem] flex flex-col lg:flex-row gap-6 mt-6 lg:mt-0 justify-between">
          <div className="lg:w-[45%] flex gap-2 flex-col justify-between">
            <p className="text-[#D434FE] text-[1rem]">Useful Links</p>
            <p className="hover:text-[#D434FE]">
              <Link href={"#overview"}>Overview</Link>
            </p>
            <p className="hover:text-[#D434FE]">
              <Link href={"#timeline"}>Timeline</Link>
            </p>
            <p className="hover:text-[#D434FE]">
              <Link href={"#faqs"}>FAQs</Link>
            </p>
            <p className="hover:text-[#D434FE]">
              <Link href={""}>Register</Link>
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[#D434FE]">Follow us</p>
              <Socials />
            </div>
          </div>
          <div className="lg:w-[45%] flex flex-col justify-start gap-4">
            <p className="text-[#D434FE] text-[1rem]">Contact Us</p>
            <div className="flex gap-3">
              <span>
                <img
                  className="h-[1.25rem] w-[1.25rem]"
                  src="/images/phone.png"
                  alt="phone"
                />
              </span>
              <p>+234 6707653444</p>
            </div>
            <div className="flex gap-3">
              <span>
                <img
                  className="h-[1.25rem] w-[1.25rem]"
                  src="/images/location.png"
                  alt="location"
                />
              </span>
              <p className="w-[50%]">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-montserrat text-[0.75rem] font-[200]">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
