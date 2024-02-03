import React from 'react'
import './style.css';
import img from './1.jpg'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <span className="logo">Chatroom</span>
        <div className="user">
            <img src={img} alt='' />
            <span>Swapna</span>
            <button>Logout</button>
        </div>
    
    </div>
  )
}

export default Navbar
