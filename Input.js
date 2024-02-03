import React from 'react'
import album from './album.svg'
import attach from './attach.svg'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <img src={attach} alt=''  />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={album} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
