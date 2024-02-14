import React from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css";

function Slider(){
    let data = [
      {
        imgSrc: "slide2.png",
      },
      {
        imgSrc: "slide.png",
      },
      
    ];
    
    let sliderBoxStyle = {
      height: "730px",
      width:"1575px",
    };
    
    let itemsStyle = {
      height: "730px",
      width:"1575px",
      padding: "0px",
      borderRadius: "4px",
      margin: "0px 0px",
    };

    let buttonSetting = {
      placeOn: "middle-inside"
    };
    
    let manner = {
      autoSliding: {interval: "4s"},
      duration: "1.3s"
    };

    return(
      <div>
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
      />
        </div>

    );
  }


export default Slider;
