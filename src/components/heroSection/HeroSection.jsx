import React from 'react'
import hero_food from '../../assets/hero_food.png'
import heroimg from '../../assets/heroimg.png'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className='main'>
        <div className='left'>
            <h1>Delicious Food </h1>
            <p>EVERYDAY </p>
        </div>
        <div className='right'>
            <img src={heroimg}/>
        </div>

        
    </div>

  )
}

export default HeroSection