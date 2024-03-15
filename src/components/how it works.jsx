import React from "react";
import who from "../assets/works.mp4";

function Works() {
  return (
    
    <div className="">
       {/* <div className="back ">
        <p className="text-3xl md:text-5xl text-white text-center font-Int font-extrabold py-10 tracking-wide">
          How It Is Works
        </p>
      </div> */}
      <div className="text-4xl font-bold text-center p-4 ">
       <p> How it is works?</p>
       <p className="text-lg mt-4 text-black font-Int font-medium">The quickest and simplest solution for Photo Sharing in the world.</p>
      </div>
      <div className="">
        <video autoPlay muted loop className="p-2 ">
          <source src={who}></source>
        </video>
      </div>
{/* 
      <div className="bg-gradient-to-r from-purple-900 to-rose-700  ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 rounded-2xl py-10 text-center ">
            <div className="mt-5">
            <h1 className="text-2xl text-white font-extrabold">Moments Matter - Book a FREE Demo Now</h1>

            </div>
            <div className="">
            <button className=" bg-white text-rose-800 font-bold hover:text-white hover:bg-gradient-to-r from-purple-950 to-rose-800 rounded w-2/4  p-5">
                Get Started
              </button>
            </div>
            
           
          </div> */}
          {/* </div> */}

      </div>
      
    
    
  
  );
}

export default Works;
