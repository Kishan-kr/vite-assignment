import React from 'react'
import Branding from './Branding'
import Company from './Company'
import Resources from './Resources'
import Solutions from './Solutions'
import Support from './Support'
import {MdFacebook} from 'react-icons/md'
import {FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Legal from './Legal'

function Footer() {
  return (
    <div className='text-white footer py-8 px-3 md:px-8 lg:px-24 text-sm '>
      <div className="flex flex-wrap gap-x-8 gap-y-4 justify-between">
        <Branding />
        <Company />
        <Solutions />
        <Resources />
        <Support />
        <Legal/>
      </div>

      <hr className='my-6'/>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>

        {/* social links  */}
        <div className='flex gap-2'>
          <Link to='/' className='text-2xl'><MdFacebook /></Link>
          <Link to='/' className='text-2xl'><FaInstagram /></Link>
          <Link to='/' className='text-2xl'><FaLinkedinIn /></Link>
          <Link to='/' className='text-2xl'><FaWhatsapp /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer