import React from "react";
import unisecImg from "../assets/unisec.png";
import newsImg from "../assets/opticNews.png";
import dataAnalyticsImg from "../assets/data.png";
import { Link, NavLink } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full md:px-32 py-20 ${
        !isDarkMode ? "bg-slate-50" : "bg-black text-white"
      }`}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="px-10 ">
          <h3 className="text-indigo-800 font-bold text-xl">PORTFOLIO</h3>
          <p className="text-2xl pt-3 font-bold text-gray-700">
            Every project represents a distinct and exclusive aspect of
            development.
          </p>
        </div>
        {/* project-1 */}
        <div
          className={` w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-5 md:px-10 ${
            !isDarkMode
              ? " bg-white "
              : "bg-black text-white border border-white"
          }`}
        >
          <Link to="https://optic-news.vercel.app/" target="_blank">
            <img
              className=" h-[350px] w-[100%] object-contain border"
              src={newsImg}
              alt=""
            />
          </Link>
          <div className="ml-10 w-[70%] flex items-center pt-10 flex-col">
            <h1 className="font-bold text-xl text-gray-700 mb-5">
              UNISEC-ETHIOPIA
            </h1>
            <p className=" text-justify">
              This news website privides timely news and updates to you. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Amet
              perferendis impedit non numquam vero ipsam?
            </p>
            <div className="flex mt-10 space-x-6 text-xl font-medium">
              <p>React</p>
              <p>Vanilla css</p>
            </div>
            <div className="mt-16">
              <NavLink
                to="https://github.com/AmlakeT/news-react"
                className="hover:text-indigo-600 flex items-center text-lg space-x-5"
              >
                Code
                <FiGithub />
              </NavLink>
            </div>
          </div>
        </div>

        {/* project-2 */}
        <div
          className={` w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-5 md:px-10 ${
            !isDarkMode
              ? " bg-white "
              : "bg-black text-white border border-white"
          }`}
        >
          <div className="ml-10 w-[70%] flex items-center pt-10 flex-col">
            <h1 className="font-bold text-xl text-gray-700 mb-5">
              UNISEC-ETHIOPIA
            </h1>
            <p className=" text-justify">
              Students enrolled in universities Ethiopia have the opportunity to
              engage in hands-on space projects across nation. It has a Back-end
              for UNISEC-Ethiopia website using express.js and MongoDB that have
              done by other guy's .
            </p>
            <div className="flex mt-10 space-x-6 text-xl font-medium">
              <p>React</p>
              <p>Vanilla css</p>
            </div>
            <div className="mt-16">
              <NavLink
                to="https://data-analytics-react.vercel.app/"
                className="hover:text-indigo-600 flex items-center text-lg space-x-5"
              >
                Code
                <FiGithub />
              </NavLink>
            </div>
          </div>
          <Link to="https://data-analytics-react.vercel.app/" target="_blank">
            <img
              className=" h-[350px] w-[100%] border"
              src={dataAnalyticsImg}
              alt=""
            />
          </Link>
        </div>

        {/* project-3 */}
        <div
          className={` w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-5 md:px-10 ${
            !isDarkMode
              ? " bg-white "
              : "bg-black text-white border border-white"
          }`}
        >
          <img className=" h-[350px] w-[100%] border" src={unisecImg} alt="" />
          <div className="ml-10 w-[70%] flex items-center pt-10 flex-col">
            <h1 className="font-bold text-xl text-gray-700 mb-5">
              UNISEC-ETHIOPIA
            </h1>
            <p className=" text-justify">
              Students enrolled in universities Ethiopia have the opportunity to
              engage in hands-on space projects across nation. It has a Back-end
              for UNISEC-Ethiopia website using express.js and MongoDB that have
              done by other guy's .
            </p>
            <div className="flex mt-10 space-x-6 text-xl font-medium">
              <p>React</p>
              <p>Vanilla css</p>
            </div>
            <div className="mt-16">
              <NavLink
                to="https://github.com/AmlakeT/UNISEC-ETHIOPIA"
                className="hover:text-indigo-600 flex items-center text-lg space-x-5"
              >
                Code
                <FiGithub />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
