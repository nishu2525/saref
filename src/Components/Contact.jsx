import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>

      <h1 className="contact_title">Get in Touch</h1>
      <h2 className="connect_title"> Connect with Passion!</h2>

      <div className='welcome_para'>
        <p>Welcome! At Sare Foundation, we believe in building a better world through
          "Connect with Passion". This page provides you with multiple avenues to reach
          us, whether you're a curious supporter, a passionate volunteer, or a potential
          collaborator.</p>
      </div>
      <aside className='aside'>
        <p className='tel-text'>Let's talk:</p>
      </aside>
      <div className='contact_container'>
        <p className='email'>
          •Email: <a className='tel_no' href='https://mail.google.com/'> sarefoundation@gmail.com</a>
          </p>
          <p className='email'>
          •Mobile / WhatsApp:   <span className='tel_no'><a href="">+91-9075222500 </a>(Amravati Region)</span>
          </p>

          <p className='email'>
          •Mobile / WhatsApp:   <span className='tel_no'><a href="">+91-8097692606 </a> &nbsp;(Bandra, Mumbai Reagion)</span>
          </p>
        


  
      </div>
      


    </div>

  )
}

export default Contact;