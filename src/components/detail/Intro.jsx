import React from 'react'

function Intro({user}) {
  return (
    <div className=''>
      <h2 className='font-bold text-2xl text-black'>{user.name}</h2>

      <p className='text-black text-base my-4'>{user.intro}</p>

      <div><span className='text-primary font-bold text-lg'>&#9733; {user.rating}</span> ({user.reviewCount})</div>
    </div>
  )
}

export default Intro