import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import pcIcon from "../assets/pc.avif";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={` w-full py-28 ${!isDarkMode ? " bg-white" : "bg-black text-white"}`}>
      <div className="max-w-[1240] mx-5  md:mx-20  ">
        <div className=" grid grid-flow-row md:grid-flow-col md:justify-center  ">
          <img className="h-80 rounded pt-8 " src={pcIcon} alt="pc icon" />
          <div className=" px-2 md:px-20  mt-3 space-y-3">
            <h3 className="text-indigo-800 font-bold text-2xl">About Me</h3>
            <h1 className="text-3xl font-bold text-gray-700">An enthusiastic Front-end Developer </h1>
            <p className=" text-lg text-gray-500">
              As a Junior Front-End Developer, I have a strong set of skills in
              HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in
              creating and managing responsive websites that deliver a seamless
              user experience. My focus is on developing dynamic and captivating
              interfaces by writing efficient and well-organized code, while
              leveraging the latest tools and techniques. Additionally, I excel
              in working collaboratively with diverse teams to create
              exceptional web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
