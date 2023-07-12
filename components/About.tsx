import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { ProfileImg } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi there! My name is Jordan Mitchel and I enjoy web development. I
            started getting into coding in 2018, a year after I graduated. I
            liked the idea of being able to see the change i create rather than
            the longer R&D process associated with my degree in Aerospace
            Engineering - {"turns out I'm pretty good at explaining concepts"}
            in tech too!
          </p>
          <p>
            Throughout those 4 years, and I have enjoyed the privilege of
            working in finance, at{" "}
            <span className="text-textGreen"> Wealth Management Platform</span>{" "}
            innovating solutions, leading teams and striving for best practices
          </p>
          <p>
            {"I've Also experienced work at an"}
            <span className="text-textGreen"> Investment Banks</span> and a{" "}
            <span className="text-textGreen"> Stock Exchange </span> supporting
            ETL Processes and helping deliver timely solutions in the frontend
            and back end.
          </p>
          <p>
            Fast forward to today and I want to help people grow and develop in
            tech, learning from my experiences At the moment its free, All I ask
            is that you take an
            <span className="text-textGreen"> Assessment</span> so I can see
            {"where we're starting from!"}
          </p>
          <p> Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              C# (.Net 6)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Azure
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={ProfileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
