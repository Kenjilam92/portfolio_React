import React from "react";
import Iframe from 'react-iframe'

// import ProjectList from "./Public/ProjectList";
import Resume from "../General/Resume";
import Aboutme from "./AboutMe";
import Home from "./Home";
import Projects from "./Project/Projects";
import Menu from "./Menu";
import SocialLink from "./SocialLink";


///APIs
import MenuAPI from "APIs/MenuAPI";


/////////

const Phone = props =>{
    ///////Menu
        
    const showSection = (e) =>{
        var selectedLocation = document.getElementById(e);
        selectedLocation.scrollIntoView({ behavior: "smooth" });
    }

    ///////Render
    return(
        <> 
        <Menu 
            API= {MenuAPI}
            Theme= {props.Theme}
            className=""
            buttonClassName="btn "
            click={showSection}
            style={{
                position: "fixed",
                width: 100+"vw",
                height:"fit-content",
                top:0,
                left:0,
                zIndex: 5,
                backgroundColor: "black"
                // width: 100+"%"
            }}   
        />
        <div className="d-flex flex-column backgroundPhone">   
            
            <div className="d-flex flex-column phonePage">
                <Home
                    className="text-white text-center text-nowrap w-100" 
                    
                    Theme={props.Theme}
                    style={{
                        minHeight: 90+"vh"
                    }}
                    id="Home"
                    click={showSection}
                />
                <div>
                <Aboutme
                    className="text-white w-100 phonePageSection"
                    id="AboutMe"
                />
                </div>
                <div>
                <Resume
                    className="text-white w-100 phonePageSection"
                    Theme={props.Theme}
                    id="Resume"
                />
                </div>
                <div>
                <Projects
                    className="text-white w-100 phonePageSection"
                    Theme={props.Theme}
                    id="Projects"
                />
                </div>
                <div className="phonePageSection" id="Contact">
                    <p className="h1 text-warning">Contact</p>
        
                    <Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAOMybApUQjlRWjJROEJTT0lHMDVOTEpDSDVOQ09QNi4u&embed=true"
                            className="contactSection" 
                            allow="fullscreen"
                            
                    />
                </div>
            </div>

            

            
            {/* <div className="col" style={{width: 100+"%", height:"fit-content"}}>
                
            </div> */}
        </div>
        <SocialLink
            className="d-flex justify-content-around"
            style={{
                position: "fixed",
                width: 100+"vw",
                height: "fit-content",
                bottom: 0,
                left: 0,
                backgroundColor:"black"
            }}
            logoClassName="m-1"
            logoStyle={{
                width: 50+"px"
            }}
        />
        </>
    );
}

export default Phone;