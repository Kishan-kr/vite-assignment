import React, { useState } from 'react'
import logo from '/logo.svg'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'

function Navbar() {
  const [left, setLeft] = useState('-left-full')

  const toggleMobileNav = () => {
    setLeft((prevState) => (
      prevState === '-left-full' ? 'left-0' : '-left-full'
    ))
  }

  const dismissMobileNav = ()=> {
    setLeft('-left-full');
  }

  return (
    <div className='flex p-3 items-center justify-between'>
      <Link to='/' >
        <img src={logo} width='140px' height='46px' alt="" className='logo' />
      </Link>

      <div className={`fixed top-0 ${left} z-10 h-screen w-screen bg-slate-500/20 md:hidden`} onClick={dismissMobileNav}></div>

      <div className={`absolute top-0 ${left} bg-white h-screen w-52 items-start pt-6 flex flex-col gap-x-3 z-50 transition-all md:left-auto md:items-center md:relative md:flex md:flex-row md:w-full md:ms-4 md:bg-transparent md:h-auto md:pt-0`}>
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

        <button className='ms-3 md:ms-auto bg-backgound rounded-lg border border-primary text-sm font-bold text-primary p-3 w-24 mt-3 h-min hover:text-blue-900 hover:border-blue-900'>Login</button>

        <button className='bg-primary rounded-lg border border-primary text-sm font-bold text-white p-3 w-24 mt-3 ms-3 md:ms-0 h-min hover:bg-blue-700'>Register</button>

        <button className='text-xl absolute top-2 right-2 p-1 md:hidden' onClick={dismissMobileNav}>
          <IoCloseOutline/>
        </button>
      </div>

      <button className='md:hidden px-2 text-xl h-8' onClick={toggleMobileNav}>
        <HiOutlineBars3BottomLeft />
      </button>
    </div>
  )
}

export default Navbar