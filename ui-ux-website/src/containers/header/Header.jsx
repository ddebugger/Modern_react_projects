import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptatem accusantium aliquid dolorem eius libero placeat, similique doloremque nemo? Tenetur.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='enter your email' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src= {people} alt="people" />
          <p>16000 people requested access for visit in less than 24hours</p>
        </div> 
      </div>

      <div className="gpt3__header-image">
        <img src= {ai} alt="ai" />
      </div>
    </div> 
  )
}

export default Header
