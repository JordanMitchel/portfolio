import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const RRE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-x1 font-titleFont">
        Lead Developer{" "}
        <span className="text-textGreen tracking-wide">@RRE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {" "}
        January 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Leading a cross-functional team in the successful delivery of a React
          TypeScript and C# .NET 6 project, overseeing the entire software
          development lifecycle. Collaborated with team members to define
          project milestones, allocate resources, and establish best practices,
          resulting in on-time project completion and high-quality deliverables.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Orchestrated the deployment process using Docker containers, creating
          containerized application images and defining deployment
          configurations. Utilized Docker Compose for local development
          environments and orchestrated deployments using container
          orchestration platforms like Kubernetes, ensuring consistent and
          reproducible deployments across various environments.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Implemented continuous integration and deployment workflows using
          GitHub Actions, integrating with xUnit test frameworks to automate the
          execution of unit tests and generate test reports. Orchestrated code
          reviews and pull request workflows, utilizing GitHub Actions to ensure
          code quality and maintain project integrity.
        </li>
      </ul>
    </motion.div>
  );
};

export default RRE;
