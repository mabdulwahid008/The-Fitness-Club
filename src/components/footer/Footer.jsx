import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <hr />
        <div>
            <span>Developed By </span>
            <span>Muhammad Abdulwahid</span>
        </div>
        <div className='icons'>
            <a href='mailto:m.abdulwahid008@gmail.com' target='#BLANK'><i className="fa-solid fa-envelope"></i></a>
            <a href='https://github.com/mabdulwahid008' target='#BLANK'><i className="fa-brands fa-github"></i></a>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer