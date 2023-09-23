import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link
        href={"#"}
        className="w-[30%] text-[1.2rem] lg:text-[2.25rem] font-[700]"
      >
        get
        <span className="text-[#D434FE]">linked</span>
      </Link>
    </div>
  );
};

export default Logo;
