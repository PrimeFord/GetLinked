"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Socials from "../Components/Socials";
import Flare from "../Components/Effects/Flare";
import Starp from "../Components/Effects/Starp";
import Starw from "../Components/Effects/Starw";
import Starg from "../Components/Effects/Starg";
import RegisterButton from "../Components/Buttons/RegisterButton";
import { navInfo } from "../Utility/data";
import Link from "next/link";
import Logo from "../Components/Logo/Logo";
import axios from "axios";
import RegisterModal from "../Components/Modals/RegisterModal";

const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let base = "https://backend.getlinked.ai";
  const url = `${base}/hackathon/contact-form`;

  const data: {
    email: string;
    phone_number: string;
    first_name: string;
    message: string;
  } = {
    email: email,
    phone_number: phone,
    first_name: name,
    message: message,
  };
  const config: any = { "content-type": "application/json" };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "" && phone !== "" && email !== "" && message !== "") {
      setIsLoading(true);
      try {
        const response = await axios.post(url, data, config);
        console.log(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("sucessful");
        setShowModal(true);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    handleSubmit;
  }, []);
  return (
    <div className="h-fit px-[2rem] lg:px-[10rem] lg:pt-[7rem] lg:pb-[1rem] relative flex items-center justify-center">
      <RegisterModal
        class={"hidden"}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
      <nav
        className={`h-[4.5rem] lg:h-[7rem] fixed top-0 lg:pt-[1.5rem] w-[100%] px-[2rem] lg:px-[8rem] hidden lg:flex lg:items-center lg:justify-between z-30 `}
      >
        <Logo />
        <div className="w-[35%] hidden lg:flex justify-around">
          {navInfo.map((e, i) => (
            <Link
              className="text-[1rem] font-[400] hover:text-[#D434FE]"
              key={i}
              href={e.route}
            >
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
          <div className="w-[100%] pt-[8rem] px-4 lg:p-[3rem] font-montserrat lg:bg-[#fff] lg:bg-opacity-5 rounded-md flex-col">
            <p className="text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE]">
              Questions or need assistance?
            </p>
            <p className="text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE] mb-4">
              Let us know about it!
            </p>
            <p className="text-[0.9rem] flex items-end lg:hidden lg:text-[1.2rem] font-[400] mb-4">
              Email us below to any question related to our event
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-[100%] text-[0.85rem] lg:text-[0.95rem] flex flex-col gap-5 text-[#fff]"
            >
              <section>
                <input
                  className="w-[100%] bg-inherit border px-4 py-[0.45rem] rounded-[0.25rem]"
                  type="text"
                  name="firstname"
                  id="first_name"
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  placeholder="Firstname"
                  required
                />
              </section>
              <section className="col-span-2 lg:col-span-1">
                <input
                  className="w-[100%] bg-inherit border px-4 py-[0.45rem] rounded-[0.25rem]"
                  type="text"
                  name="phone_no"
                  id="phone_no"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter your phone number"
                  required
                />
              </section>
              <section>
                <input
                  className="w-[100%] bg-inherit border px-4 py-[0.45rem] rounded-[0.25rem]"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Mail"
                  required
                />
              </section>
              <section className="">
                <textarea
                  className="w-[100%] bg-inherit border px-4 py-[0.45rem] rounded-[0.25rem]"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e: any) => {
                    setMessage(e.target.value);
                  }}
                  rows={5}
                  placeholder="Message..."
                  required
                ></textarea>
              </section>
              <section className="w-[100%] flex justify-center">
                <button
                  type="submit"
                  className="w-[8rem] lg:w-[10rem] flex items-center justify-center h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6 hover:text-[1.1rem]"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin border-[3px] w-[1.5rem] h-[1.5rem] rounded-[50%] border-t-[#D434FE] "
                      viewBox="0 0 24 24"
                    ></svg>
                  ) : (
                    "Submit"
                  )}
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
