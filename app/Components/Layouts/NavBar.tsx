"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { navInfo } from "../../Utility/data";
import RegisterButton from "../Buttons/RegisterButton";
import Logo from "../Logo/Logo";

const NavBar = (props: any) => {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = useState(false);
  if (typeof window !== "undefined") {
    let prev = window.scrollY;
    const navBg = () => {
      if (window.scrollY >= 85) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    const navPos = () => {
      let currenSc = scrollY;
      if (prev > currenSc || currenSc === 0) {
        setVisible(true);
      }
      if (prev < currenSc) {
        setVisible(false);
      }
      prev = currenSc;
    };
    useEffect(() => {
      window.addEventListener("scroll", navBg);
      window.addEventListener("scroll", navPos);
      setVisible(true);
    });
  } else {
    console.log("Dom Undefined");
  }
  return (
    <nav
      className={`h-[4.5rem] lg:h-[7rem] fixed top-0 ${
        props.border
      } border-[#FFFFFF2E] lg:pt-[1.5rem] w-[100%] px-[2rem] lg:px-[8rem] flex items-center justify-between z-30 transition duration-700 ${
        navbar ? "bg-[#150e28]" : "bg-transparent"
      } ${
        visible
          ? ""
          : "transition-all duration-1000 translate-y-[-7rem] ease-in-out"
      }`}
    >
      <Logo />
      <div className="w-[35%] hidden lg:flex justify-around">
        {navInfo.map((e, i) => (
          <Link
            className="text-[1rem] font-[400] hover:text-[#D434FE]"
            key={i}
            href={e.route}
          >
            {e.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">
        <RegisterButton />
      </div>
      <div
        className="hamburger flex flex-col scale-75 cursor-pointer z-50 lg:hidden"
        onClick={() => props.setToggle(!props.toggle)}
      >
        <span
          className={`bar block w-[14px] h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out bg-[#fff] ${
            !props.toggle && "transform translate-y-2 rotate-45"
          }`}
        ></span>
        <span
          className={`bar block w-[28px] h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out bg-[#fff] ${
            !props.toggle &&
            "transform translate-y-0 -translate-x-[2px] -rotate-45"
          }`}
        ></span>
        <span
          className={`bar block w-[14px] self-end h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out bg-[#fff] ${
            !props.toggle &&
            "transform -translate-y-[8px] -translate-x-[4px] rotate-45 bg-[#FBFBFB]"
          }`}
        ></span>
      </div>
      <div
        className={`w-[100%] fixed h-[110vh] top-[0rem] pt-[5rem] text-left px-[3rem] text-[1.25rem] ease-in-out bg-[#150e28] backdrop-blur-lg lg:hidden ${
          props.toggle
            ? "right-[-100%] duration-700 ease-in-out"
            : "transition-all duration-700 ease-in-out right-0"
        } `}
      >
        {navInfo.map((e, i) => (
          <div key={i} className="my-[2rem] ease-in-out">
            <a href={e.route} onClick={() => props.setToggle(true)}>
              {e.name}
            </a>
          </div>
        ))}
        <RegisterButton />
      </div>
    </nav>
  );
};

export default NavBar;
