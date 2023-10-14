import React from 'react'
import { Link } from 'react-router-dom'

function Solutions() {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='uppercase font-bold'>Solutions</h5>
      <Link to='/'>Search</Link>
      <Link to='/'>Connect</Link>
      <Link to='/'>Research</Link>
      <Link to='/'>Academy</Link>
    </div>
  )
}

export default Solutions