import React from 'react'
import './Plans.css'
import { PlansData } from '../../Data/Plans'

function Plans(props) {
    const emailMsg = "Sorry to let you know this is just Frontend any interaction with the website does not response except the email section at the end.";
  return (
    <div className="plains-container" id="plains">
        <div className="blur blur-p1"></div>
        <div className="blur blur-p2"></div>
        <div className="plains-header">
            <span className='stroke-text'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>now withus</span>
        </div>

        <div className='plains-details'>
            {PlansData.map((plan)=>{
                return <div className="plan">
                    <i className={plan.icon}/>
                    <span>{plan.planType}</span>
                    <span>{plan.planPrice}</span>
                    {plan.features.map((feature)=>{
                        return <div className="feature">
                            <i className='fa-solid fa-circle-check'/>
                            <span>{feature}</span>
                        </div>
                    })}
                    <div className='plain-detail' onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>
                        <span>see more details</span>
                        <i className="fa-solid fa-arrow-right-long"/>
                    </div>
                    <button className='btn btn-r' onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>Register Now</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Plans