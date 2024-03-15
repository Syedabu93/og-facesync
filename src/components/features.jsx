import React from 'react'
import img32 from "../assets/image32.jpeg"
import { TbDeviceMobileMessage } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SlRocket } from "react-icons/sl";
import { FaRegHardDrive } from "react-icons/fa6";
import { PiVibrateLight } from "react-icons/pi";

function Features() {
    return (
        <div className='font-Int'>
             {/* <div className='back h-56'>
                <p className='p-20 text-4xl font-bold text-white'>Features</p>
            </div> */}
            <div className='lg:w-10/12 mx-auto'>
           
                <div className="gap-y-5 mt-20 ">
                    <h1 className=" text-center text-2xl font-extrabold">Features</h1>
                    <p className="text-center mt-5 text-xl">Let's explore FaceSync's capabilities</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-2 max-sm:px-5">
                    <div className=" grid grid-cols-2 m-8 lg:grid-cols-1  lg:m-8  md:m-8  gap-4 mt-28 ">
                        
                        <div className=" relative w-80 h-auto shadow-xl rounded-xl p-10  ">
                            <div className="absolute top-3 left-3 mt-10 ">
                                {" "}
                                <TbDeviceMobileMessage className="text-gray-500  text-4xl " />
                            </div>
                            
                                <h1 className="font-semibold text-lg text-black ml-8">Seamless Guest <br /> Registration</h1>
                                <p className="text-gray-500 ml-8 mt-4 text-base">Simplify Your Event <br /> Experience</p>
                           
                        </div>
                        <div className="relative w-80 h-auto   shadow-xl rounded-xl p-10">
                            <div className="absolute top-3 left-3">
                                {" "}
                                <FaRegHardDrive  className="text-gray-500 text-4xl mt-6"/>
                            </div>
                            <h1 className="font-semibold text-black text-lg ml-8">AI-Powered Photo <br /> Matching</h1>
                            <p className="text-gray-500 ml-8 mt-4">Precision and Efficiency <br /> Combined.</p>
                        </div>
                        <div className="relative w-80 h-auto shadow-xl rounded-xl p-10">
                            <div className="absolute top-3 left-3">

                                <PiVibrateLight className="text-gray-500 text-4xl mt-6" />
                            </div>
                            <h1 className="font-semibold text-black text-lg ml-8">
                                Automatedd Personalized <br /> Photo Delivery.
                            </h1>
                            <p className="text-gray-500 ml-8 mt-4">
                                Tailored Moments, <br /> Effortlessly Shared.
                            </p>{" "}
                        </div>

                    </div>

                    <div className="text-left leading-relaxed top:0 mt-20  ml-2  lg:mb-20 mb-1 mr-2 ">
                        <img src={img32} className='w-full h-full '></img>
                    </div>

                    <div className=" grid grid-cols-2 m-8 lg:grid-cols-1  lg:m-8  md:m-8  gap-4 mt-28 ">
                        
                        <div className=" relative w-80 h-auto shadow-xl rounded-xl p-10">
                            <div className="absolute top-3 left-3 mt-10 ">
                                {" "}
                                <SlRocket className="text-gray-500 text-4xl" />
                            </div>
                            
                                <h1 className="font-semibold text-black text-lg ml-8">Analytics</h1>
                                <p className="text-gray-500 ml-8 mt-4">Unlocking Event Data for  Success.</p>
                           
                        </div>
                        <div className="relative w-80 h-auto   shadow-xl rounded-xl p-10 ">
                            <div className="absolute top-3 left-3">
                                {" "}
                                <BsCodeSlash className="text-gray-500 text-4xl mt-6" />
                            </div>
                            <h1 className="font-semibold text-black text-lg ml-8">WhatsApp Integration</h1>
                            <p className="text-gray-500 ml-8 mt-4">WhatsApp Integration for <br /> Instant Connectivity.</p>
                        </div>
                        <div className="relative w-80 h-auto shadow-xl rounded-xl p-10">
                            <div className="absolute top-3 left-3">

                           <BsBoxArrowUpRight className="text-gray-500 text-4xl mt-6" />
                            </div>
                            <h1 className="font-semibold text-black text-lg ml-8">
                            Enhanced Privacy and <br /> Security
                            </h1>
                            <p className="text-gray-500 ml-8 mt-4">
                            Your Peace of Mind <br /> Guaranteed.
                            </p>{" "}
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Features;