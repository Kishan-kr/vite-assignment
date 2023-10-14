// src/components/Carousel.js
import React, { useState } from 'react';

function Testimonial({testimonial}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [1];

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-background rounded-lg p-4 text-black shadow-xl shadow-slate-200">
      <div>
        <h3 className='font-bold text-2xl'>What people say?</h3>
        
        <div className='overflow-auto h-48 my-2'>
          <p className='text-lg'>{testimonial.text}</p>
        </div>

      </div>

      <div className="flex justify-center mt-3">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`${index === activeIndex ? 'bg-blue-500 rounded-full w-8' : 'bg-gray-300 rounded-full w-3'
              } h-3 mx-1 cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
