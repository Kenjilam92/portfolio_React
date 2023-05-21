import React, {useState, useEffect} from "react";
import Card from "../General/Card";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutMe = props =>{
  const [AboutMeAPI, setAboutMeAPI] =useState({
    "content": [],
    "skill":[]
  })
  const order = [
    "Shell Script","Java","C#","TypeScript","Python","HTML","CSS","JavaScript",
    "Spring", ".NET", "Django","Angular","React","Bootstrap", "ASP Core","Socket IO", "jQuery","Express JS",
    "Service Now","Jira","Git","Jenkins","Docker","AWS","OpenShift","Node Js",
    "Oracle","DB2", "AWS","Sybase","MongoDB","MySQL", "SQLite", 
    "SEO","Facebook Ads", "Google Adwords", "Photoshop","CorelDraw","Wix"
  ];

  const getData =() => {
      fetch("/json/AboutMeAPI.json", {
          headers:{
              "Content-Type":"application/json",
              Accept: "application/json"
          },
      })
      .then ( res => res.json() )
      .then ( json => {
        var tempJson = json; 
        tempJson.skill.sort(orderFunction)
        tempJson.skill = tempJson.skill.filter((a) => order.includes(a.title));
        setAboutMeAPI(tempJson);
      })
  }

  const orderFunction = (a,b) => {
    return order.indexOf(a.title)-order.indexOf(b.title);
  }
  useEffect( () => getData() , [] );  

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
        breakpoint: 769,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ],
  };
  
  return(
      <div id={props.id} className={`${props.className}`} style={props.style}>
        <p className="h1 font-weight-bold text-warning text-md-left text-center">About Me</p>
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