import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const TA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@TA</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        October 2019 - October 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Implemented task automation using C# and SQL stored procedures,
          reducing manual efforts and improving operational efficiency.
          Leveraged technologies such as SQL Server Agent and SQL Server
          Integration Services (SSIS) to schedule and execute automated tasks,
          ensuring timely and accurate data processing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Collaborated with cross-functional teams to analyze and understand
          business requirements, translating them into efficient database
          schemas and query structures. Utilized C# and SQL development skills
          to design and implement data models, stored procedures, and triggers
          that aligned with business needs and supported data-driven
          decision-making processes.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proficient in designing and optimizing SQL queries, utilizing indexing
          strategies, query plan analysis, and performance profiling tools to
          identify and resolve bottlenecks, resulting in significant
          improvements in query execution time and overall database performance.
        </li>
      </ul>
    </motion.div>
  );
};

export default TA;
