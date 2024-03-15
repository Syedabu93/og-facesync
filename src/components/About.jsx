import React from 'react'
import { useEffect } from 'react';
import capture from '../assets/image45.jpg';
import threeimage from '../assets/image46.png';
import face from '../assets/image47.png';
import { FaAddressCard } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import "./about.css";


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
  return (
    <div className='font-Int'>
          <div className='back h-56'>
                <p className='p-20 text-4xl font-bold text-white'>About Us</p>
            </div>
            {/* welcome to facesync */}
            <section className="welcome to facesync">
          <div className="faceSync mt-5 md:justify-center  md:flex md:flex-wrap md:h-[370px] h-[630px] md:mt-8 p-[12px]">
            <div className="md:p-[10px] md:h-[370px]">
              <div className="img  md:w-[550px] md:h-[350px]  bg-auto">
                <img
                  src={threeimage}
                  alt=""
                  className=" md:p-0 md:w-[500px] md:h-[350px] w-[300px] h-[194px] p-2"
                />
              </div>
            </div>
            <div className="text md:w-[570px] md:h-[370px] ">
              <div className=" md:w-[540px] w-[300px] ">
                <p className="welcometofacesync text-[#741369] leading- text-center text-[26px] font-abold md:text-start md:font-bold font-bold font-[Inter,sans-serif] md:font-[Inter,sans-serif]  md:text-[24px]">
                  Welcome to FaceSync
                </p>
              </div>
              <div className=" mb-2 md:mt-4 md:w-[540px]">
                <p className="transforming text-black  text-2xl font-bold font-[Inter,sans-serif] md:font-bold md:font-[Inter,sans-serif] leading-snug md:text-[33px]">
                  Transforming Events through AI- Enabled Photo Distribution!
                </p>
              </div>
              <div className=" mt-5 md:w-[540px]">
                <p className="text-para text-[18px] h-[216px] md:text-[18px]  text-justify font-[apple-system,BlinkMacSystem...] md:font-[apple-system,BlinkMacSystem...] text-[#353535] md:text-justify leading-7 ">
                  FaceSync is the epitome of innovation in event photography,
                  revolutionizing how event coordinators and photographers
                  manage and distribute captivating memories. With the power of
                  AI seamlessly integrated into our platform, FaceSync redefines
                  the event photography experience.
                </p>
              </div>
            </div>
          </div>
        </section>

            {/* vision and misson */}
            <section>
        <div className="xl:pl-36 lg:mt-10">
          <p className="text-3xl font-bold lg:w- px-2 p-4">Vision & Mission</p>
        </div>

        <div className="parent flex flex-wrap max-sm:px-2 justify-around xl:justify-start xl:pl-14 xl:pr-10 bg-gradient-to-r from-purple-900 to-rose-700 mx-auto mt-8 md:relative">
          <div className="grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-2 mt-10 gap-4  xl:w-[58%] xl:h-[350px] max-sm:px-2">
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  md:border md:border-white text-white">
              <div className="logo md:absolute md:-top-8 md:left-[25%] xl:left-[20%] border-2 max-sm:mb-4 border-white bg-rose-600 rounded-full w-max p-4">
                <IoRocket className="text-4xl" />
              </div>
              <div className="max-sm:border max-sm:border-white xl: p-4 md:mt-4">
                <h1 className="text-2xl font-bold text-center mb-2">Vision</h1>
                <p className="text-center md:text-lg">
                  Become the global leader in state-of-the-art technology,
                  revolutionizing experiences by making every moment matter
                  through cutting-edge face recognition.
                </p>
              </div>
            </div>

            <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  md:border md:border-white text-white">
              <div className="logo md:absolute md:-top-8 md:left-[73%] xl:left-[40%] border-2 max-sm:mb-4 bg-rose-600 border-white rounded-full w-max p-4">
                <IoRocket className="text-4xl" />
              </div>
              <div className="max-sm:border max-sm:border-white p-4 text-white md:mt-4">
                <h1 className="text-2xl font-bold text-center mb-2">Mission</h1>
                <p className="text-center md:text-lg">
                  To transform events into timeless memories through seamless
                  AI-driven photo delivery You know why? Because moments
                  matter…!
                </p>
              </div>
            </div>

            <div className="hidden xl:block xl:w-1/2"></div>
          </div>

          <div className="img mt-4">
            <img
              src={capture}
              className="max-sm:px-4 max-sm:w-max xl:absolute xl:w-[28%] xl:right-28 xl:-top-24"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* key functionalities */}
      <section className="key functionalities">
          <div className="key md:mt-10">
            <h1 className="text-center md:text-4xl mb-10 font-bold text-2xl font-[Inter,sans-serif] ">
              Key Functionalities
            </h1>
            <div className="md:flex md:flex-wrap md:justify-center">
              <div className=" md:p-[15px] p-[15px] md:h-[430.06px]">
                <div className=" text-content  rounded p-9 md:w-[349.99px] md:h-[400.06px] shadow h-[451px] w-[290px] hover:text-white hover:bg-gradient-to-r from-purple-900 to-rose-700">
                  <div className=" md:h-[27.06px] h-[27.06px]">
                    <span className="md:h-[27.06px] h-[27.06px]"></span>
                  </div>
                  <h1 className="md:font-bold md:text-[21px] font-[Inter,sans-serif] md:text-start md:mb-5 mb-5 font-bold text-[21px] md:font-[Inter,sans-serif]  leading-[22px] ">
                    Seamless Guest Registration
                  </h1>
                  <p className="text   md:text-[17x] text-[17px] text-between font-[apple-system,BlinkMacSystem...] md:font-[apple-system,BlinkMacSystem...] w-[205px] md:w-[270px]">
                    Guests effortlessly register by scanning a dedicated QR Code
                    on the FaceSync portal. Collect essential information –
                    names, email addresses, mobile numbers, and captivating
                    selfies for a personalized touch.
                  </p>
                </div>
              </div>
              <div className=" md:p-[15px] p-[15px] md:h-[415.06px]  hover:text-white hover:bg-gradient-to-r from-purple-900 to-rose-700">
                <div className="text-content p-10 md:w-[349.99px] md:h-[400.06px] rounded nongradient shadow">
                  <div className=" md:h-[27.06px] h-[27.06px]">
                    <span className="md:h-[27.06px] h-[27.06px]"></span>
                  </div>
                  <h1 className="font-bold text-[21px] md:text-[21px] text-start mb-5 leading-[22px] font-[Inter,sans-serif] md:font-[Inter,sans-serif] ">
                    AI-Powered Photo Matching
                  </h1>
                  <p className="text hover:text-white  md:text-[17px] text-between text-[17px] font-[apple-system,BlinkMacSystem...] md:font-[apple-system,BlinkMacSystem...] w-[205px] md:w-[270px]">
                    FaceSync's advanced AI algorithms intelligently match event
                    photos with registered guests. Say goodbye to manual sorting
                    – our system ensures precision and accuracy in connecting
                    each photo with the right attendee.
                  </p>
                </div>
              </div>
              <div className=" md:p-[15px] p-[15px] md:h-[415.06px]  hover:text-white hover:bg-gradient-to-r from-purple-900 to-rose-700">
                <div className="text-content p-10 md:w-[349.99px] md:h-[400.06px] shadow">
                  <div className=" md:h-[27.06px] h-[27.06px] ">
                    <span className="md:h-[27.06px] h-[27.06px]"></span>
                  </div>
                  <h1 className="font-bold md:font-bold text-[21px] md:text-[21px] leading-[22px] text-between text-start mb-5 font-[Inter,sans-serif] md:font-[Inter,sans-serif]">
                    Automated Personalized Photo Delivery
                  </h1>
                  <p className="  rounded md:text-[17px] text-between text-[17px] font-[apple-system,BlinkMacSystem...] md:font-[apple-system,BlinkMacSystem...] w-[205px] md:w-[270px]">
                    Photographers upload event photos onto the FaceSync portal
                    to initiate the AI-powered distribution. Personalized emails
                    are automatically sent to guests, delivering their treasured
                    moments directly to their inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            {/* About facesync */}
            <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-4 px-6 py-10 md:px-18">
        <div className="max-w-[600px] lg:w-1/2 md:px-8">
          <p className="text-2xl font-bold mb-4 text-[#741369]">Welcome to FaceSync</p>
          <p className="text-4xl font-bold mb-4">About FaceSync</p>
          <div className="">
            <p className="text-lg text-justify">
              FaceSync stands at the forefront of event photography, marrying
              the art of capturing moments with the intelligence of AI. This
              platform is more than just a service; it’s a transformative tool
              that empowers event coordinators and photographers to elevate the
              entire event experience.
            </p>
          </div>
        </div>
        <div className="max-w:[500px]">
          <img src={face} alt="face app" />
        </div>
      </div>
          {/* why facesync */}
          <section className="whyfacesync">
          <div className="bg-gray-100 py-2 md:px-20">
            <div className="text-center pt-4">
              <p className="text-3xl font-bold">Why FaceSync?</p>
            </div>
            <div className="flex justify-center item-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-4">
                <div className="bg-white  hover:shadow-2xl p-5 mx-2 my-4 rounded-md">
                  <div className="pb-4">
                    <FaAddressCard className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">
                      Efficiency Redefined
                    </p>
                    <div className="flex flex-wrap">
                      <p>
                        FaceSync streamlines photo distribution, freeing up time
                        for event organizers and photographers to focus on
                        capturing the essence of each event.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white  hover:shadow-2xl p-5 mx-2 my-4 rounded-md">
                  <div className="pb-4">
                    <FaAddressCard className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">
                      Personalized Connection
                    </p>
                    <div className="flex flex-wrap">
                      <p>
                        FaceSync transforms moments into memories, ensuring each
                        encounter is uniquely yours with personalized
                        registration every photo delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white  hover:shadow-2xl p-5 mx-2 my-4 rounded-md">
                  <div className="pb-4">
                    <FaAddressCard className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">
                      Streamlined Workflow
                    </p>
                    <div className="flex flex-wrap">
                      <p>
                        Let FaceSync handle the intricacies of photo
                        distribution, allowing you to concentrate on creating
                        memorable events.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white  hover:shadow-2xl p-5 mx-2 my-4 rounded-md">
                  <div className="pb-4">
                    <FaAddressCard className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">
                      Accuracy at its Core
                    </p>
                    <div className="flex flex-wrap">
                      <p>
                        Our AI algorithms ensure that every photo finds its
                        perfect match, offering unparalleled precision in event
                        photo management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white  hover:shadow-2xl p-5 mx-2 my-4 rounded-md">
                  <div className="pb-4">
                    <FaAddressCard className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">
                      Lasting Impressions
                    </p>
                    <div className="flex flex-wrap">
                      <p>
                        Deliver cherished memories straight to your guests'
                        inboxes, creating a lasting impact and leaving them with
                        positive event memories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
    </div>
  )
}

export default About;
