import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../../components/article/Article';
import { B01, B02, B03, B04, B05 } from './imports';
import { blog01, blog02, blog03, blog04, blog05} from './blogsDB';
import './blogPreview.css';

const BlogPreview = () => {
  return (
    <div className="mindmeld__blog section__padding">
      <div className="mindmeld__blog-heading">
        <h1 className="gradient__text">Stay up-to-date with the latest happenings through our blog </h1>
      </div>
      <Link to='/blog' className='BP-btn pulsate-bck'>More blogs...</Link>
      <div className="mindmeld__blog-container">
        <div className="mindmeld__blog-container_groupA">
          <Article imgUrl={B01} date={blog01.date} text={blog01.title} author={blog01.author} id={blog01.id} />
        </div>
        <div className="mindmeld__blog-container_groupB">
          <Article imgUrl={B02} date={blog02.date} text={blog02.title} author={blog02.author} id={blog02.id} />
          <Article imgUrl={B03} date={blog03.date} text={blog03.title} author={blog03.author} id={blog03.id} />
          <Article imgUrl={B04} date={blog04.date} text={blog04.title} author={blog04.author} id={blog04.id} />
          <Article imgUrl={B05} date={blog05.date} text={blog05.title} author={blog05.author} id={blog05.id} />
        </div>
      </div>
      
    </div>
  )
}

export default BlogPreview