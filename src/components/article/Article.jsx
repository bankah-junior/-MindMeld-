import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';

const Article = ({ imgUrl, date, text, author, id }) => {
  return (
    <div className="mindmeld__blog-container_article">
      <div className="mindmeld__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="mindmeld__blog-container_article-content">
        <div key={id}>
          <p>{date}</p>
          <h3> <Link to={`/blogdetail/${id}`}>{text}</Link> </h3>
        </div>
        <p>Written by: {author}</p>
      </div>
    </div>
  )
}

export default Article