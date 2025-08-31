import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";

export const Footers = () => {
  return (
    <>
      <div className="bg-[var(--background-color)] ">
        <footer
          className="
                    footer
                    container 
                    mx-auto
                    px-[2rem] md:px-[3rem] xl:px-[14rem] 2xl:px-0
                    pt-[1.8rem] md:pt-[3rem] lg:pt-[4rem] xl:pt-[5rem]
                    pb-[1.8rem]
                    grid
                    items-center
                    lg:grid-cols-2
                    gap-[2.2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[3rem] xl:gap-[15rem]
          "
        >
          <div className="">
            <div className="flex justify-start items-center text-[#9929EA]">
              <span
                className="
                      text-[3.2rem] sm:text-[3.6rem] md:text-[4.6rem] xl:text-[5.2rem]
                      md:font-semibold
                      leading-none 
                      font-bold 
              "
              >
                foodie
              </span>
              <IoFastFoodSharp className="text-[3rem] md:text-[4.6rem] lg:text-[5.2rem]" />
            </div>
            <p
              className="
                    text-[1.1rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.8rem]
                    mt-[0.8rem] md:mt-[1.2rem] lg:mt-[1rem] xl:mt-[2.4rem]
                    md:tracking-wide
                    md:leading-[2.3rem] lg:leading-[2.7rem]
                    text-[#471396]   
            "
            >
              Our site features easy-to-follow guides, inspiring stories, and
              delicious photographs, making it the perfect destination for
              anyone passionate about food and sharing great meals.
            </p>
            <div
              className="
                      flex
                      gap-[1rem] md:gap-[2rem] lg:gap-[3rem]
                      mt-[0.8rem] sm:mt-[1.5rem] md:mt-[2rem] lg:mt-[3.5rem]
                      text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.5rem]
                      text-blue-500"
            >
              <FaFacebook />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div
            className="
                    flex
                    justify-between lg:justify-center
                    md:px-[4rem]
                    h-full
                    gap-[10rem] lg:gap-[13rem]"
          >
            <div className="flex flex-col gap-[0.2rem] md:gap-[1rem]">
              <h1 className="text-[1.4rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] xl:text-[3.2rem] md:font-semibold text-black ">
                Company
              </h1>
              <ul className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] text-[#471396]">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start h-full">
              <div className="flex flex-col gap-[0.2rem] md:gap-[1rem]">
                <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] xl:text-[3.2rem] text-black md:font-semibold text-nowrap">
                  Get In Touch
                </h1>
                <span className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] text-[#471396]">
                  +91 9999999999
                </span>
                <p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] text-[#471396]">
                  contact@gautam
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div
        className="
              bg-[#413f3f]
              text-[0.9rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.7rem]
              py-[1.3rem] sm:py-[2rem] md:py-[0.8rem] lg:py-[1.5rem]
              text-center
              text-white
            "
      >
        <p>
          Copyright 2025 © Foodie.com - All rights reserverd{" "}
          <span className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-[#C68EFD] font-semibold">
            Gautam
          </span>
        </p>
      </div>
    </>
  );
};

export default Footers;
