import React from 'react';
import './features.css';
import { Feature } from '../../components'

const featuresData = [
 { 
  text: 'follow me and let us explore what is all about gpt3 follow me and let us explore what is all about gpt3',
  title: 'Improving and distrusts instantly'
 },

 { 
  text: 'follow me and let us explore what is all about gpt3 follow me and let us explore what is all about gpt3',
  title: 'Become to extended active'
 },

 { 
  text: 'follow me and let us explore what is all about gpt3 follow me and let us explore what is all about gpt3',
  title: 'Message or am nothing'
 },

 { 
  text: 'follow me and let us explore what is all about gpt3 follow me and let us explore what is all about gpt3',
  title: 'Really boy law country'
 },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text"> The Future Is Now and You Just Need To Realise It. Step into The Futuer Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature  title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div> 
  )
}

export default Features
