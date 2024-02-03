import React from 'react'
import video from './video.png.svg';
import user from './user.png.svg';
import more from './more.png.svg';
import Messages from './Messages';
import Input from './Input'



const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
           <img src={video} alt='' />
           <img src={user} alt=''  />
           <img src={more} alt=''  />  
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  );
}
export default Chat;
