import React from "react";
import DownloadApp from "../components/DownloadApp";

const MobileApp = () => {
  return (
    <div
      className="container mobile-app-download
                px-[2rem] md:px-[3rem] xl:px-[14rem] 2xl:px-0
                flex flex-col
                py-[15rem] sm:py-[14rem] lg:py-[13rem]
                items-start
                "
    >
      <div>
        <h1 className="text-[3rem] sm:text-[3.8rem] md:text-[4.2rem] lg:text-[5rem] font-semibold">
          Hungry for more?
          <br />
          Download the Foodie App today!
        </h1>
        <DownloadApp />
      </div>
    </div>
  );
};

export default MobileApp;
