import React from 'react';
import { facebook } from "../assets";
import styles from '../style'; 
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* todo */}
      <div  className='aboslute z-[0] -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/>in a few steps</h2>
        
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[450px] text-left mt-5`}>
            Everything you need to accept card payment 
            and grow your business anywhere on the planet
          </p>
        </div>

      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {facebook.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
