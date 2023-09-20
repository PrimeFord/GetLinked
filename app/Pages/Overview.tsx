"use client";
import React from "react";
import RegisterButton from "../Components/RegisterButton";
import Image from "next/image";
import ReadMore from "../Components/ReadMore";

const Overview = () => {
  return (
    <div>
      <div
        id="overview"
        className="h-[125vh] pl-[8rem] pr-[4rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex items-center"
      >
        <div className="w-[100%]">
          <p className="flex justify-end font-montserrat text-[2.25rem] font-[700] italic mb-8">
            <span>
              Igniting a Revolution in{" "}
              <span
                className="relative after:absolute
            after:content-[''] after:bottom-[-3rem] after:left-0 after:h-[3rem] after:w-[100%] after:border-solid after:border-t-[0.5rem] after:border-[#FF26B9] after:rounded-[50%]"
              >
                HR Innovation
              </span>
            </span>
          </p>
          <div className="flex relative">
            <div className="h-[100%]">
              <p className="text-[4.5rem] font-[700] leading-[6rem]">
                getlinked Tech
              </p>
              <p className="text-[4.5rem] flex font-[700] leading-[6rem]">
                Hackathon <span className="text-[#D434FE]">1.0</span>
                <span className="flex">
                  <Image
                    src="/images/chain.png"
                    width={86}
                    height={86}
                    alt="link"
                  />
                  <Image
                    src="/images/blast.png"
                    width={86}
                    height={86}
                    alt="blast"
                  />
                </span>
              </p>
              <p className="w-[60%] font-montserrat text-[1.25rem] font-[400] mb-8">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize{" "}
              </p>
              <RegisterButton />
              <p className="text-[4rem] mt-[3rem] font-unica_one">
                00<sub className="text-[0.85rem]">H</sub>00
                <sub className="text-[0.85rem]">M</sub>00
                <sub className="text-[0.85rem]">S</sub>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute h-fit right-0 bottom-0">
          {/* bg-[url('/images/neural.png')] */}
          <Image
            className="grayscale"
            src="/images/fpv.png"
            width={680}
            height={540}
            alt="fpv"
          />
          <Image
            className="absolute z-10 top-0"
            // bg-[#903AFF] bg-opacity-10 shadow-[3rem]
            src="/images/neural.png"
            width={620}
            height={600}
            alt="neural"
          />
        </div>
      </div>
      <div className="h-[85vh] px-[12rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex justify-between items-center">
        <div className="h-[100%] w-[50%] flex items-center">
          <Image src="/images/idea.png" width={490} height={480} alt="idea" />
        </div>
        <div className="h-fit w-[45%]">
          <p className="text-[2rem] font-[700] leading-6">
            Introduction to getlinked
          </p>
          <p className="text-[2rem] font-[700] text-[#D434FE] mb-4">
            tech Hackathon 1.0
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="h-[85vh] px-[12rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex justify-between items-center">
        <div className="h-fit w-[45%]">
          <p className="text-[2rem] font-[700] leading-6">Rules and</p>
          <p className="text-[2rem] font-[700] text-[#D434FE] mb-4">
            Guidelines
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="h-[100%] w-[55%] flex items-center">
          <Image src="/images/rules.png" width={540} height={480} alt="rules" />
        </div>
      </div>
      <div className="h-fit px-[8rem] pt-[5rem] pb-[8rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex items-center justify-between">
        <div className="h-[100%] w-[50%] flex items-center">
          <Image
            src="/images/criteria.png"
            width={490}
            height={480}
            alt="criteria"
          />
        </div>
        <div className="h-fit w-[45%]">
          <p className="text-[2rem] font-[700] leading-6">Judging Criteria</p>
          <p className="text-[2rem] font-[700] text-[#D434FE] mb-4">
            Key attributes
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400] mb-4">
            <span className="text-[#FF26B9]">Innovation and Creativity</span>:
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400] mb-4">
            <span className="text-[#FF26B9]">Functionality</span>: Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400] mb-4">
            <span className="text-[#FF26B9]">Impact and Relevance</span>:
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400] mb-4">
            <span className="text-[#FF26B9]">Technical Complexity</span>:
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="font-montserrat text-[0.95rem] font-[400] mb-8">
            <span className="text-[#FF26B9]">Adherence to Hackathon Rules</span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
          </p>
          <ReadMore />
        </div>
      </div>
      <div className="h-[125vh] px-[8rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex justify-between items-center">
        <div className="h-[100%] w-[40%] flex items-center">
          <Image
            src="/images/trophy.png"
            width={540}
            height={480}
            alt="trophy"
          />
        </div>
        <div className="h-fit w-[55%]">
          <div className="w-[60%] mx-auto">
            <p className="text-[2rem] font-[700] leading-6">Prizes and</p>
            <p className="text-[2rem] font-[700] text-[#D434FE] mb-4">
              Rewards
            </p>
            <p className="font-montserrat text-[0.95rem] font-[400]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className=" mt-[15rem] flex justify-between">
            <div className="relative w-[11rem] h-[18rem] bg-[#D434FE] bg-opacity-10 border border-[#D434FE] rounded-md text-center flex-col items-center">
              <Image
                className="absolute translate-y-[-50%]  translate-x-[13px] "
                src="/images/silver.png"
                width={150}
                height={150}
                alt="silver"
              />
              <p className="text-[2rem] mt-[7.5rem]">2nd</p>
              <p className="text-[1.5rem]">Runner</p>
              <p className="text-[#D434FE] text-[1.8rem] font-[700]">300,000</p>
            </div>
            <div className="w-[11rem] h-[20rem] bg-[#903AFF] bg-opacity-10 border border-[#903AFF] rounded-md text-center flex-col items-center">
              <Image
                className="absolute translate-y-[-50%] translate-x-[-2.25rem]"
                src="/images/gold.png"
                width={248}
                height={200}
                alt="gold"
              />
              <p className="text-[2rem] mt-[7.5rem]">1st</p>
              <p className="text-[1.5rem]">Runner</p>
              <p className="text-[#903AFF] text-[1.8rem] font-[700]">400,000</p>
            </div>
            <div className="relative w-[11rem] h-[18rem] bg-[#D434FE] bg-opacity-10 border border-[#D434FE] rounded-md text-center flex-col items-center">
              <Image
                className="absolute translate-y-[-50%]  translate-x-[13px] "
                src="/images/bronze.png"
                width={150}
                height={150}
                alt="bronze"
              />
              <p className="text-[2rem] mt-[7.5rem]">3rd</p>
              <p className="text-[1.5rem]">Runner</p>
              <p className="text-[#D434FE] text-[1.8rem] font-[700]">150,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
