import React, { useState } from "react";
import HeroSection from "../UI/HeroSection";
import Menu from "./Menu";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroSection />
      <div className="menuSection mt-[1.8rem] md:mt-[3rem]">
        <Menu category={category} setCategory={setCategory} />
      </div>
    </>
  );
};

export default Home;
