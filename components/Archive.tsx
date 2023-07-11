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
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Reactjs", "Java", "MongoDB"]}
          link=""
        />
        <ArchiveCard
          title="Uber Analytics"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Python", "Kafka"]}
          link=""
        />
        <ArchiveCard
          title="Cocktail Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Reactjs", "Redux Toolkit"]}
          link=""
        />
        <ArchiveCard
          title="Movie Review System"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Reactjs", "Java", "MongoDB"]}
          link=""
        />
        <ArchiveCard
          title="Movie Review System"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Reactjs", "Java", "MongoDB"]}
          link=""
        />
        <ArchiveCard
          title="Movie Review System"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
            aliquid reiciendis. Alias, ea vero dignissimos exercitationem quidem
            inventore iste id ex labore"
          listItem={["Reactjs", "Java", "MongoDB"]}
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
                title="Movie Review System"
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
                title="Movie Review System"
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
                title="Movie Review System"
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
                title="Movie Review System"
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
                title="Movie Review System"
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
                title="Movie Review System"
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
                title="Movie Review System"
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
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Movie Review System"
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
