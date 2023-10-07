import React from "react";
import htmlCss from "../assets/icons.svg";
import jsIcon from "../assets/js.svg";
import reactIcon from "../assets/reactIcon.svg";
import tailwindIcon from "../assets/tailwind.svg";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={!isDarkMode ? "bg-slate-100" : "bg-black text-white"}>
      <div className="flex flex-col items-center md:justify-center md:mr-auto py-32 space-y-3">
        <h1 className="text-4xl text-center font-medium  py-3">
          Wellcome to my portfolio website
        </h1>

        <div>
          <h1 className=" text-4xl md:text-6xl font-bold text-center text-gray-900 py-3 ">
            Front-End React Developer
          </h1>
          <div className="text-center px-3 text-xl space-x-4">
            <p>
              Hello, I'm Amlakie Temesegen. A passionate Front-end React
              Developer
            </p>
      
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col space-y-5 md:space-y-0 items-center justify-center pb-10">
        <p className="border-r-4 md:border-r-gray-500 md:w-fit text-center md:text-start  md:px-2 text-xl">
          Tech Stack
        </p>
        <div className=" grid grid-cols-2 md:grid-flow-col  md:px-5">
          <img className=" py-2  px-2 transform transition-transform hover:scale-110  duration-500" src={htmlCss} alt="html and css icon" />
          <img className=" py-2 px-2 transform transition-transform hover:scale-110  duration-500" src={jsIcon} alt="js icon" />
          <img className="py-2 px-2  transform transition-transform hover:scale-110  duration-500" src={reactIcon} alt="react icon" />
          <img className="py-2 px-2  transform transition-transform hover:scale-110  duration-500" src={tailwindIcon} alt="tailwind icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
