import React from 'react'
import { Link } from 'react-router-dom'

function Company() {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='uppercase font-bold'>Company</h5>
      <Link to='/'>About</Link>
      <Link to='/'>Pricing</Link>
      <Link to='/'>Careers</Link>
    </div>
  )
}

export default Company