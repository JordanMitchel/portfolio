import React, { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          {" "}
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Movie Review System"
          des="A Movie review system leveraging Java and mongoDb for the backend services and the database, presenting the movie reviews via react"
          listItem={["Reactjs", "Java", "MongoDB"]}
          link=""
        />
        <ArchiveCard
          title="Uber Analytics"
          des="An Uber analysis system, covering results for Uber in a given area  checking fares as well as standard rates over a given time"
          listItem={["Python", "Django", "Kafka"]}
          link=""
        />
        <ArchiveCard
          title="Cocktail Website"
          des="Look through some of my favourite cocktails in London and the price and where you can find them!"
          listItem={["Reactjs", "Redux Toolkit", "Axios"]}
          link=""
        />
        <ArchiveCard
          title="Todo List"
          des="A simple NextJs ToDo List covering projects that I need to complete"
          listItem={["NextJs", "MongoDB", "Vercel"]}
          link=""
        />
        <ArchiveCard
          title="Data Analytics Dashboard"
          des="A MERN stack data analytics dashboard providing insights for digital marketting leveraging experience from a role before my programming career"
          listItem={["MongoDB", "React", "Node"]}
          link=""
        />
        <ArchiveCard
          title="Ecommerce"
          des="An ECommerce Platform providing the ability to buy and sell products. Using SingalR for real time updates through a front end back end and database"
          listItem={["Reactjs", ".NET 6", "TypeScript"]}
          link=""
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Hotel Management System"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Food Order App"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Restuarant App"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Amazon Clone"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Crypto Trading"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Tic Tac Toe"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Monte Carlo Option Pricing"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bible App"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Procrastination App"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Gym App"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
                listItem={["Reactjs", "Java", "MongoDB"]}
                link=""
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => {
              setShowMore(false);
            }}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setShowMore(true);
            }}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
