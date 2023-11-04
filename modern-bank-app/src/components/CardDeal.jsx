import React from 'react';
import { card } from "../assets";
import styles, { layout } from '../style';
import Button from './Button';
 
const CardDeal = () => {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in a few steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This is a first trust banking app system with reliable and 
          prominent resources, offering good quality customer services.
          methods
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )
}

export default CardDeal
