import { NextPageWithLayout } from "@/types/layout";
import { getDefaultLayout } from "@/utils/getLayout";
import React from "react";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>fdsfds</h1>
      <p>dfsdf</p>
    </div>
  );
};

HomePage.getLayout = getDefaultLayout;

export default HomePage;
