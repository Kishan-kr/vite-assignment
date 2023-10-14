import React from 'react'
import logoWhite from '/logo-white.png'

function Branding() {
  return (
    <div>
      <img src={logoWhite} alt="" />
      <p className='text-base my-2'>India's first platform dedicated to simplifying partner search</p>
    </div>
  )
}

export default Branding