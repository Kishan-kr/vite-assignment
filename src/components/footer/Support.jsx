import React from 'react'
import { Link } from 'react-router-dom'

function Support() {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='uppercase font-bold'>Support</h5>
      <Link to='/'>Help</Link>
      <Link to='/'>Contact Us</Link>
    </div>
  )
}

export default Support