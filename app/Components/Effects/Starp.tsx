import React from "react";

const Starp = (props: any) => {
  return (
    <div className={`absolute ${props.className}`}>
      <img
        className={`animate-pulse ${props.aspect}`}
        src="/images/starp.png"
        alt="starp"
      />
    </div>
  );
};

export default Starp;
