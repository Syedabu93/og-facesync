import React from 'react';
import "./navbar.css";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

function Matrices() {
  return (
    <div className=''>
      <div className='back p-20 mx-2 mt-4  grid sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4  text-white   '>
        {/* <div></div> */}
        <div className='flex-row lg:flex p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6 md:border-r-2  border-r-white  m-1'>
        <div className='bg-white w-20 h-20 px-5 ml-16  sm:ml-20 lg:ml-0 py-4 rounded-md'>
        <BsPersonCheckFill className='text-purple-900 text-5xl ' />
        </div>
       <div className=' lg:ml-3'>
            <p className='text-center   text-4xl font-bold'>99.1%</p>
            <p className='text-center text-xl lg:text-xl font-bold'>Accuracy</p>
            </div>
        </div>
        <div  className='flex-row lg:flex p-3 border-b-2 border-b-white sm:border-b-0 md:py-6  md:px-6  lg:border-r-2 border-r-white m-1'>
        <div className='bg-white w-20 h-20 px-4 ml-16  sm:ml-20 lg:ml-0 py-4 rounded-md'>
        <BsFillPersonVcardFill className='text-rose-600 text-5xl ' />
        </div>
        <div className='lg:ml-3'>
            <p className='text-center  text-4xl font-bold'>50+</p>
            <p className='text-center text-xl  font-bold'>Agencies</p>
            </div>
        </div>

        <div  className='flex-row lg:flex p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6 md:border-r-2  border-r-white m-1'>
        <div className='bg-white w-20 h-20 px-4 ml-16  sm:ml-20 lg:ml-0 py-4 rounded-md'>
        <MdOutlinePhotoCamera className='text-purple-900 text-5xl ' />
        </div>
        <div className='lg:ml-3'>
            <p className='text-center  text-4xl font-bold'>100+</p>
            <p className='text-center  text-xl font-bold'>Photograpers</p>
            </div>
        </div>

        <div  className='flex-row lg:flex p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6'>
        <div className='bg-white w-20 h-20 px-4 ml-16 sm:ml-20 lg:ml-0 py-4 rounded-md'>
        <PiUsersThreeFill className='text-rose-600 text-5xl ' />
        </div>
        <div className='lg:ml-3'>
            <p className='text-center text-4xl font-bold my-1'>20k+</p>
            <p className='text-center text-xl font-bold tracking-widest'>Users</p>
            </div>
        </div>
        {/* <div></div> */}

      </div>
    </div>
  )
}

export default Matrices;
