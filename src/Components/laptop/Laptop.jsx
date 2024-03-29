import React from "react";
import Iframe from 'react-iframe'
// import ProjectList from "./Public/ProjectList";

import Aboutme from "./AboutMe";
import Home from "./Home";
import Projects from "./Project/Projects";
import Menu from "./Menu";
import SocialLink from "./SocialLink";
import Resume from "../General/Resume"
// import img1 from "/images/kenjilam_baltimore.jpg"
/// APIs
import MenuAPI from "APIs/MenuAPI";
///

/////////
const Laptop = props =>{

    // const SectionsHeight = {
    //     width: 100+"%",
    //     minHeight: 70+"vh",
    //     marginBottom: 30+"vh",
    // }
    
    const showSection = (e) =>{
        var selectedLocation = document.getElementById(e);
        selectedLocation.scrollIntoView({ behavior: "smooth" });
    }

    ///////Render
    return(
        <>  
        <div className="pr-3 backgroundLatop">   
            <Menu 
                API= {MenuAPI}
                Theme= {props.Theme}
                className="d-flex flex-column m-1 laptopMenu"
                buttonClassName="p-1 m-1"
                menuText="menuText"
                click={showSection}
                   
            />

            <SocialLink
                className="socialLinks"
                logoClassName="socialButton"
                
            />

            <Home
                className="text-white text-center text-nowrap pt-5 w-100 pageSection" 
                Theme={props.Theme}
                nameStyle={{fontSize: 35+"pt"}}
                titleStyle={{fontSize: 14+"pt"}}
                id="Home"
                click={showSection}
            />

            <div className="page">
                <Aboutme
                    className="text-white text-left pageSection"
                    id="AboutMe"
                />
                <Resume
                    className="text-white pageSection"
                    id="Resume"
                />

                <Projects
                    className="text-white pageSection"
                    Theme={props.Theme}
                    id="Projects"
                />
                <div className="pageSection" id="Contact">
                    <p className="h1 font-weight-bold text-warning text-sm-left text-center">Contact</p>
        
                    <Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAOMybApUQjlRWjJROEJTT0lHMDVOTEpDSDVOQ09QNi4u&embed=true"
                            className="contactSection" 
                            allow="fullscreen"
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Laptop;