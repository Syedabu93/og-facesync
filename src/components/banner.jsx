import React from "react";
import "./navbar.css";
import slide from "../assets/face slider.gif";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import img42 from '../assets/image42.png';
import img43 from '../assets/image43.png';
import img44 from '../assets/image44.png';
import { useState } from "react";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";


function Banner() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [ModalOpen1, setModalOpen1] = useState(false);

  const handleClick = () => {
    setModalOpen(!ModalOpen);
  };

  const handleClick1 = () => {
    setModalOpen1(!ModalOpen1);
  };
  // const ulClick = () => {
  //   setOpen(false);
  // };
  return (
    <div className="" id="back">
      <div className="sm:grid sm:grid-row-1 lg:grid-cols-2 text-center md:text-left font-Int md:w-10/12 mx-auto lg:mt-10">
        <div className="p-5 sm:p-10 lg:p-9 ">
          <p className="text-2xl font-bold bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text">
            Moments Matter
          </p>
          <p className="text-[37px] text-black mt-3 font-extrabold">
            Face Recognition,
          </p>
          <p className="text-[37px] text-black  font-extrabold">
           AI Powered Photo Delivery
          </p>
          {/* <p className="text-2xl md:text-5xl font-Int font-bold py-3 bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text ">
            FaceSync...
          </p> */}

          <p className="text-xl text-slate-900 mt-3  font-normal">
          Snap a selfie, and get your photos delivered.
          </p>

          <div className=" grid  sm:grid-cols-3 gap-x-2 md:gap-x-5 mt-3 ">

            <p className= "add p-3 flex items-center rounded-sm justify-center">
              {/* <MdOutlineFlipCameraIos className="text-5xl mr-3" /> */}
              <img src={img42} alt="" className="w-9 mr-2.5"/>
              Face Recognition
            </p>
            <p className="add  p-3 flex items-center rounded-sm mt-2 sm:mt-0 justify-center">
              {/* <MdOutlinePrivacyTip className="text-5xl mr-3" />  */}
              <img src={img44} alt="" className="w-9 mr-2.5"/>
              Privacy &
              Security
            </p>
            <p className="add  p-3 flex items-center rounded-sm mt-2 sm:mt-0 justify-center">
              {/* <IoAnalyticsSharp className="text-5xl mr-3" /> */}
              <img src={img43} alt="" className="w-9 mr-2.5"/>
              Analytics & Insights
            </p>
          </div>
          
          <div className="mt-10 sm:space-x-6 :flex flex-row">

          <button onClick={handleClick1}
          className="text-white  text-md   bg-gradient-to-r from-purple-900 to-rose-700  px-5 py-2 rounded-sm">
            Create an Event
            </button>
         
          <button onClick={handleClick}
          className="mt-2 md:mt-0 text-white   text-md bg-gradient-to-r from-purple-900 to-rose-700  px-9 py-2 rounded-sm">
            Book Demo
          </button>
          </div>
          <Modal
              isOpen={ModalOpen1}
              onRequestClose={handleClick1}
              className="w-96 mx-auto  p-10  bg-white text-black rounded-md"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              {/* <div className="max-w-md mx-auto rounded p-6 shadow-md"> */}

              <form action="#" method="post">
                <div className="flex justify-end mb-4">
                  <p
                    className="flex text-2xl text-black font-bold"
                    onClick={handleClick1}
                  >
                    Create an Event
                    <MdCancel className="text-3xl ml-8" />
                  </p>
                </div>
                <div className="mb-4">
                  {/* <label
                    htmlFor="name"
                    className="block text-white text-lg font-bold mb-2 "
                  >
                    Name
                  </label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 rounded border-[1px] border-black outline-black focus:outline-none focus:border-blue-500 font-bold mt-3"
                    placeholder="Name"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
                    htmlFor="Phone"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Phone Number
                  </label> */}
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full border-[1px] border-black p-2 rounded  focus:outline-none focus:border-blue-500 font-bold mt-3"
                    placeholder="Mobile Number"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
                    htmlFor="email"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border-[1px] border-black p-2 rounded focus:outline-none focus:border-blue-500 font-bold mt-3"
                  ></input>

                  {/* <input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Company Name(optional)"
                    className="w-full border-[1px] border-black p-2 rounded focus:outline-none focus:border-blue-500 font-bold mt-3"
                  ></input> */}
                </div>

                <div className="mb-4">
                  {/* <label
              htmlFor="country"
              className="block text-white text-lg font-bold mb-2"
            >
              Services
            </label> */}
                  <select
                    id="country"
                    name="country"
                    // value={selectedCountry}
                    // onChange={handleCountryChange}
                    className="w-full border-[1px] border-black p-2 text-black font-bold text-opacity-70 rounded focus:outline-none focus:border-blue-500 mt-3"
                  >
                    <option value="">Event category</option>
                    <option value="">Weddings</option>
                    <option value="">Birthdays</option>
                    <option value=""></option>
                  </select>
                </div>
              
                   

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="justify-center bg-rose-700 text-white px-5 py-2 font-bold rounded  hover:bg-rose-500 hover:text-white "
                  >
                    Submit
                  </button>
                </div>
                {/* <button
          onClick={handleClick}
          className="mt-4 text-rose-700 bg-white font-bold px-6 py-1 ml-3 rounded hover:bg-rose-500 hover:text-white"
        >
          Close
        </button> */}
              </form>
            </Modal>
          
          <Modal
              isOpen={ModalOpen}
              onRequestClose={handleClick}
              className="w-96 mx-auto  p-10  bg-white text-black rounded-md"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              {/* <div className="max-w-md mx-auto rounded p-6 shadow-md"> */}

              <form action="#" method="post">
                <div className="flex justify-end mb-4">
                  <p
                    className="flex text-2xl text-black font-bold"
                    onClick={handleClick}
                  >
                    Book a FREE Demo
                    <MdCancel className="text-3xl ml-8" />
                  </p>
                </div>
                <div className="mb-4">
                  {/* <label
                    htmlFor="name"
                    className="block text-white text-lg font-bold mb-2 "
                  >
                    Name
                  </label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 rounded border-[1px] border-black outline-black focus:outline-none focus:border-blue-500 font-bold mt-3"
                    placeholder="Name"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
                    htmlFor="Phone"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Phone Number
                  </label> */}
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full border-[1px] border-black p-2 rounded  focus:outline-none focus:border-blue-500 font-bold mt-3"
                    placeholder="Mobile Number"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
                    htmlFor="email"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border-[1px] border-black p-2 rounded focus:outline-none focus:border-blue-500 font-bold mt-3"
                  ></input>

                  <input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Company Name(optional)"
                    className="w-full border-[1px] border-black p-2 rounded focus:outline-none focus:border-blue-500 font-bold mt-3"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
              htmlFor="country"
              className="block text-white text-lg font-bold mb-2"
            >
              Services
            </label> */}
                  <select
                    id="country"
                    name="country"
                    // value={selectedCountry}
                    // onChange={handleCountryChange}
                    className="w-full border-[1px] border-black p-2 text-black font-bold text-opacity-70 rounded focus:outline-none focus:border-blue-500 mt-3"
                  >
                    <option value="">Event category</option>
                    <option value="">Weddings</option>
                    <option value="">Birthdays</option>
                    <option value=""></option>
                  </select>
                </div>
                <input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Comment Box"
                    className="w-full border-[1px] border-black p-2 rounded focus:outline-none focus:border-blue-500 font-bold mt-3"
                  ></input>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="justify-center bg-rose-700 text-white px-5 py-2 font-bold rounded  hover:bg-rose-500 hover:text-white "
                  >
                    Submit
                  </button>
                </div>
                {/* <button
          onClick={handleClick}
          className="mt-4 text-rose-700 bg-white font-bold px-6 py-1 ml-3 rounded hover:bg-rose-500 hover:text-white"
        >
          Close
        </button> */}
              </form>
            </Modal>
         
        </div>
        <div className="py-4 px-14">
          <img src={slide} className="sm:h-[500px]"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
