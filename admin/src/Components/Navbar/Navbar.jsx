import React from 'react'
import './Navbar.css'
import navlogo from "../../assets/Shop Stack.png"
import navProfile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='admin-logo'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <p className='admin_panel'>Admin panel</p>
        </div>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar