import React, { useState } from 'react'
import { BsInfoCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import { IoMdClose, IoIosWarning, IoMdCloseCircle } from 'react-icons/io'

// info : bg-blue-100, text-blue-900
// warning : bg-yellow-200, text-yellow-600
// danger : bg-red-200, text-red-600
// success : bg-green-200, text-green-600

function Alert({active, setActive, heading, content, bgColor, textColor, icon }) {
  const [scale, setScale] = useState('scale-100')

  const iconMap = new Map([
    ['info', <BsInfoCircleFill className={`me-2 text-${textColor}/90`} />],
    ['warning', <IoIosWarning className={`me-2 text-${textColor}/90`} />],
    ['danger', <IoMdCloseCircle className={`me-2 text-${textColor}/90`} />],
    ['success', <BsCheckCircleFill className={`me-2 text-${textColor}/90`} />],
  ])

  const dissmissAlert = () => {
    setScale('scale-90')

    setTimeout(() => {
      setActive(false);
    }, 150)
  }

  return (
    <div className={`fixed top-16 left-1/2 -translate-x-1/2 z-50 items-center p-3 mx-auto w-fit rounded transition-transform ${active ? 'flex' : 'hidden'} ${scale} bg-${bgColor} text-${textColor}`}>{
      iconMap.get(icon)
    }<strong>{heading}</strong>
      <p className='text-sm ms-1'>{content}</p>
      <button className='p-1 ms-3 rounded-md text-xl hover:bg-black/5' onClick={dissmissAlert}>
        <IoMdClose />
      </button>
    </div>
  )
}

export default Alert