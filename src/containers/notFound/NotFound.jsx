import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <div>
        <div className='content'>
            <div className="mindmeld__notFound-container ">
                <div id="particles" class="particles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <main>
                    <section>
                    <h1>Page Not Found!</h1>
                    <div>
                        <span>4</span>
                        <span class="circle">0</span>
                        <span>4</span>
                    </div>
                    <p>We are unable to find the page<br/>you're looking for.</p>
                    <div>
                        <button> <Link to='/' >Back to Home Page</Link> </button>
                    </div>
                    </section>
                </main>
            </div>          
        </div>
    </div>
  )
}

export default NotFound