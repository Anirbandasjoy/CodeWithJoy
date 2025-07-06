import Banner from "@/components/home/banner";
import MaxWidth from "@/components/shared/maxWidth";
import React from "react";

const Home = () => {
  return (
    <div>
      <MaxWidth className="px-4 lg:px-0">
        <Banner />
      </MaxWidth>
    </div>
  );
};

export default Home;
