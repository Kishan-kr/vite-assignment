import React from 'react'
import SmallCard from './SmallCard'

function Card({item}) {
  return (
    <div className='relative px-7 py-6 bg-white rounded-2xl grow shrink-0 basis-80 sm:grow-0 shadow-lg shadow-slate-300 text-center'>
      <div>
        <h4 className='font-bold text-black text-xl'>{item.head}</h4>
      </div>
      <div>
        <p className='text-black text-base my-3'>{item.body}</p>
      </div>

      <SmallCard data={item.foot}/>

      <div className='absolute inset-y-[-10px] left-[-8px] p-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-base'>
        {item.badge.pos}<sup>{item.badge.sup}</sup>
      </div>
    </div>
  )
}

export default Card