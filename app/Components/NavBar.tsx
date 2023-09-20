import Link from "next/link";
import React from "react";
import { navInfo } from "../Utility/data";
import RegisterButton from "./RegisterButton";

const NavBar = () => {
  return (
    <nav className="h-[7rem] bg-[#150e28] fixed top-0 border-b-2 border-[#FFFFFF2E] pt-[1.5rem] w-[100%] px-[8rem] flex items-center justify-between z-30">
      <p className="w-[30%] text-[2.25rem] font-[700]">
        get
        <span className="text-[#D434FE]">linked</span>
      </p>
      <div className="w-[35%] flex justify-around">
        {navInfo.map((e, i) => (
          <Link className="text-[1rem] font-[400]" key={i} href={e.route}>
            {e.name}
          </Link>
        ))}
      </div>
      <RegisterButton />
    </nav>
  );
};

export default NavBar;
