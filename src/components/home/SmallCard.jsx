import React from 'react'

function SmallCard({data}) {
  return (
    <div className='bg-[#F4F4F4] p-4 rounded-lg flex h-20'>
      <div className='flex flex-col me-4'>
        <h5 className='font-openSans font-bold text-base text-primary whitespace-nowrap'>Due date</h5>
        <p className='text-black text-sm'>{data.dueDate}</p>
      </div>

      <div className='flex flex-col'>
        <h5 className='font-openSans font-bold text-base text-warning'>Penalty</h5>
        <div className='text-black text-sm'>{data?.penalty.map((item) => (
          <p><span className='font-bold'>{item.amount}</span><span>{item.desc}</span></p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SmallCard