import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Navbar from "@/components/Navbars/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/Layout/Layout";

export default function Home() {
  return (
    <>
      <div className="h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Archive />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
