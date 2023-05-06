import React from 'react';
import { Navbar, Footer } from '../../components';
import aboutMission from '../../assets/about/about-mission.jpg';
import aboutGoal from '../../assets/about/about-goal.jpg';
import aboutPurpose from '../../assets/about/about-purpose.jpg';
import './about.css';
import '../faqs/faqs.css';

const About = () => {
  return (
    <div>
        <div className='gradient__bg'>
            <Navbar />
            <div className='mindmeld__aboutPage-header'>
              <div className="mindmeld__aboutPage-header-cover"></div>
            </div>
        </div>
        <div className='content'>
            <div className="mindmeld__aboutPage-container">
              <div className="mindmeld__aboutPage-container-purpose pmg-container">
                <div className="mindmeld__aboutPage-container-purpose-text pmg-text">
                  <h2>Our Purpose</h2>
                  <p>
                    The purpose of MindMeld is to create a platform for individuals and organizations to learn about 
                    and explore the world of artificial intelligence. The website aims to provide a comprehensive 
                    understanding of AI technologies, their applications, and their implications for society.
                  </p>
                </div>
                <div className="mindmeld__aboutPage-container-purpose-image pmg-image">
                  <img src={ aboutPurpose } alt="ai" />
                </div>
              </div>
              <div className="mindmeld__aboutPage-container-mission pmg-container">
                <div className="mindmeld__aboutPage-container-mission-text pmg-text">
                  <h2>Our Mission</h2>
                  <p>
                    Our mission is to be the go-to resource for everything related to AI. We strive to create a community 
                    of individuals passionate about AI, where they can engage in discussions, share their knowledge, and 
                    learn from others.
                  </p>
                </div>
                <div className="mindmeld__aboutPage-container-mission-image pmg-image">
                  <img src={ aboutMission } alt="ai" />
                </div>
              </div>
              <div className="mindmeld__aboutPage-container-goal pmg-container">
                <div className="mindmeld__aboutPage-container-goal-text pmg-text">
                  <h2>Our Goals</h2>
                  <p>
                    <b>Educate</b>: MindMeld aims to educate individuals on the fundamentals of AI and its applications, 
                    providing a comprehensive understanding of the technology and its impact on society.
                  </p>
                  <p>
                    <b>Inform</b>: MindMeld aims to keep its readers informed about the latest developments in AI, 
                    providing in-depth analysis and insights on emerging trends, research, and technologies.
                  </p>
                  <p>
                    <b>Inspire</b>: The website aims to inspire individuals to create and innovate using AI, promoting 
                    its use for the betterment of society.
                  </p>
                  <p>
                    <b>Advocate</b>: MindMeld aims to advocate for ethical and responsible use of AI, raising awareness 
                    of potential risks and implications for society.
                  </p>
                  <p>
                    <b>Partner</b>: The website aims to collaborate with businesses, organizations, and experts in the 
                    field of AI, fostering innovation and knowledge sharing in the industry.
                  </p>
                </div>
                <div className="mindmeld__aboutPage-container-goal-image pmg-image">
                  <img src={ aboutGoal } alt="ai" />
                </div>
              </div>
            </div>
            <div className="mindmeld__faqs-container-footer">
              <div className="mindmeld__faqs-container-footer-cover">
                <h2>Still having questions? Send us a note!</h2>
                <p>
                  for any other questions, please write to us at <a href="mailto:antqueenbankah95@gmail.com">antqueenbankah95@gmail.com</a> <br /> 
                  or call us on <a href="tel:+233262991910">+233 262 991 910</a>
                </p>
              </div>
            </div>         
        </div>
        <Footer /> 
    </div>
  )
}

export default About