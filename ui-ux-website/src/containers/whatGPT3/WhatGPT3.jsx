import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return ( 
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title= "What Is GPT3" text="the possibilities are beyond your imagination so don't try to check it out the possibilities are beyond your imagination so don't try to check it out the possibilities are beyond your imagination so don't try to check it out" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities Are Beyond Your Imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature title= "Chatbots" text="follow me and let's explore what's all about gpt3"/>
      <Feature title="Knowledgebase" text="follow me and let's explore what's all about gpt3"/>
      <Feature title="Education" text="follow me and let's explore what's all about gpt3"/>
      </div>
    </div>
  )
}

export default WhatGPT3
