import React from 'react';
import vry from '../../assets/vry.gif';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="mindmeld__possibility section__padding">
      <div className="mindmeld__possibility-image">
        <img src={vry} alt="possibility" />
      </div>
      <div className="mindmeld__possibility-content">
        <h4>Expand your knowledge</h4>
        <h1 className="gradient__text">"The potential exceeds your wildest imagination"</h1>
        <p>
          There are limitless opportunities and potentials available to us that we may not be able to imagine or conceive of at this moment. It 
          speaks to the idea that the boundaries of what is possible are not fixed and can be expanded through creativity, innovation, and 
          exploration. By embracing this mindset of boundless possibility, we can tap into our curiosity and ingenuity to discover new ways of 
          thinking, doing and being, ultimately leading us to a future that exceeds our wildest dreams.
        </p>
        <h4>The power lies within</h4>
      </div>
    </div>
  )
}

export default Possibility