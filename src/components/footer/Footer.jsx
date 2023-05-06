import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="mindmeld__footer section__padding">  
      <div className="mindmeld__footer-links">
        <div className="mindmeld__footer-links_logo">
          <h2> <Link to='/'>MindMeld</Link> </h2>
          <p>The future is excited!</p>
        </div>
        <div className="mindmeld__footer-links_div">
          <h4>Socail Media</h4>
          <p> <a href="https://twitter.com/iam_bankah?t=UFouGnCo6AL1bxU_MMVRg&s=09">Twitter</a> </p>
          <p> <a href="https://github.com/bankah-junior">GitHub</a> </p>
          <p> <a href="https://www.linkedin.com/in/anthony-bekoe-bankah-080448240">LinkedIn</a> </p>
          <p> <a href="https://www.youtube.com/@welearn2">YouTube</a> </p>
        </div>
        <div className="mindmeld__footer-links_div">
          <h4>Quick links</h4>
          <p> <Link to='/'>Home</Link> </p>
          <p> <Link to='/about'>About</Link> </p>
          <p> <Link to='contact/'>Contact</Link> </p>
        </div>
        <div className="mindmeld__footer-links_div">
          <h4>Get in touch</h4>
          <p>UMaT-SRID, Western Region, Ghana</p>
          <p><a href="tel:+233262991910">+233 262 991 910</a></p>
          <p><a href="mailto:antqueenbankah95@gmail.com">antqueenbankah95@gmail.com</a></p>
        </div>
      </div>
  
      <div className="mindmeld__footer-copyright">
        <p>@2023 BankiDes. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer