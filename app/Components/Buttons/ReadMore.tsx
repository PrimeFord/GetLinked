"use client";
import Link from "next/link";
import React from "react";

const ReadMore = () => {
  return (
    <button className="w-[7rem] h-[3rem] flex justify-center items-center mx-auto px-4 lg:w-[10rem] text-[0.85rem] lg:text-[1rem] lg:h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6">
      <Link href={"https://www.getlinked.ai/"} rel="noopener" target="_blank">
        Read more
      </Link>
    </button>
  );
};

export default ReadMore;
