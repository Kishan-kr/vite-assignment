import React from 'react'

function Loader({size = 8, color = 'slate-600'}) {
  return (
      <div className={`w-${size} h-${size} my-4 mx-auto border-4 border-r-transparent border-${color} border-solid rounded-full animate-spin`}>
    </div>
  )
}

export default Loader