import React from 'react'
import img1 from '../assets/image40.jpeg';
import img2 from '../assets/image38.jpeg';
import img3 from '../assets/image41.jpeg';
import img4 from '../assets/image39.jpeg';



function Blog() {
    return (
        <div className='font-Int'>
            <div className='back h-56'>
                <p className='p-20 text-4xl font-bold text-white'>Blog</p>
            </div>
            <div className='grid  grid-cols-1  lg:grid-cols-3 p-6 gap-7 lg:w-10/12 mx-auto'>
                <div className=' shadow-2xl relative  rounded'>
                    <img src={img1} className='p-6 object-cover transition-transform duration-300 transform hover:scale-105' />
                    <p className='ml-6 font-semibold text-lg pb-7'>Facial Identity: A Journey Through Time and Culture</p>

                    <div className="absolute top-14 -left-4  py-2 px-2 md:mt-28  bg-gradient-to-r from-green-400 to-blue-600" >
                        <p className="text-xl text-white font-bold">Feb 24</p>
                    </div>
                </div>
                <div className=' shadow-2xl relative  rounded'>
                    <img src={img2} alt="" className='p-6 object-cover transition-transform duration-300 transform hover:scale-105' />
                    <p className='ml-6 font-semibold text-lg pb-7'>AI-driven Face Identification: Where and How It’s Used</p>

                    <div className="absolute top-14 -left-4  py-2 px-2 md:mt-28  bg-gradient-to-r from-green-400 to-blue-600" >
                        <p className="text-xl text-white font-bold">Feb 24</p>
                    </div>
                </div>
                <div className=' shadow-2xl relative  rounded'>
                    <img src={img3} alt="" className='p-6 object-cover transition-transform duration-300 transform hover:scale-105' />
                    <p className='ml-6 font-semibold text-lg pb-7'>Unlocking the Potential: Face Recognition Technology in Everyday Life</p>

                    <div className="absolute top-14 -left-4  py-2 px-2 md:mt-28  bg-gradient-to-r from-green-400 to-blue-600" >
                        <p className="text-xl text-white font-bold">Feb 24</p>
                    </div>
                </div>
            </div>
            <div className='grid  grid-cols-1  lg:grid-cols-3 p-6  gap-7 lg:w-10/12 mx-auto'>
                <div className=' shadow-2xl relative  rounded '>
                    <img src={img4} alt="" className='p-6 object-cover transition-transform duration-300 transform hover:scale-105' />
                    <p className='ml-6 font-semibold text-lg pb-16'>The Future of AI Face Search</p>

                    <div className="absolute top-14 -left-4  py-2 px-2 md:mt-28  bg-gradient-to-r from-green-400 to-blue-600" >
                        <p className="text-xl text-white font-bold">Feb 24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;