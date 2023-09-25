import React from "react";
import Starp from "../Components/Effects/Starp";
import Starw from "../Components/Effects/Starw";
import Starg from "../Components/Effects/Starg";

const FAQS = () => {
  return (
    <div
      id="faqs"
      className="min-h-fit px-[2rem] py-[2rem] lg:pl-[12rem] lg:pr-[8rem] lg:pt-[6rem] lg:pb-[4rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex flex-col lg:flex-row items-center justify-between"
    >
      <Starp
        className={"top-[3rem] left-[2rem] lg:top-[3rem] lg:left-[10rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starw
        className={"top-[65rem] right-[3rem] lg:top-[40rem] lg:right-[20rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starg
        className={
          "bottom-[12rem] left-[3rem] lg:bottom-[18rem] lg:left-[39rem]"
        }
        aspect={"h-4 lg:h-6"}
      />
      <div className="h-fit lg:w-[40%]">
        <p className="lg:text-[2rem] font-[700] lg:leading-6 text-center lg:text-left">
          Frequently Ask
        </p>
        <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] mb-4 text-center lg:text-left">
          Question
        </p>
        <p className="font-montserrat lg:w-[80%] text-[0.85rem] lg:text-[0.95rem] font-[400] mb-[3rem] text-center lg:text-left">
          We got answers to the questions that you might want to ask about{" "}
          <span className="font-[700]">getlinked Hackathon 1.0</span>
        </p>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I work on a project I started before the hackathon?</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens if I need help during the hackathon?</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens if I don't have an idea for a project?</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I join a team or do I have to come with one?</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens after the hackathon ends</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
        <div className="font-montserrat text-[0.85rem] lg:text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I work on a project I started before the hackathon?</p>
          <span>
            <img
              className="ease-in-out hover:animate-pulse hover:scale-x-125"
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </div>
      </div>
      <div className="relative h-[100%] lg:w-[58%] flex items-center">
        <Starp
          className={"top-[3.5rem] left-[5rem] lg:top-[3rem] lg:left-[5rem]"}
          aspect={"h-3 lg:h-5"}
        />
        <Starp
          className={"top-[1.5rem] left-[9rem] lg:top-[-2rem] lg:left-[15rem]"}
          aspect={"h-3 lg:h-5"}
        />
        <img
          className="lg:w-[600px] mt-[4rem] lg:mt-0 lg:h-[480px]"
          src="/images/question.png"
          alt="question"
        />
        <img
          className="absolute h-[3rem] lg:h-auto top-[2rem] left-[2rem] lg:top-[-4rem] lg:left-[2rem]"
          src="/images/qmark.png"
          alt="qmark"
        />
        <img
          className="absolute h-[4rem] lg:h-auto top-[-0.5rem] left-[6rem] lg:top-[-7rem] lg:left-[11rem]"
          src="/images/qmark.png"
          alt="qmark"
        />
        <img
          className="absolute h-[3rem] lg:h-auto top-[2rem] left-[11rem] lg:top-[-4rem] lg:left-[20rem]"
          src="/images/qmark.png"
          alt="qmark"
        />
      </div>
    </div>
  );
};

export default FAQS;
