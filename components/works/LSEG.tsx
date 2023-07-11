import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const LSEG = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Full stack Developer{" "}
        <span className="text-textGreen tracking-wide">@LSEG</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        June 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proficient in creating reusable and modular React components, adhering
          to best practices such as component composition, props validation, and
          utilizing React hooks for state management
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proficiency in state management using Redux and Redux Sagas,
          architecting scalable and maintainable applications. Successfully
          implemented advanced state management patterns.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Demonstrated expertise in utilizing Axios for seamless data fetching
          and manipulation in React applications, ensuring efficient data flow
          between frontend and backend.
        </li>
      </ul>
    </motion.div>
  );
};

export default LSEG;
