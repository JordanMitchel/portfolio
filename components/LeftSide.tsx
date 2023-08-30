import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdKayaking } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import React from "react";

function LeftSide() {
  return (
    // class="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/JordanMitchel"
          title="My Github"
          target="_blank"
        >
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-mitchel-88416a94/"
          title="My LinkedIn"
          target="_blank"
        >
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="/ComingSoon" title="The Paddle Site!" target="_blank">
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <MdKayaking />
          </span>
        </a>
        <a
          href="https://discord.gg/EDqKEvgx"
          title="The Paddle Discord"
          target="_blank"
        >
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsDiscord />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;
