import NotReadyLayout from "@/Layout/NotReadyLayout";
import React from "react";

const ComingSoon = () => {
  return <div>Sorry not Ready</div>;
};

export default ComingSoon;

ComingSoon.getLayout = function getLayout(page: JSX.Element) {
  return <NotReadyLayout>{page}</NotReadyLayout>;
};
