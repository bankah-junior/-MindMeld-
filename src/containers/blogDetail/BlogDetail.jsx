import React from 'react';
import { Navbar, Footer } from '../../components';
import { blog01, blog02, blog03, blog04, blog05, blog08, blog09, blog10, blog11, blog12, blog13, blog14, blog15 } from '../../components/blogPreview/blogsDB';
import { B01, B02, B03, B04, B05, BP01, BP02, BP03, BP04, BP05, BP06, BPF01, BPF02 } from '../../components/blogPreview/imports';
import { useParams, useHistory } from 'react-router-dom';
import './blogDetail.css';

const BlogDetail = () => {
  const history = useHistory();
  var { id } = useParams();
  switch(id) {
    case "blog01":
      id = blog01;
      blog01.image = B01;
      break;
    case "blog02":
      id = blog02;
      blog02.image = B02;
      break;
    case "blog03":
      id = blog03;
      blog03.image = B03;
      break;
    case "blog04":
      id = blog04;
      blog04.image = B04;
      break;
    case "blog05":
      id = blog05;
      blog05.image = B05;
      break;
    case "blog08":
      id = blog08;
      blog08.image = BP01;
      break;
    case "blog09":
      id = blog09;
      blog09.image = BP02;
      break;
    case "blog10":
      id = blog10;
      blog10.image = BP03;
      break;
    case "blog11":
      id = blog11;
      blog11.image = BP04;
      break;
    case "blog12":
      id = blog12;
      blog12.image = BP05;
      break;
    case "blog13":
      id = blog13;
      blog13.image = BP06;
      break;
    case "blog14":
      id = blog14;
      blog14.image = BPF01;
      break;
    case "blog15":
      id = blog15;
      blog15.image = BPF02;
      break;
    default:
      history.go(-1);
  }

  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <div className="content">
        <div className="mindmeld__blogDetail">
          <div className="mindmeld__blogDetail-banner" style={{
            backgroundImage: `url(${id.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
            {/* <img src={id.image} alt="bp" /> */}
            <div className="mindmeld__blogDetail-banner-cover"></div>
          </div>
          <div className="mindmeld__blogDetail-info">
            <h4 className="author">By: { id.author } </h4>
            <h5 className="date"> { id.date } </h5>
            <h2 className="title gradient__text"> { id.title } </h2>
            <p className="gist"> { id.gist } </p>
            <ul className="points">
              <li>
                <b><u>{ id.point1.title }</u></b>: { id.point1.body }
              </li>
              <li>
                <b><u>{ id.point2.title }</u></b>: { id.point2.body }
              </li>
              <li>
                <b><u>{ id.point3.title }</u></b>: { id.point3.body }
              </li>
              <li>
                <b><u>{ id.point4.title }</u></b>: { id.point4.body }
              </li>
            </ul>
            <p className="conclusion"> { id.conclusion } </p>
          </div>
          <div className="back">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetail