import React from 'react';
import { useState } from "react";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";

function Treasures() {

  const [ModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!ModalOpen);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-900 to-rose-700 mx-auto ">
          <div className="grid grid-cols-1  lg:grid-cols-2 rounded-2xl py-10">
            <div className="mt-2  lg:ml-36">
            <h1 className="text-3xl text-white font-extrabold text-center">FaceSync Treasures your moments </h1>
               
            </div>
            <div className="  mx-auto">
            <button onClick={handleClick}
            className="mt-2 lg:mt-0 bg-white text-lg font-medium hover:text-white hover:bg-gradient-to-r from-purple-950 to-rose-800 rounded  p-3">
                Book Your Free Demo
              </button>
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
            
           
          </div>
        </div>
      
    </div>
  )
}

export default Treasures;
