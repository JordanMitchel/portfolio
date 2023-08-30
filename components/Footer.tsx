import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdKayaking } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a
        href="https://github.com/JordanMitchel"
        title="My Github"
        target="_blank"
      >
        <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-mitchel-88416a94/"
        title="My LinkedIn"
        target="_blank"
      >
        <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
          {" "}
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="/ComingSoon" title="The Paddle Site!" target="_blank">
        <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
          {" "}
          <MdKayaking />
        </span>
      </a>
      <a
        href="https://discord.gg/EDqKEvgx"
        title="The Paddle Discord"
        target="_blank"
      >
        <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
          {" "}
          <BsDiscord />
        </span>
      </a>
    </div>
  );
};

export default Footer;
