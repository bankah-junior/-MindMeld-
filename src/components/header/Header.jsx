import React from 'react';
import './header.css';

const Header = (props) => {
  const title = props.title;
  const description = props.description;
  const summary = props.summary;
  const image = props.image;

  return (
    <div className="mindmeld__header section__padding">
      <div className="mindmeld__header-content">
        <h1 className="gradient__text">{ title }</h1>
        <p>{ description }</p>
  
        <div className="mindmeld__header-content__people">
          <p>{ summary }</p>
        </div>
      </div>
  
      <div className="mindmeld__header-image slide-in-bck-left">
        <img src={ image } alt='ai'/>
      </div>
    </div>
  )
}

export default Header