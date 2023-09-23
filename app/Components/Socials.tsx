import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-2">
      <div>
        <img
          className="h-[1.5rem] w-[1.5rem]"
          src="/images/instagram.png"
          alt="instagram"
        />
      </div>
      <div>
        <Link href={"https://twitter.com/getLinkedai"} rel="noopener">
          <img className="h-[1.5rem] w-[1.5rem]" src="/images/x.png" alt="x" />
        </Link>
      </div>
      <div>
        <img className="h-[1.5rem]" src="/images/facebook.png" alt="facebook" />
      </div>
      <div>
        <Link href={""} rel="noopener">
          <img
            className="h-[1.5rem] w-[1.5rem]"
            src="/images/linkedin.png"
            alt="linkedin"
          />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
