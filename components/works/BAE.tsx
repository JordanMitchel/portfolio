import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const BAE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Software Engineer{" "}
        <span className="text-textGreen tracking-wide">@BAE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        October 2018 - October 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proficient in Cypress testing framework, designing and implementing
          end-to-end automated tests for web applications. Demonstrated
          expertise in writing robust test scripts, executing test suites, and
          generating comprehensive test reports, ensuring high-quality software
          releases and improved testing efficiency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Demonstrated expertise in utilizing GraphQL for efficient querying and
          manipulation of data, leveraging Apache Nifi to orchestrate data flows
          and transformations. Proficient in integrating GraphQL with Apache
          Kafka and HBase to facilitate real-time data streaming and storage,
          enabling seamless data processing and retrieval for large-scale
          applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Extensive experience in Python testing, utilizing frameworks such as
          pytest and unittest to develop and execute unit tests, integration
          tests, and regression tests. Proficient in leveraging mocking and
          patching techniques to isolate dependencies and ensure thorough code
          coverage, resulting in reliable and stable software solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default BAE;
