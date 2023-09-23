import React from "react";

const Starg = (props: any) => {
  return (
    <div className={`absolute ${props.className}`}>
      <img
        className={`animate-pulse ${props.aspect}`}
        src="/images/starg.png"
        alt="starg"
      />
    </div>
  );
};

export default Starg;
