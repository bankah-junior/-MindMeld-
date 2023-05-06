import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css';

const CTA = ({main, sub, url, actionName}) => {
  return (
    <div className="mindmeld__cta-border">
      <div className="mindmeld__cta">
        <div className="mindmeld__cta-content">
          <p>{ main }</p>
          <h3>{ sub }</h3>
        </div>
        <div className="mindmeld__cta-btn">
          <Link to={ url } className='button vibrate-1'>{ actionName }</Link>
        </div>
      </div>
    </div>
  )
}

export default CTA