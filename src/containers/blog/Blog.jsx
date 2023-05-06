import React from 'react';
import { Navbar, Footer } from '../../components';
import { Link } from 'react-router-dom';
import { blog08, blog09, blog10, blog11, blog12, blog13, blog14, blog15 } from '../../components/blogPreview/blogsDB';
import './blog.css';

const Blog = () => {
  return (
    <div>
        <div className='gradient__bg'>
            <Navbar />
            <div className='mindmeld__blogPage-header section__padding'>
              <div className='mindmeld__blogPage-header-top scale-in-center'>
                <h2 className='gradient__text'>Unimaginable artificial intelligence</h2>
                <p>
                  There are infinite opportunities and potentials beyond our current comprehension in the field of AI. 
                  It encourages us to broaden our perspectives and embrace new ideas in the development and application 
                  of AI.
                </p>
              </div>
              <div className='mindmeld__blogPage-header-bottom'>
                <div className='mindmeld__blogPage-header-bottom-left'>
                  <div className='bar'></div>
                  <h4>The Future is Excited</h4>
                </div>
                <div className='mindmeld__blogPage-header-bottom-right'>
                  <div className='bar'></div>
                  <h4>MindMeld</h4>
                </div>
              </div>
            </div>
        </div>
        <div className='content'>
          <div className="mindmeld__blogPage-container">
            <div className='mindmeld__blogPage-container-posts'>
              <div className="mindmeld__blogPage-container-posts-left">
                <div className="p1">
                  <div className="top">
                    <p>04-May-23</p>
                  </div>
                  <div className="middle">
                    <h2>00:50:30</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog08.id}`}>
                        <h3>{ blog08.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog08.author }</p>
                    </Link>
                  </div>
                </div>
                <div className="p2">
                  <div className="top">
                    <p>01-May-23</p>
                  </div>
                  <div className="middle">
                    <h2>00:30:30</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog09.id}`}>
                        <h3>{ blog09.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog09.author }</p>
                    </Link>
                  </div>
                </div>
                <div className="p3">
                  <div className="top">
                    <p>20-Apr-23</p>
                  </div>
                  <div className="middle">
                    <h2>01:00:00</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog10.id}`}>
                        <h3>{ blog10.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog10.author }</p>
                    </Link>
                  </div>
                </div>
                <div className="p4">
                  <div className="top">
                    <p>05-Apr-23</p>
                  </div>
                  <div className="middle">
                    <h2>00:40:35</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog11.id}`}>
                        <h3>{ blog11.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog11.author }</p>
                    </Link>
                  </div>
                </div>
                <div className="p5">
                  <div className="top">
                    <p>30-Mar-23</p>
                  </div>
                  <div className="middle">
                    <h2>00:50:00</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog12.id}`}>
                        <h3>{ blog12.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog12.author }</p>
                    </Link>
                  </div>
                </div>
                <div className="p6">
                  <div className="top">
                    <p>02-Feb-23</p>
                  </div>
                  <div className="middle">
                    <h2>00:30:30</h2>
                  </div>
                  <div className="bottom">
                    <Link to={`/blogdetail/${blog13.id}`}>
                        <h3>{ blog13.title }</h3>
                        <div className="bar"></div>
                        <p>{ blog13.author }</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mindmeld__blogPage-container-posts-right">
                  <h2 className='cat'>CATEGORIES</h2>
                <div className="mindmeld__blogPage-container-posts-right-top">
                  <div className="tag1">All +</div>
                  <div className="tag2">Latest +</div>
                  <div className="tag3">Explore +</div>
                  <div className="tag4">Trending +</div>
                  <div className="tag5">Popular +</div>
                </div>
                <div className="mindmeld__blogPage-container-posts-right-bottom">
                  <div className="bar"></div>
                  <h2 className='cat' style={{
                    marginTop: '1rem'
                  }}>QUOTES</h2>
                  <p>
                    "You are who you imagine yourself - 'B.A.B' "
                  </p>
                  <p>
                    "Travel everywhere, anywhere with your imagination - 'B.A.B' "
                  </p>
                  <p>
                    "Your knowledge is your top property, guide it - 'B.A.B' "
                  </p>
                  <p>
                    "Be the person you want to become by making possibilities out of impossibilities - 'B.A.B' "
                  </p>
                  <p>
                    "Whatever you want to become starts from mindset - 'B.A.B' "
                  </p>
                </div>
              </div>
            </div>
            <h2 className='blog-banner gradient__text'>HAVING A WONDERFUL TIME MELDING YOUR MIND WITH AI?</h2>
            <div className="mindmeld__blogPage-container-otherPosts">
              <div className="mindmeld__blogPage-container-otherPosts-left">
                <h2>Info</h2>
                <div className="info-box">
                  <p><b>BANKAH ANTHONY BEKOE</b> <sub>@iam.bankah - 3h</sub></p>
                  <p>Happy Holiday! Promo code <i>LA54DQ</i> <a href="#home">LINK</a></p>
                  <p> ♥2,254,224 Likes </p>
                </div>
                <div className="info-box">
                  <p><b>BANKAH ANTHONY BEKOE</b> <sub>@iam.bankah - 1h</sub></p>
                  <p>Be with us for more catchy blogs are coming</p>
                  <p> ♥954,874 Likes </p>
                </div>
              </div>
              <div className="mindmeld__blogPage-container-otherPosts-right">
                <div className="op op1">
                  <Link to={`/blogdetail/${blog14.id}`}>
                    <h2>{ blog14.title }</h2>
                  </Link>
                </div>
                <div className="op op2">
                  <Link to={`/blogdetail/${blog15.id}`}>
                    <h2>{ blog15.title }</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <Footer />  
    </div>
  )
}

export default Blog