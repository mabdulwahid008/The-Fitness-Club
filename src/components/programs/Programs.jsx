import React from 'react'
import './Programs.css'
import { ProgramData } from '../../Data/Program'

function Programs(props) {
    const emailMsg = "Sorry to let you know this is just Frontend any interaction with the website does not response except the email section at the end.";
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="programs-category">
                {ProgramData.map((program)=>{
                    return <div className="category">
                        <i id='program-icon' className={program.icon}></i>
                        <span>{program.heading}</span>
                        <span>{program.detail}</span>
                        <div className="join-now"  onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>
                            Join Now <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                })}
            </div>
    </div>
  )
}

export default Programs