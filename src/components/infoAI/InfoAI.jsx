import React from 'react';
import Feature from '../feature/Feature';
import './infoAI.css';

const InfoAI = () => {
  return (
    <div className='mindmeld__mindmeld-border section__margin'>
      <div className="mindmeld__mindmeld">
        <div className="mindmeld__mindmeld-feature">
          <Feature title="Creative Innovation" text='Explore how imagination and creativity are key drivers of innovation and how the phrase "beyond your imagination" suggests that there are still unexplored possibilities and untapped potential in various fields and industries.' />
        </div>
        <div className="mindmeld__mindmeld-heading">
          <h1 className="gradient__text">The potential exceeds your wildest imagination</h1>
          <p>Let's build your imagination together</p>
        </div>
        <div className="mindmeld__mindmeld-container">
          <Feature title="Advancements in Technology" text='Look at how technology has been advancing rapidly years and how the phrase "beyond your imagination" indicates that there are still untapped possibilities and advancements that are yet to be discovered.' />
          <Feature title="Future Predictions" text='Delve into future predictions based on emerging technologies and trends, such as AI, machine learning and automation. The phrase "beyond your imagination" implies that there may be unexpected or unknown possibilities that could impact the future in ways that we cannot yet conveive.' />
          <Feature title="Creative Thinking" text='Focus on the role of creative thinking in problem-solving and decision-making. The phrase "beyond your imagination" suggests that thinking outside the box and challenging the status quo can lead to innovative and transformative solutions that are beyond what can currently imagine' />
        </div>
      </div>
    </div>
  )
}

export default InfoAI