import React from 'react';
import Feature from '../feature/Feature';
import './featuresSection.css';

const featuresData = [
  {
    title: 'Personal Empowerment',
    text: 'Explore how individuals can take control of their future by setting goals, taking action, and making the most of their present opportunities.',
  },
  {
    title: 'Innovation and Entrepreneurship',
    text: 'Examine the role of innovation and entrepreneurship in shaping the future of various industries and domains.',
  },
  {
    title: 'Digital Transformation',
    text: 'Focus on the impact of digital and technologies on the future of work, education, and society.',
  },
  {
    title: 'Sustainability and Environmentalism',
    text: 'Address the importance of sustainability and environmentalism in shaping a better future for the planet and its inhabitants.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="mindmeld__features section__padding">
      <div className="mindmeld__features-heading">
        <h1 className="gradient__text">The Future is within reach, waiting for you to seize it. Take action today and shape the future you want to see.</h1>
        <p>Learning never seize</p>
      </div>
      <div className="mindmeld__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection