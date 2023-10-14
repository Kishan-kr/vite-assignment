import React from 'react'
import {HiArrowSmallLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function UserNotFound() {
  return (
    <div className='bg-background h-screen w-screen flex flex-col items-center justify-center '>
      <h2 className='text-red-500 text-3xl font-bold'>
      User Not Found
      </h2>
      <Link to='/' className='text-blue-600 text-lg mt-3'>Click here to go back</Link>
      
    </div>
  )
}

export default UserNotFound