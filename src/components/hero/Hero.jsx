import React from 'react'
import Header from '../header/Header'
import './Hero.css'
import body from '../../images/body.png'
import heart from '../../images/heart.png'
import calories from '../../images/calories.png'
import bars from '../../images/bars.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = (props) => {

    const emailMsg = "Sorry to let you know this is just Frontend any interaction with the website does not response except the email section at the end.";

    const transition = {type : 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;

  return (
    <div className='hero' id='hero'>
        <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-add">
                <motion.div
                    initial = {{left :mobile? '180':'210px'}}
                    whileInView = {{left : '8px'}}
                    transition = {{...transition, type:'tween'}}
                ></motion.div>
                <span>The Best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div className='span'>
                In here we will help you to shape and build your ideal body and live up your life to the fullest. 
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                      <NumberCounter end={978} start={900} delay='4' preFix='+'/>    
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={30} delay='4' preFix='+'/>    
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className="btn"  onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>Get Started</button>
                <button className="btn"  onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>Learn More</button>
            </div>
            
        </div>
        <div className="right-h">
            <button className='btn'  onClick={()=>{props.setModal(true); props.setEmailMsg(emailMsg)}}>Join Now</button>

            <motion.div 
            initial ={{right:'0px'}}
            whileInView = {{right:'70px'}}
            transition = {transition}
            className="heart-rate">
                <img className='heart-img' src={heart} alt="The Heart"/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <motion.img 
            initial = {{right:'100px'}}
            whileInView = {{right:'370px'}}
            transition = {transition}
            className='hero-img-back' src={bars} alt="The Body"></motion.img>
            <motion.img 
            initial = {{right:'50px'}}
            whileInView = {{right:'170px'}}
            transition = {transition}
            className='hero-img' src={body} alt="The Body"></motion.img>
        
            <motion.div 
            initial = {{right:'850px'}}
            whileInView = {{right:'520px'}}
            transition = {transition}
            className="calories">
                <img src={calories} alt="calories"/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero