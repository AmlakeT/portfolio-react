import React from "react";
import {AiFillLinkedin} from "react-icons/ai"
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 md:px-20  grid grid-flow-row md:grid-flow-col justify-around font-bold  text-gray-700 bg-indigo-200 py-20">
     <p className="text-2xl md:text-3xl"> &copy; {currentYear}. All rights reserved.</p>
     <div className="flex mt-5 md:mt-0 justify-around  md:space-x-10">
      <AiFillLinkedin className=" translate hover:scale-110 duration-500 text-indigo-700" size={35} />
      <FiGithub className=" translate hover:scale-110 duration-500 text-indigo-700"  size={35} />
     </div>
    </footer>
  );
};

export default Footer;
