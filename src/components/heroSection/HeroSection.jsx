import React, { useContext } from "react";

import cara0 from "../../assets/imgcara.png";
import cara5 from "../../assets/cara5.png";
import cara6 from "../../assets/cara design.png";
import cara1 from "../../assets/devashish carasoule1.png";
import cara2 from "../../assets/devashish carasoule 2.png";
import cara3 from "../../assets/cara3.png";
import { Button, Carousel } from "flowbite-react";
import myContext from "../../context/data/myContext";
const HeroSection = () => {
  const context = useContext(myContext);
  const { carasoule } = context;
  console.log(carasoule);
  return (
    // <div className="h-56 sm:h-64 lg:h-[450px] xl:h-[550px] 2xl:h-96 p-4 w-full">
    //   <Carousel slide={false}>
    //     <div className="aspect-w-16 aspect-h-9">
    //       <img
    //         id="carasoule-img"
    //         src={cara0}
    //         alt="..."
    //         className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
    //       />
    //     </div>
    //     <img
    //       id="carasoule-img"
    //       src={cara5}
    //       alt="..."
    //       className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
    //     />
    //     <img
    //       id="carasoule-img"
    //       src={cara3}
    //       alt="..."
    //       className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
    //     />
    //     <img
    //       id="carasoule-img"
    //       src={cara6}
    //       alt="..."
    //       className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
    //     />
    //     {carasoule.map((item, index) => {
    //       return (
    //         <div key={index} className="aspect-w-16 aspect-h-9">
    //           <img
    //             src={item.imageUrl}
    //             alt="..."
    //             className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
    //           />
    //         </div>
    //       );
    //     })}
    //   </Carousel>
    // </div>

    <div className="w-full p-4">
      <Carousel slide={false} className="rounded-lg overflow-hidden">
        {/* Static Images */}
        {[cara0, cara5, cara6, cara3].map((imageSrc, index) => (
          <div
            key={index}
            className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/9]"
          >
            <img
              src={imageSrc}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dynamic Images */}
        {carasoule.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/9]"
          >
            <img
              src={item.imageUrl}
              alt={`Dynamic Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
