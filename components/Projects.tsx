import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import next from "next/types";
import { BackTestingImg, BlogImg, SpotifyImg } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things I will build" titleNumber="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://nextamazon.reactbd.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={BlogImg}
                  alt="todoImg"
                />
              </div>
            </a>{" "}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project{" "}
              </p>
              <h3 className="text-2xl font-bold"> Blog Post</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A Blog post for visualizing my programming journey. All the
                things i <span className="text-textGreen">love</span>, and
                things I wish were{" "}
                <span className="text-textGreen">different</span>.
              </p>

              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>TypeScript</li>
                <li>MongoDb</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <TbBrandGithub />
                </a>{" "}
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://nextamazon.reactbd.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={SpotifyImg}
                  alt="spotifyImg"
                />
              </div>
            </a>{" "}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project{" "}
              </p>
              <h3 className="text-2xl font-bold"> Spotify Recommendations</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                <span className="text-textGreen">Spotify </span>
                recommendations based off who I currently listen to. To help me
                with those long car journeys.
              </p>

              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
                <li>Kafka</li>
                <li>PySpark</li>
                <li>Netlify Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <TbBrandGithub />
                </a>{" "}
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://nextamazon.reactbd.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={BackTestingImg}
                  alt="backTestingImg"
                />
              </div>
            </a>{" "}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project{" "}
              </p>
              <h3 className="text-2xl font-bold"> Back testing Analysis</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Back testing analysis using a{" "}
                <span className="text-textGreen">Renko</span> chart to filter
                out noise and analyse closing prices.
              </p>

              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
                <li>AWS</li>
                <li>Back testing</li>
                <li>Cloud Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <TbBrandGithub />
                </a>{" "}
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JordanMitchel/BlogPost"
                  target="_blank"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
