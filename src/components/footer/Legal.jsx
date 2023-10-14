import React from 'react'
import { Link } from 'react-router-dom'

function Legal() {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='uppercase font-bold'>Legal</h5>
      <Link to='/'>Privacy</Link>
      <Link to='/'>Terms</Link>
      <Link to='/'>Accessibility</Link>
    </div>
  )
}

export default Legal