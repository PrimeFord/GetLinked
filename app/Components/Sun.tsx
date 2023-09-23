import React from "react";

const Sun = (props: any) => {
  return (
    <div
      className={`absolute h-[7rem] w-[7rem] ${props.className} rounded-[50%] bg-gradient-to-r from-[#D434FE] to-[#903AFF]`}
    ></div>
  );
};

export default Sun;
