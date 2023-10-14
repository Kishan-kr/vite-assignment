import React from 'react'
import logo from '/logo.svg'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'

function Navbar() {
  return (
    <div className='flex p-3 items-center justify-between'>
      <Link to='/' >
        <img src={logo} width='140px' height='46px' alt="" className='logo' />
      </Link>
      <div className="hidden flex-col items-center gap-x-3 md:flex md:flex-row md:w-full md:ms-4">
        <Dropdown
          dropdownTitle='Solutions'
          items={[
            { title: 'Lorem', path: '/' },
            { title: 'Ipsum', path: '/' }, ,
          ]}
        />
        <Dropdown dropdownTitle='Features' />
        <Link to="/"
          className="rounded-md text-lg text-black px-3 py-1 font-bold"
        >Blogs
        </Link>
        <Dropdown dropdownTitle='About' />

        <button className='ms-auto bg-backgound rounded-lg border border-primary text-sm font-bold text-primary p-3 w-24 mt-3 h-min hover:text-blue-900 hover:border-blue-900'>Login</button>

        <button className='bg-primary rounded-lg border border-primary text-sm font-bold text-white p-3 w-24 mt-3 h-min hover:bg-blue-700'>Register</button>
      </div>

      <button className='md:hidden px-2 text-xl h-8'>
        <HiOutlineBars3BottomLeft />
      </button>
    </div>
  )
}

export default Navbar