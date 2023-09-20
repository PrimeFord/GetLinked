import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="h-[100vh] px-[12rem] relative border-b-2 border-solid border-[#FFFFFF2E] flex justify-between items-center"
    >
      <div className="h-fit w-[45%]">
        <Image src="/images/idea.png" width={490} height={480} alt="idea" />
      </div>
      <div className="h-fit w-[45%]">
        <p className="text-[2rem] font-[700]">Introduction to getlinked</p>
        <p className="text-[2rem] font-[700] text-[#D434FE] mb-6">
          tech Hackathon 1.0
        </p>
        <p className="font-montserrat text-[0.95rem] font-[400]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default Timeline;
