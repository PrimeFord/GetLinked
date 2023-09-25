import React from "react";
import Starg from "../Components/Effects/Starg";
import Starp from "../Components/Effects/Starp";
import Starw from "../Components/Effects/Starw";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="min-h-fit px-[2rem] py-[3rem] bg-[#150E28] lg:px-[8rem] lg:pt-[4rem] lg:pb-[5rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex-col justify-between items-center"
    >
      <Starp
        className={"top-[8rem] left-[5rem] lg:top-[12rem] lg:left-[25rem]"}
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
      <div className="h-fit lg:w-[45%] mx-auto text-center">
        <p className="text-[1.2rem] lg:text-[2rem] font-[700]">Timeline</p>
        <p className="lg:w-[65%] mx-auto font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="w-[100%] mt-[3rem]">
        <div className="hidden lg:flex flex-col justify-end">
          <div className="h-[10rem] flex justify-between items-end">
            <div className="lg:w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                Hackathon Announcement
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[7rem] after:w-1 after:top-[13rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                1
              </div>
            </div>
            <div className="w-[40%]">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[8rem] flex justify-between items-end">
            <div className="w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[5rem] after:w-1 after:top-[23.5rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                2
              </div>
            </div>
            <div className="lg:w-[40%] text-left">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                Teams Registration begins
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="h-[8rem] flex justify-between items-end">
            <div className="lg:w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                Teams Registration ends
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[5rem] after:w-1 after:top-[31.5rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                3
              </div>
            </div>
            <div className="w-[40%]">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[8rem] flex justify-between items-end">
            <div className="w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[5rem] after:w-1 after:top-[39.5rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                4
              </div>
            </div>
            <div className="w-[40%] text-left">
              <p className="text-[1.5rem] font-[700] text-[#D434FE] leading-6">
                Announcement of the accepted teams and ideas
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="h-[8rem] flex justify-between items-end">
            <div className="lg:w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE] leading-6">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[5rem] after:w-1 after:top-[47.5rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                5
              </div>
            </div>
            <div className="w-[40%]">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[8rem] flex justify-between items-end">
            <div className="lg:w-[40%] text-right">
              <p className="text-[1.5rem] font-[700] text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
            <div className="flex justify-end items-center after:absolute after:content-[''] after:bg-[#D434FE] after:h-[5rem] after:w-1 after:top-[55.5rem] after:left-[677px] ">
              <div className="w-[2rem] h-[2rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                6
              </div>
            </div>
            <div className="w-[40%] text-left">
              <p className="text-[1.5rem] font-[700] text-[#D434FE] leading-6">
                Demo Day
              </p>
              <p className="font-montserrat text-[0.95rem] font-[400]">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:hidden">
          <div className="ml-[0.7rem] mt-2 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className=" text-[0.85rem] lg:text-[0.95rem] font-[700] text-[#D434FE]">
              Hackathon Announcement
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              1
            </div>
            <p className="text-[0.85rem] lg:text-[0.95rem] font-[700] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
          <div className="ml-[0.7rem] mt-4 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              Teams Registration begins
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              2
            </div>
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
          <div className="ml-[0.7rem] mt-4 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              Teams Registration ends
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              3
            </div>
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
          <div className="ml-[0.7rem] mt-4 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              Announcement of the accepted teams and ideas
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              4
            </div>
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
          <div className="ml-[0.7rem] mt-4 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              Getlinked Hackathon 1.0 Offically Begins
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              5
            </div>
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
          <div className="ml-[0.7rem] mt-4 pl-[1.75rem] border-[#D434FE] border-l-2">
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              Demo Day
            </p>
            <p className="font-montserrat text-[0.85rem] lg:text-[0.95rem] font-[400]">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              6
            </div>
            <p className="font-[700] text-[0.85rem] lg:text-[0.95rem] text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
