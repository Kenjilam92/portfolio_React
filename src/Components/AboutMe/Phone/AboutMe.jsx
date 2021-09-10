import React from "react";
import Card from "../../General/Card";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        <p className="text-wrap">
          Hello,<br/>
          My name is <span className="text-warning font-weight-bold ">Kenji</span>! I am a digital marketing specialist and full-stack website developer. I have seven years of experience in building websites and developing online marketing strategies. One of my previous projects is even located within the top 3 results of Google Search! This expertise provides my clients with greater access to their targeted population. With my help, you can achieve high visibility and increase web traffic on all major search engines, such as Google, Bing, and Yahoo.
        </p>
        <p className="text-wrap">
          I have a great passion for technology and mathematics. I typed my first lines of code to solve algorithms when I was in high school. However, the internet and the technology of my country, Vietnam, in the 2000s, was not so advanced. Therefore, I focused on business fields and mathematics and got my bachelor's degree in Marketing Management. In 2014, I had my first job as a Digital Marketer, who analyze data and develop SEO strategies for commercial websites. This opportunity brought me closer to the web developer career. In 2016, I became a permanent resident of the United States and invested two years in college to understand the culture and market in the U.S. While adapting to this new life, I have been working on side-projects and developing my coding skills. Specifically, I can use multiple coding languages including Python, C#, and JavaScript. Also, I have proficiency in full-stack frameworks, such as Django, ASP.NET core MVC, MERN, etc., which connect with different database systems like MongoDB, MySQL, SQLite.
          </p>
        <p className="text-wrap">
          Besides continuously developing other coding languages, frameworks, and data management, I am still available for a fulltime position or side projects. If you are interested in working with me, please don't hesitate to leave me a message! It will be my pleasure to work with you.
        </p>
        <p className="h3 font-weight-bold text-warning">Technical Skills:</p>
        <div className="w-100 text-white">
        <Carousel {...settings}>
            <Card imglink="/images/skill/seo.png" imgalt="SEO">SEO</Card>
            <Card imglink="/images/skill/facebookads.png" imgalt="FacebookAds">Facebook Ads</Card>
            <Card imglink="/images/skill/googleads.png" imgalt="Google Adwords">Google Adwords</Card>
            <Card imglink="/images/skill/aws.png" imgalt="aws">AWS</Card>
            <Card imglink="/images/skill/html.png" imgalt="html">HTML</Card>
            <Card imglink="/images/skill/css.png" imgalt="css">CSS</Card>
            <Card imglink="/images/skill/javascript.png" imgalt="javascript">JavaScript</Card>
            <Card imglink="/images/skill/c-sharp.png" imgalt="c#">C#</Card>
            <Card imglink="/images/skill/python.png" imgalt="python">Python</Card>
            <Card imglink="/images/skill/react.png" imgalt="react">React</Card>
            <Card imglink="/images/skill/dotnet.png" imgalt="dotnet">.NET</Card>
            <Card imglink="/images/skill/aspcoremvc.png" imgalt="ASP_core_MVC">ASP Core MVC</Card>
            <Card imglink="/images/skill/expressjs.png" imgalt="expressjs">Express JS</Card>
            <Card imglink="/images/skill/nodejs.png" imgalt="nodejs">Node JS</Card>
            <Card imglink="/images/skill/django.png" imgalt="django">Django</Card>
            <Card imglink="/images/skill/bootstrap.png" imgalt="bootstrap">Bootstrap</Card>
            <Card imglink="/images/skill/jquery.png" imgalt="jquery">jQuery</Card>
            <Card imglink="/images/skill/socket.png" imgalt="socket">Socket IO</Card>
            <Card imglink="/images/skill/ajax.png" imgalt="ajax">Ajax</Card>
            <Card imglink="/images/skill/mysql.png" imgalt="mysql">MySQL</Card>
            <Card imglink="/images/skill/sqlite.png" imgalt="splite">SQLite</Card>
            <Card imglink="/images/skill/mongodb.png" imgalt="mongodb">MongoDB</Card>
            <Card imglink="/images/skill/wix.png" imgalt="Wix.com">Wix</Card>
            <Card imglink="/images/skill/coreldraw.png" imgalt="CorelDraw">CorelDraw</Card>
            <Card imglink="/images/skill/photoshop.png" imgalt="Photoshop">Photoshop</Card>
          </Carousel>
        </div>
      </div>
  );
}
export default AboutMe;