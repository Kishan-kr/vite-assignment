import React from 'react'

function Service({heading, services}) {
  return (
    <div className='mb-8'>
      <p className='uppercase font-bold text-sm text-secondaryText mb-2 mt-3'>{heading}</p>
      <ul className='list-disc ps-6'>{services.map((service) => (
        <li>{service}</li>
      ))
      }</ul>
    </div>
  )
}

export default Service