import React, { useState } from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-scroll'

function Header() {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menu, setMenu] = useState(false)
  
  return (
    <div className='header'>
        <img className='logo' src={logo} alt="The Fitness Club"/>
      
      {(menu === false && mobile === true)? 
      <div className='nav'><i class="fa-solid fa-bars" onClick={()=>{setMenu(true)}}></i></div>  : 
    
        <ul className='header-menu'>
            <li><Link onClick={()=>{ setMenu(false)}} to='hero' span={true} smooth={true}>Home</Link></li>
            <li><Link onClick={()=>{ setMenu(false)}} to='programs' span={true} smooth={true}>Programs</Link></li>
            <li><Link onClick={()=>{ setMenu(false)}} to='reasons' span={true} smooth={true}>Why Us</Link></li>
            <li><Link onClick={()=>{ setMenu(false)}} to='plains' span={true} smooth={true}>Plans</Link></li>
            <li><Link onClick={()=>{ setMenu(false)}} to='testimonial' span={true} smooth={true}>Testimonials</Link></li>
        </ul>
}
    </div>
  )
}

export default Header