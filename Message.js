import React from 'react'
import img from './1.jpg'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src={img} alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
         <img src={img} /> 
      </div>
      
    </div>
  )
}

export default Message
