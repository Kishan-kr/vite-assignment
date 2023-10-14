import React from 'react'
import Description from './Description'
import Service from './Service'

function About({user}) {
  return (
    <div className='rounded-xl p-4'>
      <h3 className='font-bold text-2xl text-black'>About {user?.name}</h3>

      <div className='md:flex gap-x-8 text-left my-8'>
        <div>
          <p className='uppercase font-bold text-sm text-secondaryText mb-0 md:mb-2 mt-3'>FROM</p>
          <p className='uppercase'>{user?.about?.from}</p>
        </div>
        <div>
          <p className='uppercase font-bold text-sm text-secondaryText mb-0 md:mb-2 mt-3'>PARTNER SINCE</p>
          <p>{user?.about?.partnerSince}</p>
        </div>
        <div>
          <p className='uppercase font-bold text-sm text-secondaryText mb-0 md:mb-2 mt-3'>AVERAGE RESPONSE TIME</p>
          <p>{user?.about?.averageResponseTime}</p>
        </div>
      </div>

      <Description/>

      <div className='md:flex md:gap-x-8'>
        <Service heading='SERVICES I OFFER' services={user.about.services}/>
        <Service heading='WHY ME?' services={user.about.benefits}/>
      </div>
    </div>
  )
}

export default About