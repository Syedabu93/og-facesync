import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import face from '../assets/facesync1.png';
import About from "./About";


function Footer() {
  return (
    <div className=" bg-black text-white border-t-4 font-Int">
      <div className="grid md:grid-cols-4  font-Int font-medium w-11/12 mx-auto">
        <div className="p-6 ">
          {/* <img src={face} alt="" className='w-44 rounded-lg' /> */}
          <div>
            <img src={face} className="w-72 ml-"></img>
          </div>
          <p className="mt-6  text-justify">
            Our platform seamlessly integrates AI-powered photo delivery through
            face recognition, ensuring that every moment matters and is captured
            with unparalleled precision and personalization.
          </p>
        </div>
        <div className="p-6">
          <p className="text-2xl font-Int font-bold ">
            CONTACT
          </p>
          <p className="mt-6 flex">
          <CiLocationOn className=" text-7xl "/>3rd Floor, New No. 75, 77 & 79, Lohmanradhri Towers, Egmore,
            Chennai, Tamil Nadu 600008
          </p>
          <p className="py-4 flex"><FaMailBulk className="text-2xl px-1"/>info@facesync.app</p>
          <p className="py-2 flex"><FaPhoneAlt className="text-2xl px-1" /> +91 82700 99990</p>
        </div>
        <div className="p-6">
          <p className="text-2xl font-Int font-bold ">
            IMPORTANT LINKS
          </p>
          <p className="mt-6 flex"><FaArrowRight className="text-2xl py-1" />Home</p>
          <p className="mt-4 flex"><FaArrowRight className="text-2xl py-1" />Testimonials</p>
          <p className="mt-4 flex" ><FaArrowRight  className="text-2xl py-1" />FAQ</p>
          <p className="mt-4 flex"><FaArrowRight  className="text-2xl py-1"  />
           <Link to='/About'>About us</Link> 
          </p>
          <p className="mt-4 flex"><FaArrowRight  className="text-2xl py-1" />How it works?</p>
          <p className="mt-4 flex"><FaArrowRight  className="text-2xl py-1" />  Blog</p>
          <p className="mt-4 flex"><FaArrowRight  className="text-2xl py-1" />Features</p>
          <p className="mt-4 flex"><FaArrowRight  className="text-2xl py-1" />Contact Us</p>
        </div>
        <div className="p-6 ">
          <p className="text-2xl font-Int font-bold ">
            FOLLOW US
          </p>
          <p className="text-4xl flex mt-6 gap-4"><FaFacebookSquare className=""/>
          <FaInstagram className="" />
          <FaYoutube className=" "/>
          <CiLinkedin />
          </p>
         
        </div>
      </div>
      <hr />
      <div className="text-center py-3 text-xl">
        <p>Powered by WHY Global Services</p>
      </div>
    </div>
   
  
  );
}

export default Footer;
