import React from 'react'
import hero_food from '../../assets/hero_food.png'
import heroimg from '../../assets/heroimg.png'
import './HeroSection.css'
import {Button, Carousel} from "flowbite-react"
const HeroSection = () => {
  return (
//     <div className='main'>
//         <div className='left'>
//             <h1>Delicious Food </h1>
//             <p>EVERYDAY </p>
//         </div>
//         <div className='right'>
//             <img src={heroimg}/>
//         </div>
        
//     </div>

<div className="h-56 sm:h-64 xl:h-96 2xl:h-96 p-4">
      <Carousel slide={false}>
        <img src={hero_food} alt="..." className="w-full h-full object-cover" />
        <img src={heroimg} alt="..." className="w-full h-full object-cover" />
      </Carousel>
    </div>


  )
}

export default HeroSection