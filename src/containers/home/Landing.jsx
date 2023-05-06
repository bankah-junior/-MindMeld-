import React from 'react'
import { CTA, Brand, Navbar, Footer, Header, BlogPreview, FeaturesSection, InfoAI, Possibility } from '../../components';
import aiHeader from '../../assets/aiHeader.gif';

const title = 'Unleash the Power of AI to Build Something Truly Amazing';
const description = "Speaks to the potential AI to create innovating and ground breaking applications. By harnessing the power of advanced language models, users can push the boundaries of what's possible and build something truly extraordinary. Whatever it's in content creation, chatbots, or other AI-powered solutions. AI technology offers endless possibilities for those who dare to dream big.";
const summary = "1,600 people requested access a visit in last 24 hours";

const Landing = () => {
  return (
    <div>
        <div className='gradient__bg'>
            <Navbar />
            <Header title={title} description={description} summary={summary} image={aiHeader} />
        </div>
        <div className='content'>
            <Brand />
            <InfoAI />
            <FeaturesSection />
            <Possibility />
            <CTA main='FAQs' sub='FEQUENTLY ASKED QUESTIONS AND ANSWERS' url='/faqs' actionName='Click Me'/>
            <BlogPreview />
        </div>
        <Footer />      
    </div>
  )
}

export default Landing