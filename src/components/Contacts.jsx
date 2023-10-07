import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {GrMapLocation} from "react-icons/gr"

const Contacts = () => {
  return (
    <div className="py-20 px-5 md:px-32">
      <h2 className="text-indigo-800 font-bold text-xl">Contacts</h2>
      <p className="text-2xl pt-3 font-bold text-gray-700">
        Feel free to reach out! Don't hesitate to contact me!{" "}
      </p>
      <div className="grid grid-flow-row md:grid-flow-col">
        <div className="flex items-center mt-10">
          <AiOutlineMail
            className="text-indigo-700 rounded-full border bg-white p-3 text-3xl "
            size={60}
          />
          <div className="pl-3">
            <p className="font-bold text-lg">Mail</p>
            <p className="text-gray-500">amxmulu123@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <GrMapLocation
            className="text-indigo-700 rounded-full border bg-white p-3 text-3xl "
            size={60}
          />
          <div className="pl-3">
            <p className="font-bold text-lg">Location</p>
            <p className="text-gray-500">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
