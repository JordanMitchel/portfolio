import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const UBS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Quant Developer{" "}
        <span className="text-textGreen tracking-wide">@UBS</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        June 2022 - December 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Built upon a robust ETL process using Scala, Python, and SQL to
          extract data from various sources, perform complex transformations,
          and load it into a centralized data warehouse, resulting in improved
          data quality and accessibility.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Utilized Scala to develop efficient and scalable data pipelines,
          leveraging libraries like Apache Spark ensuring seamless ingestion and
          processing of large volumes of data.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Developed Python scripts to perform data cleansing, normalization, and
          aggregation, utilizing libraries such as Pandas and NumPy to handle
          data manipulations and statistical analysis, ensuring data integrity
          and consistency in the ETL pipeline.
        </li>
      </ul>
    </motion.div>
  );
};

export default UBS;
