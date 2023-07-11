import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Santander = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@Santander</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        January 2022 - June 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Designed and developed visually appealing and intuitive user
          interfaces utilizing WPF, leveraging XAML and MVVM
          (Model-View-ViewModel) architecture to build on interactive desktop
          applications for financial analysis and risk management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Developed and implemented a robust credit risk engine using C# and
          Python, utilizing statistical models and machine learning algorithms
          to assess creditworthiness, resulting in accurate risk assessments and
          informed decision-making for lending institutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Designed and implemented backtesting frameworks using C# and Python,
          enabling rigorous testing and validation of trading strategies and
          risk models, resulting in improved decision-making and reduced
          exposure to market risks.
        </li>
      </ul>
    </motion.div>
  );
};

export default Santander;
