import React, { useEffect, useState } from "react";
import { menu_list } from "../assets/assets";

export const MenuCards = ({ name, image, category, setCategory }) => {
  return (
    <div
      onClick={() => {
        setCategory((prev) => (prev === name ? "All" : name));
        console.log(category);
      }}
      className="
            slide
            flex
            flex-col
            items-center 
            py-[2rem]
            gap-[0.8rem] md:gap-[1.7rem]
            selection:text-purple-900
            hover:scale-110 ease-in-out duration-180
      "
    >
      <img
        src={image}
        alt=""
        className={`${
          category === name
            ? "rounded-full border-[#9a29eac4] ease duration-120 border-[0.5rem] md:border-[0.6rem]"
            : ""
        } w-[15rem]`}
      />
      <span
        className="
                text-[1.5rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.3rem] 
                text-nowrap
                text-[#747474]
      "
      >
        {name}
      </span>
    </div>
  );
};

export default MenuCards;
