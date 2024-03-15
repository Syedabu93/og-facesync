import React from "react";
import { TiMessages } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

function Topnav() {
  return (
    <div className="bg-black">
    <div className="flex bg-black justify-between lg:w-10/12 mx-auto px-5">
      <div className="">
        <ul className="flex  text-slate-200">
          <li className="flex hover:text-pink-600  mt-2">
          <TiMessages className="mx-3 my-1 text-xl"/>
            info@facesync.app
          </li>
          <li className="flex pl-6  hover:text-pink-600 mt-2 ">
          <FaPhoneAlt className="mx-3 my-1 "/>
            +91 8270099990
          </li>
        </ul>
      </div>

      <div className="md:block hidden ">
        <ul className="flex space-x-4">
          <li className="bg-slate-50 rounded-full w- border-4 border-sky-600 mt-2 hover:bg-slate-300">
            <FaFacebook className="text-blue-600 " />
          </li>
          <li className="bg-slate-50 white rounded-full border-4 mt-2 ml-2 hover:bg-slate-300">
            <CiLinkedin  className="text-blue-500" />
          </li>
          <li className="bg-rose-300 rounded-full border-4 border-rose-300 mt-2 ml-2 hover:bg-slate-300">
          <FaInstagram />
          </li>
          <li className="bg-slate-50 rounded-full border-4 border-red-600 mt-2 ml-2 hover:bg-slate-300">
            <FaYoutube className="text-red-600"/>
          </li>
        </ul>
      </div>
    </div>
    </div>

  );
}
export default Topnav;