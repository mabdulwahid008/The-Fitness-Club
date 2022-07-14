import React from 'react'
import './Reason.css'
import reason1 from '../../images/reason1.jpg'
import reason2 from '../../images/reason2.jpg'
import reason3 from '../../images/reason4.jpg'
import reason4 from '../../images/reason5.jpg'

function Reason(props) {
  const emailMsg = "Sorry to let you know this is just Frontend any interaction with the website does not response except the email section at the end.";
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={reason1} alt="" />
        <img src={reason2} alt="" />
        <img src={reason3} alt="" />
        <img src={reason4} alt="" />
      </div>

      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className='stroke-text'>Why </span>
          <span>Choose Us</span>
        </div>

        <div className='details-r'>
          <div>
            <i class="fa-solid fa-circle-check"></i>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <i class="fa-solid fa-circle-check"></i>
            <span>TRAIN SHORTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <i class="fa-solid fa-circle-check"></i>
            <span>1 FREE PROGRAM FRO NEW MEMBERS</span>
          </div>
          <div>
            <i class="fa-solid fa-circle-check"></i>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <button id='btn-r' className='btn' onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>Get Started</button>
      </div>

    </div>
  )
}

export default Reason