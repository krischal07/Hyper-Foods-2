import React, { useContext } from "react";
import hero_food from "../../assets/hero_food.png";
import heroimg from "../../assets/heroimg.png";
import "./HeroSection.css";
import imgcara from "../../assets/imgcara.png";
import { Button, Carousel } from "flowbite-react";
import myContext from "../../context/data/myContext";
const HeroSection = () => {
  const context = useContext(myContext);
  const { carasoule } = context;
  console.log(carasoule);
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

    <div className="h-56 sm:h-64 xl:h-[450px] 2xl:h-96 p-4">
      <Carousel slide={false}>
        <img src={imgcara} alt="..." className="w-full h-full object-cover" />
        {carasoule.map((item, index) => {
          {
            /* const { imageUrl } = item; */
          }
          return (
            <img
              src={item.imageUrl}
              alt="..."
              className="w-full h-full object-cover"
            />
          );
        })}
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          alt=""
        />

        <img src={heroimg} alt="..." className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
