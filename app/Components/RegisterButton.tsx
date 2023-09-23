"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterButton = () => {
  const router = useRouter();
  return (
    <button
      className="w-[10rem] h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6 hover:text-[1.1rem]
    "
      onClick={() => router.push("/register")}
    >
      Register
    </button>
  );
};

export default RegisterButton;
