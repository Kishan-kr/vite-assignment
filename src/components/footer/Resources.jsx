import React from 'react'
import { Link } from 'react-router-dom'

function Resources() {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='uppercase font-bold'>Resources</h5>
      <Link to='/'>Blogs</Link>
      <Link to='/'>Forms</Link>
    </div>
  )
}

export default Resources