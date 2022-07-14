import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import JoinUs from './components/join/JoinUs';
import Modal from './components/modal/Modal';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reason from './components/reasons/Reason';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  
  const [modal, setModal] = useState(false);
  const [emailmsg, setEmailMsg] = useState("");

  return (
    <div className="App">
        <Hero  setModal={setModal} setEmailMsg={setEmailMsg}/>
        <Programs setModal={setModal} setEmailMsg={setEmailMsg}/>
        <Reason setModal={setModal} setEmailMsg={setEmailMsg}/>
        <Plans setModal={setModal} setEmailMsg={setEmailMsg}/>
        <Testimonial/>
        <JoinUs  setModal={setModal} setEmailMsg={setEmailMsg}/>
        <Footer/>
        
        {modal && <Modal setModal={setModal} emailmsg={emailmsg} setEmailMsg={setEmailMsg}/>}
    </div>
  );
}

export default App;
