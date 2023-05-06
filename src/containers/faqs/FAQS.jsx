import React from 'react';
import { Navbar, Footer, FAQsComp } from '../../components';
import { eight, five, four, nine, one, six, ten, three, two, seven } from '../../components/faqsComp/QAs';
import './faqs.css';

const FAQS = () => {
  return (
    <div>
        <div className='gradient__bg'>
            <Navbar />
        </div>
        <div className='content'>
            <div className="mindmeld__faqs-container">
              <div className="mindmeld__faqs-container-header section__padding">
                <h2>FAQs</h2>
                <p>Frequently Asked Questions. <br /> Here are some common questions about <cite>MindMeld</cite> and <cite>AI</cite> in general </p>
              </div>
              <div class="faq">
                <ul class="accordion">
                  <FAQsComp place={one.place} question={one.question} answer={one.answer} />
                  <FAQsComp place={two.place} question={two.question} answer={two.answer} />
                  <FAQsComp place={three.place} question={three.question} answer={three.answer} />
                  <FAQsComp place={four.place} question={four.question} answer={four.answer} />
                  <FAQsComp place={five.place} question={five.question} answer={five.answer} />
                  <FAQsComp place={six.place} question={six.question} answer={six.answer} />
                  <FAQsComp place={seven.place} question={seven.question} answer={seven.answer} />
                  <FAQsComp place={eight.place} question={eight.question} answer={eight.answer} />
                  <FAQsComp place={nine.place} question={nine.question} answer={nine.answer} />
                  <FAQsComp place={ten.place} question={ten.question} answer={ten.answer} />
                </ul>
              </div>
              <div className="mindmeld__faqs-container-footer">
                <div className="mindmeld__faqs-container-footer-cover">
                  <h2>Still need hlep? Send us a note!</h2>
                  <p>
                    for any other questions, please write to us at <a href="mailto:antqueenbankah95@gmail.com">antqueenbankah95@gmail.com</a> <br /> 
                    or call us on <a href="tel:+233262991910">+233 262 991 910</a>
                  </p>
                </div>
              </div>
            </div>          
        </div>
        <Footer /> 
    </div>
  )
}

export default FAQS