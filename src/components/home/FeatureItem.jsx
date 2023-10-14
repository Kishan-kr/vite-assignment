import React from 'react'

function FeatureItem({icon, firstWord, description}) {
  return (
    <div className='flex gap-4 max-w-xs md:basis-60 shrink-0 items-center'>
      <img src={icon} width='52px' height='52px' alt="" />
      <p className="text-black text-base"><b className='uppercase'>{firstWord}</b> {description}</p>
    </div>
  )
}

export default FeatureItem