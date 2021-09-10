import React from "react";
import Card from "../../General/Card";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutMeAPI from 'APIs/AboutMeAPI';

const AboutMe = props =>{
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 20,
    slidesToShow: 12,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      }
    ],
  };
  
  return(
      <div id={props.id} className={`${props.className}`} style={props.style}>
        <p className="h1 font-weight-bold text-warning text-sm-left text-center">About Me</p>
        { AboutMeAPI.content.map((c,k) =>
          <p className="text-wrap" key={`aboutMeParagraph${k}`}>
            {c}
          </p>  
        )}
        
        
        <p className="h3 font-weight-bold text-warning">Technical Skills:</p>
        <div className="w-100 text-white">
          <Carousel {...settings}>
              {AboutMeAPI.skill.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          
          </Carousel>
        </div>
      </div>
  );
}
export default AboutMe;