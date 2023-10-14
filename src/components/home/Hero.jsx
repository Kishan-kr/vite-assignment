import React from 'react'
import image1 from '/images/image1.png';
import image2 from '/images/image2.png';
import image3 from '/images/image3.png';
import Searchbar from './Searchbar';

function Hero() {
  return (
    <div className='flex flex-col py-12 md:flex-row md:items-center' >
      <div className="flex flex-col px-3 gap-y-8 md:w-[60%] md:me-8">
        <h1 className='text-6xl font-bold text-black m-2'>Find <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Partners</span> (CAs) available online</h1>

        <p className='text-secondaryText font-openSans text-xl'><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>

        <Searchbar />
      </div>

      <div className="grid grid-cols-3 gap-4 px-3 my-8 mt-20 md:mt-0">
        <div className="bg-transparent rounded-2xl mt-20 overflow-hidden">
          <img src={image1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div className="bg-transparent rounded-2xl overflow-hidden">
          <img src={image2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="bg-transparent rounded-2xl mt-5 overflow-hidden">
          <img src={image3} alt="Image 3" className="w-full h-auto" />
        </div>
      </div>
    </div >
  )
}

export default Hero