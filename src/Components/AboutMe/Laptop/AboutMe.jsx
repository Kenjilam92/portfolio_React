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
        
        
        {/* <p className="text-wrap">
          Hello,<br/>
          My name is <span className="text-warning font-weight-bold ">Kenji</span>! I am a digital marketing specialist and full-stack website developer. I have seven years of experience in building websites and developing online marketing strategies. One of my previous projects is even located within the top 3 results of Google Search! This expertise provides my clients with greater access to their targeted population. With my help, you can achieve high visibility and increase web traffic on all major search engines, such as Google, Bing, and Yahoo.
        </p>
        <p className="text-wrap">
          I have a great passion for technology and mathematics. I typed my first lines of code to solve algorithms when I was in high school. However, the internet and the technology of my country, Vietnam, in the 2000s, was not so advanced. Therefore, I focused on business fields and mathematics and got my bachelor's degree in Marketing Management. In 2014, I had my first job as a Digital Marketer, who analyze data and develop SEO strategies for commercial websites. This opportunity brought me closer to the web developer career. In 2016, I became a permanent resident of the United States and invested two years in college to understand the culture and market in the U.S. While adapting to this new life, I have been working on side-projects and developing my coding skills. Specifically, I can use multiple coding languages including Python, C#, and JavaScript. Also, I have proficiency in full-stack frameworks, such as Django, ASP.NET core MVC, MERN, etc., which connect with different database systems like MongoDB, MySQL, SQLite.
          </p>
        <p className="text-wrap">
          Besides continuously developing other coding languages, frameworks, and data management, I am still available for a fulltime position or side projects. If you are interested in working with me, please don't hesitate to leave me a message! It will be my pleasure to work with you.
        </p> */}
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