import Head from "next/head";
import React, { FC, ReactChild, ReactFragment, ReactPortal } from "react";
import Navbar from "../components/Navbars/NotReadyNavBar";
import { motion } from "framer-motion";
import LeftSide from "../components/LeftSide";
import Footer from "../components/Footer";
import RightSide from "../components/RightSide";

type Props = {
  children: JSX.Element;
};

const NotReadyLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Jordan Mitchel</title>
        <meta name="description" content="Generatd by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">{children}</div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotReadyLayout;
