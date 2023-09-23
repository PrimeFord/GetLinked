import React from "react";

const Flare = (props: any) => {
  return (
    <div
      className={`absolute h-[6rem] w-[6rem] lg:h-[10rem] lg:w-[10rem] ${props.className} rounded-[50%] bg-[#D434FE] blur-[100px]`}
    ></div>
  );
};

export default Flare;
