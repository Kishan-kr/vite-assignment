import React, { useState } from 'react'

function ImageCarousel({ image }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      heading: 'Item 1',
      description: "The next library I would recommend looking at is called Splide, and it's available for React and other frameworks..",
    },
    {
      heading: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      heading: 'Item 3',
      description: 'Description for Item 3',
    },
  ];

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };


  try {
    return (
      <div className=" relative h-64 grow shrink-0 basis-72 bg-cover bg-background rounded-lg p-0">
        <div style={{ backgroundImage: `url(${image})` }}>
        </div>

        <div className="flex justify-center mt-3 absolute bottom-3 left-1/2 transform -translate-x-1/2">
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
    )
  } catch (error) {
    console.error(error)
  }
}

export default ImageCarousel