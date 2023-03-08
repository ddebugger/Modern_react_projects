import React from 'react';
import './possibility.css';
import possibilityImage from "../../assets/possibility.png"


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">The Possibilities Are Beyong Your Imagination</h1>
        <p>Yet bed any for travelling assistance indulgence Yet bed any for travelling assistance indulgence Yet bed any for travelling assistance indulgence</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div> 
  )
}

export default Possibility
