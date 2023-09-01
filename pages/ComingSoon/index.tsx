import NotReadyLayout from "@/Layout/NotReadyLayout";
import React from "react";

const ComingSoon = () => {
  return (
    <section
      id="comingSoon"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <div className="h-[88vh] w-full mx-auto p-4 pl-60">
        <h1 className="text-5xl font-extrabold dark:text-white">
          Sorry not ready yet
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Coming soon!
          </small>
        </h1>
      </div>
    </section>
  );
};

export default ComingSoon;

ComingSoon.getLayout = function getLayout(page: JSX.Element) {
  return <NotReadyLayout>{page}</NotReadyLayout>;
};
