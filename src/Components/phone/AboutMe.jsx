import React, {useState, useEffect} from "react";
import Card from "../General/Card";
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
  const [Database, setDatabase] = useState([]);
  
  // const order = [
  const CICDList = ["Service Now","Jira","Git","Jenkins","Docker","AWS","OpenShift","Node Js"];
  const CodingLanguagesList =["Shell Script","Java","C#","TypeScript","Python","HTML","CSS","JavaScript"];
  const FrameWorksList = ["Spring", ".NET", "Django","Angular","React","Bootstrap", "ASP Core","Socket IO", "jQuery","Express JS"];
  const OtherList = ["SEO","Facebook Ads", "Google Adwords", "Photoshop","CorelDraw","Wix"];
  const DatabaseList = ["Oracle","DB2", "AWS","Sybase","MongoDB","MySQL", "SQLite", ];


  const getData =() => {
      fetch("/json/AboutMeAPI.json", {
          headers:{
              "Content-Type":"application/json",
              Accept: "application/json"
          },
      })
      .then ( res => res.json() )
      .then ( json => {
        setAboutMeAPI(json);
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
        setDatabase(
          json.skill.sort( (a,b) => DatabaseList.indexOf(a.title) - DatabaseList.indexOf(b.title) )
                    .filter( (a) => DatabaseList.includes(a.title))
        );
      })
  }
  useEffect( () => getData() );  
  
  return(
      <div id={props.id} className={`${props.className}`} style={props.style}>
        <p className="h1 font-weight-bold text-warning text-md-left text-center">About Me</p>
        { AboutMeAPI.content.map((c,k) =>
          <p className="text-wrap" key={`aboutMeParagraph${k}`}>
            {c}
          </p>  
        )}
        <p className="h3 font-weight-bold text-warning">Technical Skills:</p>
        <div className="w-100 text-white d-flex flex-column">
          <p className="font-weight-bold text-warning">Coding Languages</p>
          <div className="skillRow">
              {CodingLanguages.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="font-weight-bold text-warning">Frameworks</p>
          <div className="skillRow">
              {FrameWorks.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="font-weight-bold text-warning">CI/CD</p>
          <div className="skillRow">
              {CICD.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="font-weight-bold text-warning">Database</p>
          <div className="skillRow">
              {Database.map( (t,k) =>
                <Card keymap={`technicalSkill${t.title}`} imglink={t.imglink} imgalt={t.imgalt}>{t.title}</Card>
              )}
          </div>
          <p className="font-weight-bold text-warning">Other</p>
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