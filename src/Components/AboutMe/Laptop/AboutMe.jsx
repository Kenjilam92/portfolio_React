import React, {useState, useEffect} from "react";
import Card from "../../General/Card";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = props =>{
  const [AboutMeAPI, setAboutMeAPI] =useState({
    "content": [],
    "skill":[]
  })
  const [CodingLanguages,setCodingLanguages] = useState([]);
  const [FrameWorks,setFrameWorks] = useState([]);
  const [CICD,setCICD] = useState([]);
  const [Other,setOther] = useState([]);
  
  // const order = [
  const CICDList = ["Service Now","Jira","Git","Jenkins","Docker","Node Js"];
  const CodingLanguagesList =["Shell Script","Java","C#","TypeScript","Python","HTML","CSS","JavaScript"];
  const FrameWorksList = ["Spring", ".NET", "ASP_Core","Django","Angular","React","Bootstrap"];
  const OtherList = ["SEO","Facebook Ads", "Google Adwords", "Photoshop","CorelDraw"];
  
  const getData =() => {
      fetch("/json/AboutMeAPI.json", {
          headers:{
              "Content-Type":"application/json",
              Accept: "application/json"
          },
      })
      .then ( res => res.json() )
      .then ( json => {
        // var tempJson = json; 
        // tempJson.skill.sort(orderFunction)
        // tempJson.skill = tempJson.skill.filter((a) => order.includes(a.title));
        setAboutMeAPI(json);
        let tempJson = json.skill;
        setCodingLanguages(
          json.skill.sort( (a,b) => CodingLanguagesList.indexOf(a.title) - CodingLanguagesList.indexOf(b.title) )
                    .filter( (a) => CodingLanguagesList.includes(a.title))
        );
        setCICD(
          json.skill.sort( (a,b) => CICDList.indexOf(a.title) - CICDList.indexOf(b.title) )
                    .filter( (a) => CICDList.includes(a.title))
        );
        setFrameWorks(
          json.skill.sort( (a,b) => FrameWorksList.indexOf(a.title) - FrameWorksList.indexOf(b.title) )
                    .filter( (a) => FrameWorksList.includes(a.title))
        );
        setOther(
          json.skill.sort( (a,b) => OtherList.indexOf(a.title) - OtherList.indexOf(b.title) )
                    .filter( (a) => OtherList.includes(a.title))
        );
      })
  }
  
  useEffect( () => getData() , [] );
  
  return(
      <div id={props.id} className={`${props.className}`} style={props.style}>
        <p className="h1 font-weight-bold text-warning text-sm-left text-center">About Me</p>
        { AboutMeAPI.content.map((c,k) =>
          <p className="text-wrap" key={`aboutMeParagraph${k}`}>
            {c}
          </p>  
        )}
        
        
        <p className="h3 font-weight-bold text-warning">Technical Skills</p>
        <div className="w-100 text-white col">
          <p className="h4 font-weight-bold:">Coding Languages</p>
          <div className="skillRow">
              {CodingLanguages.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="h4 font-weight-bold:">Frameworks</p>
          <div className="skillRow">
              {FrameWorks.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="h4 font-weight-bold:">CI/CD</p>
          <div className="skillRow">
              {CICD.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="h4 font-weight-bold:">Other</p>
          <div className="skillRow">
              {Other.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
        </div>
      </div>
  );
}
export default AboutMe;