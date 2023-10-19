import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

 const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ditcsii', 'template_xm6wwpd', form.current, 'mmlMWePFsnSUSzZDR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };

    return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <aricle className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>samiullah0813@gmail.com</h5>
            <a href="mailto:samiullah0813@gmail.com" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>
          
          <aricle className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@MohdSamiullah</h5>
            <a href="https://t.me/MohdSamiullah" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>

          <aricle className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>+917428098866</h5>
            <a href="https://web.whatsapp.com/send?phone=+917428098866" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>
          </div>

          {/* /* ======================== FORM ========================= */ }

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='loginBtn'>Send a message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact
