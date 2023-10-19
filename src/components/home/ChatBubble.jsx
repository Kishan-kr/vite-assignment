import React from 'react'

function ChatBubble({text, bg = 'purple-200', dir ='ee'}) {
  return (
    <div className={`bg-${bg} px-3 py-2 rounded-xl rounded-${dir} text-xs my-1 w-fit`}>
      {text}
    </div>
  )
}

export default ChatBubble