import React, { useContext } from "react";

import cara0 from "../../assets/imgcara.png";
import cara5 from "../../assets/cara5.png";
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
    <div className="h-56 sm:h-64 xl:h-[450px] 2xl:h-96 p-4 w-full">
      <Carousel slide={false}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            id="carasoule-img"
            src={cara0}
            alt="..."
            className="w-full h-[450px] object-cover"
          />
        </div>
        <img
          id="carasoule-img"
          src={cara5}
          alt="..."
          className="w-full h-[450px] object-cover"
        />
        <img
          id="carasoule-img"
          src={cara3}
          alt="..."
          className="w-full h-[450px] object-cover"
        />

        {carasoule.map((item, index) => {
          return (
            <div>
              <img
                src={item.imageUrl}
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroSection;
