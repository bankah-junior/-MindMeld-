import React from 'react';
import { Navbar, Footer } from '../../components';
import './contact.css';

const Contact = () => {
  return (
    <div>
        <div className='gradient__bg'>
            <Navbar />
        </div>
        <div className='content'>
            <div className="mindmeld__contact-container">
              <div className="mindmeld__contact-container-left">
                <div className="mindmeld__contact-container-left-main">
                  <h2>Contact Us</h2>
                  <p>Location: UMaT-SRID, Western Region, Ghana</p>
                  <p>Mail Us: <a href="mailto:antqueenbankah95@gmail.com">antqueenbankah95@gmail.com</a></p>
                  <p>Call Us: <a href="tel:+233262991910">+233 262 991 910</a></p>
                </div>
              </div>
              <div className="mindmeld__contact-container-right">
                <div className="mindmeld__contact-container-right-blank"></div>
                <div className="mindmeld__contact-container-right-form">
                  <h2>Get in Touch</h2>
                  <p>feel free to drop us a line before!</p>
                  <form>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                    <input type="email" name="email" id="email" placeholder='Your Email' />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here...'></textarea>
                    <button type="submit">SEND</button>
                  </form>
                </div>
              </div>
            </div>          
        </div>
        <Footer /> 
    </div>
  )
}

export default Contact