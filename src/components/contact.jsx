import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

function Contact() {
  return (
    <div className="font-Int">
      <h1 className="m-5 text-3xl  font-bold text-sky-400">Contact Us</h1>
      <div className="grid md:grid-cols-2 lg:w-10/12 mx-auto">
        <div className="p-2">
          <h1 className=" text-2xl font-bold text text-sky-400">Get in Touch</h1>
          <label class="block">
            <input
              type="Name"
              name="Name"
              class="mt-1 px-3 py-3 bg-white border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Name"
            />
          </label>
          <label class="block">
            <input
              type="Mobile Number"
              name="Mobile Number"
              class=" px-3 py-3 bg-white border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Mobile Number"
            />
          </label>
          <label class="block">
            <input
              type="email"
              name="email"
              class="px-3 py-3 bg-white border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email Address"
            />
          </label>
          <label class="block">
            <input
              type="Message"
              name="Message"
              class="px-3 py-8 bg-white border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Message"
            />
          </label>
          <button class="bg-green-500 rounded-md px-6 py-3 text-white hover:bg-sky-400 hover:text-white  hover:duration-300 transition ease-in-out">
            Submit
          </button>
        </div>
        <div className="ml-5 p-2">
          <h1 className=" text-3xl font-bold text-sky-400">
            Join Us for Seamless Event Memories
          </h1>
          <p className="mt-5 text-gray-400">
            Let’s make your event one to remember!
          </p>
          <div className="flex">
            <FaLocationDot className="mt-10 h-10 w-12  text-sky-400 " />
            <h1 className="text-2xl mt-10 ml-5 font-bold text-sky-400 ">
              Address
            </h1>
          </div>
          <p className=" text-gray-400 ml-14">
            3rd Floor, New No. 75, 77 & 79, Lohmanradhri Towers, Egmore,
            Chennai, Tamil Nadu 600008
          </p>
          <div className="flex mt-10 ">
            <FaMailBulk className=" my-8 h-10 w-12  text-sky-400 " />
            <h1 className="text-2xl my-8 ml-5 font-bold text-sky-400 ">
              Mail Us
            </h1>
          </div>
          <div className="flex mt-10">
            <FaMobileScreenButton className=" h-10 w-12  text-sky-400 " />
            <h1 className="text-2xl ml-5 font-bold text-sky-400 ">Call Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;