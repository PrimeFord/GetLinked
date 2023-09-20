import Image from "next/image";
import React from "react";
import ReadMore from "../Components/ReadMore";

const FAQS = () => {
  return (
    <div
      id="faqs"
      className="h-fit pl-[12rem] pr-[8rem] pt-[6rem] pb-[4rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex items-center justify-between"
    >
      <div className="h-fit w-[40%]">
        <p className="text-[2rem] font-[700] leading-6">Frequently Ask</p>
        <p className="text-[2rem] font-[700] text-[#D434FE] mb-4">Question</p>
        <p className="font-montserrat w-[80%] text-[0.95rem] font-[400] mb-[3rem]">
          We got answers to the questions that you might want to ask about{" "}
          <span className="font-[700]">getlinked Hackathon 1.0</span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I work on a project I started before the hackathon?</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens if I need help during the hackathon?</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens if I don't have an idea for a project?</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I join a team or do I have to come with one?</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>What happens after the hackathon ends</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
        <p className="font-montserrat text-[0.95rem] flex items-center justify-between font-[400] border-b-2 border-[#D434FE] pb-2 mb-6">
          <p>Can I work on a project I started before the hackathon?</p>
          <span>
            <Image
              src="/images/plus.png"
              width={12}
              height={12}
              alt="question"
            />
          </span>
        </p>
      </div>
      <div className="h-[100%] w-[58%] flex items-center">
        <Image
          src="/images/question.png"
          width={600}
          height={480}
          alt="question"
        />
      </div>
    </div>
  );
};

export default FAQS;
