import React from 'react'
import {RiCalendar2Line} from 'react-icons/ri'

function TaskAndCharges({user}) {
  return (
    <div className='rounded-xl p-4 shadow-xl shadow-slate-200'>
      <div className="flex justify-between">
    <p>{user.taskComplexity}</p>
      <span className='text-xl font-bold'>{user.price}</span>
      </div>

      <div className='flex items-center mt-7 mb-5'>
        <RiCalendar2Line className='text-primary me-2'/>
        <span>{user.deliveryTime}</span>
      </div>

      <div className='flex gap-x-4'>
        <button className='rounded-lg grow shrink-0 basis-24 p-2 md:px-4 hover:bg-blue-700 text-white bg-primary font-semibold'>Request Proposal</button>
        <button className='rounded-lg grow shrink-0 basis-24 p-2 px-4 border hover:text-blue-700  hover:border-blue-700 border-primary text-primary bg-transparent font-semibold'>Chat with me</button>
      </div>
    </div>
  )
}

export default TaskAndCharges