import React, { useContext, useState } from "react";
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { ThemeContext } from "../ThemeContext";
 
const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen ] = useState(false)
  const toggleNavBar =() =>{
      setIsNavOpen(!isNavOpen)
  }

  return (
    <header className={`border-b fixed left-0 top-0 w-full z-20 flex items-center justify-between md:justify-around py-5 shadow-md ${!isDarkMode ? "bg-white" : "bg-black text-white border-b-white"}`}>
      <div className="pl-5">
        <button className="px-4 py-2 border rounded " onClick={toggleTheme}>
          {!isDarkMode ? <MdDarkMode size={30} /> : <MdLightMode size={30} />}
        </button>
      </div>
      <div className="mr-56 hidden md:block">
        <ul className="flex items-center font-light justify-center text-2xl space-x-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>{" "}
          </li>
          <li>
            <a href="/contact">Contact</a>{" "}
          </li>
        </ul>
      </div>
      <div className='block pr-5 md:hidden' onClick={toggleNavBar}>
          {
            isNavOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
          }  
        </div>
        <div className= {isNavOpen ? 'fixed top-0 left-0 h-full w-[60%] border-r bg-white border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='mt-24 text-2xl flex items-center justify-center flex-col space-y-10'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>{" "}
          </li>
          <li>
            <a href="/contact">Contact</a>{" "}
          </li>
        </ul>
        </div>
    </header>
  );
};

export default Header;
