import React from "react";
import unisecImg from "../assets/unisec.png";
import { NavLink } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="w-full md:px-32 py-20 bg-slate-50 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="px-10 ">
          <h3 className="text-indigo-800 font-bold text-xl">PORTFOLIO</h3>
          <p className="text-2xl pt-3 font-bold text-gray-700">
            Every project represents a distinct and exclusive aspect of
            development.
          </p>
        </div>
        {/* project-1 */}
        <div className=" w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-10  bg-white">
          <img className=" h-[350px] w-[100%]" src={unisecImg} alt="" />
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

         {/* project-1 */}
         <div className=" w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-10  bg-white">
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
          <img className=" h-[350px] w-[100%]" src={unisecImg} alt="" />

        </div>

         {/* project-1 */}
         <div className=" w-[100%] grid grid-flow-row md:grid-flow-col hover:scale-105 duration-500 mt-10 shadow-lg py-10 px-10  bg-white">
          <img className=" h-[350px] w-[100%]" src={unisecImg} alt="" />
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
