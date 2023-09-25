"use client";
import React, { useEffect, useState } from "react";
import RegisterButton from "../Components/Buttons/RegisterButton";
import ReadMore from "../Components/Buttons/ReadMore";
import Flare from "../Components/Effects/Flare";
import Sun from "../Components/Effects/Sun";
import Starp from "../Components/Effects/Starp";
import Starw from "../Components/Effects/Starw";
import Starg from "../Components/Effects/Starg";

const Overview = () => {
  const [hour, setHour] = useState(0o0);
  const [minute, setMinute] = useState(0o0);
  const [second, setSecond] = useState(0o0);

  //Typewriter Effect
  // var i = 0;
  // var txt = "Lorem ipsum typing effect!";
  // var speed = 50;
  // var type = "";
  // function typeWriter() {
  //   if (i < txt.length) {
  //     type += txt.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }

  //countDown
  var countDownDate = new Date("Nov 18, 2023 09:00:00").getTime();
  var x = setInterval(function () {
    var now: number = new Date().getTime();
    var distance: number = countDownDate - now;
    var days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours: number = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHour(hours + days * 24);
    var minutes: number = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    setMinute(minutes);
    var seconds: number = Math.floor((distance % (1000 * 60)) / 1000);
    setSecond(seconds);
    if (distance < 0) {
      clearInterval(x);
      return "EXPIRED";
    }
  }, 1000);
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <div
          id="overview"
          className="h-fit lg:h-[125vh] pl-[1rem] lg:pl-[8rem] pt-[6rem] lg:pt-0 pr-[1rem] lg:pr-[4rem] relative border-b-2 border-solid border-[#FFFFFF2E] lg:flex items-center"
        >
          <Flare
            className={"left-[4rem] top-[3rem] lg:left-[20rem] lg:top-[10rem]"}
          />
          <Flare
            className={"left-[65rem] hidden lg:flex top-[20rem] h-[20rem] z-10"}
          />
          <Starp
            className={"top-[3rem] left-[7rem] lg:top-[12rem] lg:left-[25rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[35rem] right-[3rem] lg:top-[35rem] lg:right-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starp
            className={"top-[3rem] left-[2rem] lg:top-[3rem] lg:left-[10rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[65rem] right-[3rem] lg:top-[40rem] lg:right-[20rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starg
            className={
              "bottom-[12rem] left-[3rem] lg:bottom-[18rem] lg:left-[39rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starg
            className={
              "bottom-[1rem] left-[1rem] lg:bottom-[8rem] lg:left-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <div className="w-[100%]">
            <p className="relative flex justify-center lg:justify-end font-montserrat lg:text-[2rem] font-[700] italic mb-8">
              <p>
                Igniting a Revolution in{" "}
                <span className=" ">HR Innovation</span>
              </p>
              <img
                className="absolute w-[8rem] top-[1.5rem] right-[1.6rem] lg:w-[15rem] lg:top-[2.5rem] animate-bounce lg:right-[-0.25rem]"
                src="/images/curve.png"
                alt="curve"
              />
            </p>
            <div className="lg:[100%] lg:mt-[4rem] flex relative">
              <div className="h-[100%] text-center lg:text-left">
                <p className="text-[1.5rem] lg:text-[4.5rem] font-[700] lg:leading-[6rem]">
                  getlinked Tech
                </p>
                <div className="w-[100%] text-[1.5rem] lg:text-[4.5rem] flex items-center justify-center lg:justify-start lg:text-left font-[700] lg:leading-[6rem]">
                  Hackathon <span className="text-[#D434FE]">1.0</span>
                  <div className="flex">
                    <img
                      className="h-[25px] w-[25px] lg:h-[75px] lg:w-[75px]"
                      src="/images/chain.png"
                      alt="link"
                    />
                    <img
                      className="h-[25px] w-[25px] lg:h-[68px] lg:w-[68px]"
                      src="/images/blast.png"
                      alt="blast"
                    />
                  </div>
                </div>
                <p className="lg:w-[60%] font-montserrat lg:text-[1.25rem] font-[400] mb-4 lg:mb-8">
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize{" "}
                </p>
                <img
                  className="absolute h-[1.5rem] w-[1.5rem] top-[-1rem] left-[15rem] lg:h-[4rem] lg:w-[3rem] lg:top-[-2rem] lg:left-[29rem]"
                  src="/images/bulb.png"
                  alt="bulb"
                />
                <RegisterButton />
                <div className="text-[2rem] flex justify-center lg:justify-start gap-4 lg:gap-1 lg:text-[4rem] mt-6 lg:mt-[3rem] font-unica_one">
                  <span>
                    {hour}
                    <sub className="text-[0.85rem]">H</sub>
                  </span>
                  <span>
                    {minute}
                    <sub className="text-[0.85rem]">M</sub>
                  </span>
                  <span>
                    {second}
                    <sub className="text-[0.85rem]">S</sub>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute h-fit right-0 lg:bottom-0">
            <img
              className="grayscale"
              src="/images/fpv.png"
              width={680}
              height={540}
              alt="fpv"
            />
            <img
              className="absolute z-10 top-[28rem] lg:top-0 h-[280px] w-[320px] lg:h-[600px] lg:w-[600px]"
              src="/images/neural.png"
              alt="neural"
            />
          </div>
        </div>
        <div className="lg:h-[85vh] px-[1.5rem] lg:py-[2rem] lg:px-[12rem] relative border-b-2 border-solid border-[#FFFFFF2E] lg:flex lg:justify-between lg:items-center pt-4 pb-8 lg:pt-0 lg:pb-0">
          <div className="relative h-[100%] lg:w-[50%] lg:flex lg:items-center">
            <img src="/images/idea.png" width={490} height={480} alt="idea" />
            <img
              className="absolute h-[2rem] lg:h-[4rem] bottom-[-1rem] left-[9rem] lg:bottom-[4rem] animate-pulse lg:left-[29rem]"
              src="/images/arrow.png"
              alt="arrow"
            />
          </div>
          <div className="h-fit lg:w-[45%] text-center lg:text-left mt-6 lg:mt-0">
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] lg:leading-6">
              Introduction to getlinked
            </p>
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] mb-2 lg:mb-4">
              tech Hackathon 1.0
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <div className="lg:h-[85vh] px-[1.5rem] lg:px-[12rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex flex-col-reverse lg:flex-row justify-between items-center pb-6 lg:pb-0">
          <Flare
            className={"left-[0rem] top-[2rem] lg:left-[24rem] lg:top-[8rem]"}
          />
          <Flare
            className={
              "left-[14rem] top-[24rem] lg:left-[72rem] lg:top-[23rem]"
            }
          />
          <Starp
            className={"top-[3rem] left-[2rem] lg:top-[3rem] lg:left-[10rem]"}
            aspect={"h-4 lg:h-6"}
          />

          <Starg
            className={
              "bottom-[1rem] left-[1rem] lg:bottom-[8rem] lg:left-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starg
            className={
              "bottom-[12rem] left-[3rem] lg:bottom-[18rem] lg:left-[39rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <div className="h-fit lg:w-[45%] text-center lg:text-left">
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] lg:leading-6">
              Rules and
            </p>
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] lg:b-4">
              Guidelines
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="h-[100%] lg:w-[55%] lg:flex items-center">
            <img
              className="h-[270px] w-[270px] lg:h-[480px] lg:w-[540px]"
              src="/images/rules.png"
              alt="rules"
            />
            <Sun
              className={"top-[6rem] right-[18.5rem] z-[-1] hidden lg:flex"}
            />
          </div>
        </div>
        <div className="h-fit px-[1.5rem] lg:px-[8rem] lg:pt-[5rem] pt-[2rem] lg:pb-[8rem] pb-[3rem] relative border-b-2 border-solid border-[#FFFFFF2E] lg:flex items-center justify-between">
          <Flare
            className={
              "left-[15rem] top-[52rem] lg:left-[15rem] lg:top-[25rem]"
            }
          />
          <Flare className={"lg:left-[70rem] lg:top-[45rem]"} />
          <Starw
            className={
              "top-[65rem] right-[3rem] lg:top-[40rem] lg:right-[20rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starp
            className={"top-[8rem] left-[5rem] lg:top-[12rem] lg:left-[25rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[35rem] right-[3rem] lg:top-[35rem] lg:right-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <div className="h-[100%] lg:w-[50%] flex items-center">
            <img
              src="/images/criteria.png"
              width={490}
              height={480}
              alt="criteria"
            />
            <Sun className={"top-[11rem] left-[12rem] hidden lg:flex z-[-1]"} />
          </div>
          <div className="h-fit lg:w-[45%] text-center lg:text-left">
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] lg:leading-6">
              Judging Criteria
            </p>
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] mb-4">
              Key attributes
            </p>
            <p className="font-montserrat text-[0.85rem] font-[400] mb-4">
              <span className="text-[#FF26B9]">Innovation and Creativity</span>:
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="font-montserrat text-[0.85rem] font-[400] mb-4">
              <span className="text-[#FF26B9]">Functionality</span>: Assess how
              well the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </p>
            <p className="font-montserrat text-[0.85rem] font-[400] mb-4">
              <span className="text-[#FF26B9]">Impact and Relevance</span>:
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="font-montserrat text-[0.85rem] font-[400] mb-4">
              <span className="text-[#FF26B9]">Technical Complexity</span>:
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="font-montserrat text-[0.85rem] font-[400] mb-8">
              <span className="text-[#FF26B9]">
                Adherence to Hackathon Rules
              </span>
              : Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <ReadMore />
          </div>
        </div>
        <div className="lg:h-[125vh] py-8 px-[1rem] lg:px-[8rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex flex-col-reverse lg:flex-row justify-between items-center">
          <Flare
            className={
              "left-[0rem] h-[6rem] w-[6rem] top-[6rem] lg:left-[24rem] lg:top-[12rem]"
            }
          />
          <Flare
            className={
              "lg:right-[0rem] left-[12rem] h-[6rem] w-[6rem] top-[27rem] lg:top-[38rem]"
            }
          />
          <Starp
            className={"top-[8rem] left-[5rem] lg:top-[12rem] lg:left-[25rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[35rem] right-[3rem] lg:top-[35rem] lg:right-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starg
            className={
              "bottom-[1rem] left-[1rem] lg:bottom-[8rem] lg:left-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <div className="h-[100%] lg:w-[40%] flex items-center">
            <img
              className="h-[480px] w-[540px] hidden lg:flex"
              src="/images/trophy.png"
              alt="trophy"
            />
          </div>
          <div className="h-fit lg:w-[55%] w-[100%] ">
            <div className="w-[60%] mx-auto text-center lg:text-left">
              <p className="text-[1.2rem] lg:text-[2rem] font-[700] lg:leading-6">
                Prizes and
              </p>
              <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] mb-4">
                Rewards
              </p>
              <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
              <img
                className="lg:hidden mt-6"
                src="/images/trophy.png"
                alt="trophy"
              />
            </div>
            <div className="lg:mt-[15rem] mt-[5rem] flex justify-center gap-4 lg:gap-0 lg:justify-between">
              <div className="relative w-[5rem] h-[8rem] lg:w-[11rem] lg:h-[18rem] bg-[#D434FE] bg-opacity-10 border border-[#D434FE] rounded-md text-center flex-col items-center">
                <img
                  className="lg:h-[150px] lg:w-[150px] absolute translate-y-[-50%] lg:translate-x-[13px]"
                  src="/images/silver.png"
                  alt="silver"
                />
                <p className="text-[0.65rem] lg:text-[1.8rem] mt-[3.5rem] lg:mt-[7.5rem] font-[600]">
                  2nd
                </p>
                <p className="text-[0.65rem] lg:text-[1.25rem]">Runner</p>
                <p className="text-[#D434FE] text-[0.65rem] lg:text-[1.8rem] font-[700]">
                  N300,000
                </p>
              </div>
              <div className="w-[6rem] static h-[9rem] lg:w-[11rem] lg:h-[20rem] bg-[#903AFF] bg-opacity-10 border border-[#903AFF] rounded-md text-center flex-col items-center">
                <img
                  className="w-[120px] h-[120px] lg:h-[248px] lg:w-[248px] absolute translate-y-[-50%] translate-x-[-0.8rem] lg:translate-x-[-2.25rem]"
                  src="/images/gold.png"
                  alt="gold"
                />

                <p className="text-[0.65rem] lg:text-[2rem] mt-[4rem] lg:mt-[7.5rem]">
                  1st
                </p>
                <p className="text-[0.65rem] lg:text-[1.5rem]">Runner</p>
                <p className="text-[#D434FE] text-[0.65rem] lg:text-[1.8rem] font-[700]">
                  N400,000
                </p>
              </div>
              <div className="relative w-[5rem] h-[8rem] lg:w-[11rem] lg:h-[18rem] bg-[#D434FE] bg-opacity-10 border border-[#D434FE] rounded-md text-center flex-col items-center">
                <img
                  className="lg:h-[150px] lg:w-[150px] absolute translate-y-[-50%] lg:translate-x-[13px]"
                  src="/images/bronze.png"
                  alt="bronze"
                />
                <p className="text-[0.65rem] lg:text-[2rem] mt-[3.5rem] lg:mt-[7.5rem]">
                  3rd
                </p>
                <p className="text-[0.65rem] lg:text-[1.5rem]">Runner</p>
                <p className="text-[#D434FE] text-[0.65rem] lg:text-[1.8rem] font-[700]">
                  N150,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[1rem] lg:px-[8rem] py-[2rem] lg:py-[5rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex-col justify-between items-center">
          <Flare
            className={
              "left-[0rem] h-[6rem] w-[6rem] top-[0rem] lg:left-[0rem] lg:top-[15rem] z-[10]"
            }
          />
          <Flare
            className={
              "left-[15rem] h-[6rem] w-[6rem] top-[15rem] lg:left-[70rem] lg:top-[35rem] z-[10]"
            }
          />
          <Starp
            className={"top-[8rem] left-[5rem] lg:top-[12rem] lg:left-[25rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starp
            className={"top-[3rem] left-[2rem] lg:top-[3rem] lg:left-[10rem]"}
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[65rem] right-[3rem] lg:top-[40rem] lg:right-[20rem]"
            }
            aspect={"h-4 lg:h-6"}
          />

          <div className="h-fit lg:w-[45%] mx-auto text-center">
            <p className="text-[1.2rem] lg:text-[2rem] font-[700]">
              Partners an Sponsors
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400] mt-2 lg:mt-0">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="w-[100%] lg:mt-[5rem] mt-[3rem] h-[12rem] lg:h-[30rem] flex justify-center items-center border border-[#D434FE] rounded-md text-center">
            <div className="relative w-[24rem] lg:w-[43rem] flex flex-wrap justify-center p-8 lg:justify-around ">
              <div className="absolute w-[1.5rem] h-[1rem] top-[5.5rem] left-[7.4rem] lg:w-[4rem] lg:h-[2rem] rounded-[50%] bg-[#150e28] lg:top-[9rem] lg:left-[13rem]"></div>
              <div className="absolute w-[1.5rem] h-[1rem] top-[5.5rem] left-[13.4rem] lg:w-[4rem] lg:h-[2rem] rounded-[50%] bg-[#150e28] lg:top-[9rem] lg:left-[26rem]"></div>
              <div className="w-[6rem] lg:w-[13rem] p-[1.3rem] h-[4rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-r-[1px] border-b-[1px] ">
                <img src="/images/liberty.png" alt="liberty" />
              </div>
              <div className="w-[6rem] p-[0.2rem] h-[4rem] lg:w-[13rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-[1px] border-t-0">
                <img src="/images/libertypay.png" alt="libertypay" />
              </div>
              <div className="w-[6rem] p-[1rem] h-[4rem] lg:w-[13rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-b-[1px] border-l-[1px]">
                <img src="/images/winwise.png" alt="winwise" />
              </div>
              <div className="w-[6rem] p-[1rem] h-[4rem] lg:w-[13rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-r-[1px] border-t-[1px]">
                <img src="/images/wisperwhite.png" alt="wisperwhite" />
              </div>
              <div className="w-[6rem] p-[0.2rem] h-[4rem] lg:w-[13rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-r-[1px] border-t-[1px] border-l-[1px]">
                <img src="/images/paybox.png" alt="paybox" />
              </div>
              <div className="w-[6rem] p-[0.2rem] h-[4rem] lg:w-[13rem] lg:p-[3rem] lg:h-[8rem] flex justify-center items-center border-[#D434FE] border-t-[1px] border-l-[1px]">
                <img src="/images/vuzualplus.png" alt="vuzualplus" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit px-[1rem] lg:px-[8rem] py-[2rem] lg:pt-[8rem] lg:pb-[8rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex flex-col lg:flex-row items-end justify-between">
          <Flare className={"left-[5rem] top-[50rem]"} />
          <Starg
            className={
              "bottom-[12rem] left-[3rem] lg:bottom-[18rem] lg:left-[39rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starw
            className={
              "top-[35rem] right-[3rem] lg:top-[35rem] lg:right-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <Starg
            className={
              "bottom-[1rem] left-[1rem] lg:bottom-[8rem] lg:left-[15rem]"
            }
            aspect={"h-4 lg:h-6"}
          />
          <div className="h-fit text-center lg:text-left px-4 lg:w-[45%]">
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] lg:leading-6">
              Privacy Policy and
            </p>
            <p className="text-[1.2rem] lg:text-[2rem] font-[700] text-[#D434FE] lg:mb-4">
              Terms
            </p>
            <p className="font-montserrat text-[0.8rem] font-[200]">
              Last updated on September 12, 2023
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400] mt-8">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className="lg:p-[4rem] py-8 px-[1rem] font-montserrat bg-[#fff] bg-opacity-5 border border-[#D434FE] rounded-md flex-col mt-[4rem]">
              <p className="text-[0.85rem] lg:text-[0.95rem] font-[400]">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className="text-[#D434FE] text-left text-[0.9rem] lg:text-[1rem] font-[700] mt-6">
                Licensing Policy
              </p>
              <p className="text-left text-[0.75rem] lg:text-[0.95rem] font-[700] mt-2">
                Here are terms of our Standard License:
              </p>
              <div className="mt-4 text-left text-[0.85rem] lg:text-[1rem]">
                <div className="flex text-[0.85rem] lg:text-[1rem] items-start gap-3">
                  <img
                    src="/images/checkmark.png"
                    className="h-4 w-4 mt-1"
                    alt="checkmark"
                  />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="flex text-[0.85rem] lg:text-[1rem] items-start gap-3 mt-6">
                  <img
                    src="/images/checkmark.png"
                    className="h-4 w-4 mt-1"
                    alt="checkmark"
                  />
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
              <div className="w-[100%] text-center mt-6">
                <ReadMore />
              </div>
            </div>
          </div>
          <div className="h-[100%] mt-[7rem] lg:mt-0 relative lg:w-[50%] flex items-center">
            <img
              className="p-[2rem] lg:p-0]"
              src="/images/lock.png"
              alt="lock"
            />
            <img
              src="/images/vault.png"
              className="absolute p-[3rem] lg:p-0 top-[-6rem] left-4 lg:top-[-12rem] lg:left-[2rem]"
              alt="lock"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
