"use client";
import Link from "next/link";
import React from "react";

const ReadMore = () => {
  return (
    <div>
      <Link
        href={"https://www.getlinked.ai/"}
        rel="noopener"
        target="_blank"
        className="w-[7rem] px-4 py-2 lg:w-[10rem] h-[2rem] text-[0.85rem] lg:text-[1rem] lg:h-[3rem] rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF]"
      >
        Read more
      </Link>
    </div>
  );
};

export default ReadMore;
