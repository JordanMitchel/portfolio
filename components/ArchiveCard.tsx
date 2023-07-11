import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

interface IProps {
  title: string;
  link: string;
  des: string;
  listItem: string[];
}

const ArchiveCard = ({ title, link, des, listItem }: IProps) => {
  return (
    <a href={link} target="_blank">
      {" "}
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-x1 font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
