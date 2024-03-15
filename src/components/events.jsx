import React from 'react';
import why1 from'../assets/why1.jpeg';
import why2 from'../assets/why2.png';
import why3 from'../assets/why3.png';
import why4 from'../assets/why4.png';
import why5 from'../assets/why5.png';
import why6 from'../assets/why6.png';

function Events() {
  return (
    <div>
        <div className="py-12 px-5 md:px-0">
        <div className="text-center pt-3 pb-7">
          <h1 className="text-3xl lg:text-4xl text-neutral-800 font-bold">Event Showcase</h1>
          <h3 className="text-sm lg:text-md font-semibold pt-3">FaceSync captures the moments of every occasion because moments matter.</h3>
        </div>
        <div className="flex flex-wrap gap-y-16 gap-x-10 justify-center">
          <img className="w-[350px] h-72" src={why1} alt="" />
          <div className="w-[350px] h-72 flex flex-col justify-start p-3 shadow-[0px_7px_35px_-10px_rgba(0,0,0,0.3)]  hover:shadow-[0px_15px_55px_-10px_rgba(0,0,0,0.3)]">
            <img className='w-10 h-10 my-6 mx-4' src={why2} alt="" />
            <h2 className="text-xl font-bold mx-4">Weddings</h2>
            <h2 className="mx-4 mt-2 text-lg text-neutral-600">Mesmerize guests with cherished memories through sharing stunning wedding photos.</h2>
          </div>
          <div  className="w-[350px] h-72 flex flex-col justify-start p-3 shadow-[0px_7px_35px_-10px_rgba(0,0,0,0.3)]  hover:shadow-[0px_15px_55px_-10px_rgba(0,0,0,0.3)]">
            <img className='w-10 h-10 my-6 mx-4' src={why3} alt="" />
            <h2 className="text-xl font-bold mx-4">Birthdays</h2>
            <h2 className="mx-4 mt-2 text-lg text-neutral-600">Captivate birthday guests by sharing delightful moments through memorable birthday photos.</h2>
          </div>
          <div  className="w-[350px] h-72 flex flex-col justify-start p-3 shadow-[0px_7px_35px_-10px_rgba(0,0,0,0.3)]  hover:shadow-[0px_15px_55px_-10px_rgba(0,0,0,0.3)]">
            <img className='w-10 h-10 my-6 mx-4' src={why4} alt="" />
            <h2 className="text-xl font-bold mx-4">Convocations</h2>
            <h2 className="mx-4 mt-2 text-lg text-neutral-600">Instantly provide and offer convocation photos to students and parents.</h2>
          </div>
          <div  className="w-[350px] h-72 flex flex-col justify-start p-3 shadow-[0px_7px_35px_-10px_rgba(0,0,0,0.3)]  hover:shadow-[0px_15px_55px_-10px_rgba(0,0,0,0.3)]">
            <img className='w-10 h-10 my-6 mx-4' src={why5} alt="" />
            <h2 className="text-xl font-bold mx-4">Corporate events</h2>
            <h2 className="mx-4 mt-2 text-lg text-neutral-600">Offer instant access to corporate event photos for attendees and clients.</h2>
          </div>
          <div  className="w-[350px] h-72 flex flex-col justify-start p-3 shadow-[0px_7px_35px_-10px_rgba(0,0,0,0.3)]  hover:shadow-[0px_15px_55px_-10px_rgba(0,0,0,0.3)]">
            <img className='w-10 h-10 my-6 mx-4' src={why6} alt="" />
            <h2 className="text-xl font-bold mx-4">School & College events</h2>
            <h2 className="mx-4 mt-2 text-lg text-neutral-600">Swiftly distribute event snapshots to students, faculty, and staff members efficiently.</h2>
          </div>
        </div>
        <div>
          <p className="text-pink-800 ml-1 md:ml-3 lg:ml-20 text-md font-semibold mt-6">and many more...</p>
        </div>
      </div>
      
    </div>
  )
}

export default Events
