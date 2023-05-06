import React from 'react';
import './faqsComp.css';

const FAQsComp = ({place, question, answer}) => {
  return (
    <div>
        <li>
            <input type="radio" name="accordion" id={place} />
            <label for={place}>{ question }</label>
            <div class="content">
                <p>
                    { answer }
                </p>
            </div>
        </li>
    </div>
  )
}

export default FAQsComp