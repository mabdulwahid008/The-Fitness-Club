import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div className="modal">
        <div className="modal-container">
            <div className="title">
                <span><span className='stroke-text'>Glad </span>You are Exploring!!!</span>
                <button className='btn btn-m' onClick={()=>{props.setModal(false); props.setEmailMsg("")}}>X</button>
            </div>
            <div className="body">
                <span>
                  { props.emailmsg }
                </span> 
           </div>
        </div>
    </div>
  )
}

export default Modal
