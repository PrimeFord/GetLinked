import React from "react";

const Starw = (props: any) => {
  return (
    <div className={`absolute ${props.className}`}>
      <img
        className={`animate-pulse ${props.aspect}`}
        src="/images/starw.png"
        alt="starw"
      />
    </div>
  );
};

export default Starw;
