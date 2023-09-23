"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Socials from "../Components/Socials";
import Flare from "../Components/Flare";
import Starp from "../Components/Starp";
import Starw from "../Components/Starw";
import Starg from "../Components/Starg";
import NavBar from "../Components/NavBar";
import RegisterButton from "../Components/RegisterButton";
import { navInfo } from "../Utility/data";
import Link from "next/link";
import Logo from "../Components/Logo";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="h-fit px-[2rem] lg:px-[10rem] lg:pt-[7rem] lg:pb-[1rem] relative flex items-center justify-center">
      <nav
        className={`h-[4.5rem] lg:h-[7rem] fixed top-0 lg:pt-[1.5rem] w-[100%] px-[2rem] lg:px-[8rem] hidden lg:flex lg:items-center lg:justify-between z-30 `}
      >
        <Logo />
        <div className="w-[35%] hidden lg:flex justify-around">
          {navInfo.map((e, i) => (
            <Link className="text-[1rem] font-[400]" key={i} href={e.route}>
              {e.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <RegisterButton />
        </div>
      </nav>
      <Flare
        className={"left-[4rem] top-[3rem] lg:left-[5rem] lg:top-[10rem]"}
      />
      <Flare className={"left-[72rem] hidden lg:flex top-[25rem] h-[20rem]"} />
      <Starp
        className={"top-[3rem] left-[7rem] lg:top-[12rem] lg:left-[25rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starw
        className={"top-[35rem] right-[3rem] lg:top-[35rem] lg:right-[15rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starg
        className={"bottom-[1rem] left-[1rem] lg:bottom-[8rem] lg:left-[15rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <div className="w-[100%] mt-[3rem] lg:mt-0 flex flex-col lg:items-center lg:flex-row justify-between">
        <div className="lg:w-[20%] hidden lg:flex lg:flex-col gap-5">
          <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] mb-4">
            Get in touch
          </p>
          <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400] flex flex-col gap-3">
            <p className="w-[70%]">Contact Information</p>
            <p className="w-[70%]">27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>
          <div>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[700] text-[#D434FE] mb-2">
              Share on
            </p>
            <Socials />
          </div>
        </div>
        <div className="lg:w-[45%] h-[100%] ">
          <img
            className="h-8 absolute flex lg:hidden top-18 left-12"
            src="/images/back.png"
            alt="back"
            onClick={() => router.push("/")}
          />
          <div className="w-[100%] pt-[4rem] px-4 lg:p-[3rem] font-montserrat lg:bg-[#fff] lg:bg-opacity-5  rounded-md flex-col">
            <p className="text-[0.9rem] flex items-end lg:hidden lg:text-[1.2rem] font-[400] mb-4">
              Email us below to any question related to our event
            </p>
            <p className="text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE]">
              Questions or need assistance?
            </p>
            <p className="text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE] mb-4">
              Let us know about it!
            </p>
            <form className="w-[100%] text-[0.85rem] lg:text-[0.95rem] flex flex-col gap-6 text-[#fff]">
              <section>
                <input
                  className="w-[100%] bg-inherit border px-4 py-[0.5rem] rounded-[0.25rem]"
                  type="text"
                  name="firstname"
                  id="first_name"
                  placeholder="Firstname"
                />
              </section>
              <section>
                <input
                  className="w-[100%] bg-inherit border px-4 py-[0.5rem] rounded-[0.25rem]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Mail"
                />
              </section>
              <section className="">
                <textarea
                  className="w-[100%] bg-inherit border px-4 py-[0.5rem] rounded-[0.25rem]"
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Message..."
                ></textarea>
              </section>
              <section className="w-[100%] flex justify-center">
                <button
                  type="submit"
                  className="w-[8rem] lg:w-[10rem] h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6 hover:text-[1.1rem]"
                >
                  Submit
                </button>
              </section>
            </form>
            <div className="flex lg:hidden mt-6 flex-col items-center">
              <p className="flex lg:hidden font-montserrat text-[0.75rem] font-[700] text-[#D434FE]">
                Share on
              </p>
              <div className="scale-75">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
