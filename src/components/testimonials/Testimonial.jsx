import React, { useState } from 'react'
import './Testimonial.css'
import { TestimonialData } from '../../Data/testimonial'
import { motion } from 'framer-motion'

function Testimonial() {

    const transition = {type: 'spring', duration : 3}

    const [selected, setSelected] = useState(0);
    const tLength = TestimonialData.length;

    const next = ()=>{
        if(selected === 2)
            setSelected(0);
        else{
            setSelected(selected +1);
        }   
    }
    const prev = ()=>{
        if(selected === 0)
            setSelected(2);
        else{
            setSelected(selected -1);
        }   
    }

  return (
    <div className="Testimonial" id='testimonial'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.div
                key={selected}
                initial={{opacity:0, x:-200}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0.5, x:200}}
                transition={transition}
            className='review'>
                <span>
                    "" {TestimonialData[selected].reveiw} ""
                </span>
                <span>
                    <span style={{color:'var(--orange)'}}>{TestimonialData[selected].name} </span>
                - {TestimonialData[selected].status}
                </span>
            </motion.div>
        </div>
        <div className='right-t'>
            <motion.div
                initial = {{opacity:0, x:-100}}
                whileInView = {{opacity:1, x:0}}
                transition = {{...transition, duration:2}}
            ></motion.div>
            <motion.div
                initial = {{opacity:0, x:100}}
                whileInView = {{opacity:1, x:0}}
                transition = {{...transition, duration:2}}
            ></motion.div>
            <motion.img 
                key={selected}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0.5, x:-100}}
                transition={transition}
            src={TestimonialData[selected].image} alt="" />
            <div className="arrow">
            <i onClick={next} class="fa-solid fa-arrow-left"></i>
            <i onClick={prev} class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </div>
  )
}

export default Testimonial