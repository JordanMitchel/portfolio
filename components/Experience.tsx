import React from "react";
import SectionTitle from "./SectionTitle";
import LSEG from "./works/LSEG";
import { useState } from "react";
import BAE from "./works/BAE";
import Santander from "./works/Santander";
import AE from "./works/AE";
import TA from "./works/TA";
import RRE from "./works/RRE";
import UBS from "./works/UBS";

enum workExperience {
  LSEG,
  AE,
  TA,
  UBS,
  SANTANDER,
  RRE,
  BAE,
}
const Experience = () => {
  const [workLSEG, setWorkLSEG] = useState(true);
  const [workAE, setWorkAE] = useState(false);
  const [workTA, setWorkTA] = useState(false);
  const [workUBS, setWorkUBS] = useState(false);
  const [workSantander, setWorkSantader] = useState(false);
  const [workRRE, setWorkRRE] = useState(false);
  const [workBAE, setWorkBAE] = useState(false);

  const handleClick = (workTitle: workExperience) => {
    if (workTitle === workExperience.LSEG) {
      setWorkLSEG(true);
      setWorkAE(false);
      setWorkTA(false);
      setWorkUBS(false);
      setWorkSantader(false);
      setWorkRRE(false);
      setWorkBAE(false);
    } else if (workTitle === workExperience.AE) {
      setWorkLSEG(false);
      setWorkAE(true);
      setWorkTA(false);
      setWorkUBS(false);
      setWorkSantader(false);
      setWorkRRE(false);
      setWorkBAE(false);
    } else if (workTitle === workExperience.TA) {
      setWorkLSEG(false);
      setWorkAE(false);
      setWorkTA(true);
      setWorkUBS(false);
      setWorkSantader(false);
      setWorkRRE(false);
      setWorkBAE(false);
    } else if (workTitle === workExperience.SANTANDER) {
      setWorkLSEG(false);
      setWorkAE(false);
      setWorkTA(false);
      setWorkUBS(false);
      setWorkSantader(true);
      setWorkRRE(false);
      setWorkBAE(false);
    } else if (workTitle === workExperience.RRE) {
      setWorkLSEG(false);
      setWorkAE(false);
      setWorkTA(false);
      setWorkUBS(false);
      setWorkSantader(false);
      setWorkRRE(true);
      setWorkBAE(false);
    } else if (workTitle === workExperience.BAE) {
      setWorkLSEG(false);
      setWorkAE(false);
      setWorkTA(false);
      setWorkUBS(false);
      setWorkSantader(false);
      setWorkRRE(false);
      setWorkBAE(true);
    } else if (workTitle === workExperience.UBS) {
      setWorkLSEG(false);
      setWorkAE(false);
      setWorkTA(false);
      setWorkUBS(true);
      setWorkSantader(false);
      setWorkRRE(false);
      setWorkBAE(false);
    }
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleClick(workExperience.LSEG)}
            className={`${
              workLSEG
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            RiskCare - LSEG
          </li>
          <li
            onClick={() => handleClick(workExperience.RRE)}
            className={`${
              workRRE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            RiskCare - RRE
          </li>
          <li
            onClick={() => handleClick(workExperience.UBS)}
            className={`${
              workUBS
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            RiskCare - UBS
          </li>
          <li
            onClick={() => handleClick(workExperience.SANTANDER)}
            className={`${
              workSantander
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            RiskCare - Santander
          </li>
          <li
            onClick={() => handleClick(workExperience.AE)}
            className={`${
              workAE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            FNZ - AE
          </li>
          <li
            onClick={() => handleClick(workExperience.TA)}
            className={`${
              workTA
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            FNZ - TA
          </li>
          <li
            onClick={() => handleClick(workExperience.BAE)}
            className={`${
              workBAE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            BAE
          </li>
        </ul>
        {workLSEG && <LSEG />}
        {workSantander && <Santander />}
        {workUBS && <UBS />}
        {workRRE && <RRE />}
        {workAE && <AE />}
        {workTA && <TA />}
        {workBAE && <BAE />}
      </div>
    </section>
  );
};

export default Experience;
