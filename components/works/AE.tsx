import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const AE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Senior Software Developer{" "}
        <span className="text-textGreen tracking-wide">@AE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        October 2020 - October 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Implemented a .NET Core project, applying design patterns, SOLID
          principles, and coding standards to achieve modular and maintainable
          codebase. Enabled easier maintenance, code reuse, scalability, and
          testability while adhering to best practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Developed and enforced an effective Git strategy, utilizing branching
          models such as GitFlow or Feature Branching, and applying practices
          like frequent code commits, meaningful commit messages, and pull
          request reviews. Collaborated with the team to ensure smooth
          collaboration, version control, and seamless integration of code
          changes, enhancing team productivity and minimizing conflicts.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Leveraged Entity Framework to design and implement scalable and
          performant data access layers, utilizing code-first migrations, LINQ
          querying, and database indexing techniques. Ensured efficient data
          retrieval and manipulation operations, resulting in optimized
          application performance and data integrity.
        </li>
      </ul>
    </motion.div>
  );
};

export default AE;
