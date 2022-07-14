import React, { useRef, useState } from 'react'
import './JoinUs.css'
import emailjs, { sendForm } from '@emailjs/browser'

function JoinUs(props) {
    const form = useRef();

    const [email, setEmail] = useState("");
      const onchange = (e)=> {
        setEmail(e.target.value)
      }

    const sendEmail = (e) => {
        e.preventDefault();
        
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

        if(email.charAt(email.length-4) !== '.' && email.charAt(email.length-3) !== '.'){
            props.setEmailMsg("Please enter your correct email address.");
        }
        else if(regEx.test(email)  && email !== "")
        {   
            emailjs.sendForm('service_y3abb9f', 'template_9kl2rkj', form.current, 'oY63AILGcuWc9_TgX')
            .then((result) => {
                props.setEmailMsg("Your Email has been sent to Muhammad Abdulwahid.");
            }, (error) => {
                props.setEmailMsg(error.text);
            });
        }

        props.setModal(true);
          
      };

      

  return (
    <div className="join" id="join0us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready To </span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body </span>
                <span className='stroke-text'>With Us</span>
            </div>
        </div>

    
       

        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user-email' value={email} placeholder='Enter Your Email' onChange={onchange}/>
                <button className='btn btn-j' >Join Us</button>
            </form>
        </div>
    </div>
  )
}

export default JoinUs