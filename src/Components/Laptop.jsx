import React from "react";

// import ProjectList from "./Public/ProjectList";

import Aboutme from "./AboutMe/Laptop/AboutMe";
import Home from "./Home/Laptop/Home";
import Projects from "./Projects/Laptop/Projects";
import Menu from "./Menu/Laptop/Menu";
import SocialLink from "./SocialLink/Laptop/SocialLink";
import Resume from "./General/Resume"
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
                className="d-flex flex-column m-1 "
                buttonClassName="p-1 m-1"
                rotateText="rotateLeft text-nowrap"
                click={showSection}
                style={{
                    position: "fixed",
                    width: "fit-content",
                    height: "fit-content",
                    top:0,
                    left:0,
                    zIndex: 5
                }}   
            />

            <SocialLink
                className="d-flex flex-column position-fixed"
                style={{
                    bottom: 1+"vh",
                    left: 0
                }}
                logoClassName="close m-1"
                logoStyle={{
                    width: 50+"px"
                }}
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
                
            </div>
        </div>
        </>
    );
}

export default Laptop;