import React from "react";
import { useState } from "react";
import ProjectButton from "./ProjectButton";
import ProjectDetails from "./ProjectDetails";
import projectsList from "./ProjectList"
// import Carousel from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = props =>{
    const [projectName,setProjectName] = useState("vanhoagroup");

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     autoplay: true,
    //     speed: 1000,
    //     autoplaySpeed: 10,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     swipe: true,
    //     arrows: true,
    //     focusOnSelect: true
    // };

    return(
        <div className={`${props.className} d-flex flex-column`} style={props.style} id={props.id}>
            <p className="h1 text-warning text-left font-weight-bold">Projects</p>
            <div className="d-flex align-self-start">
                {/* <Carousel {...settings}> */}
                {/* </Carousel>   */} 
                {projectsList.map((e,i)=><>
                    <ProjectButton
                        keymap={i+"ProjectButton"}
                        title={e.title}
                        logo={e.logo}
                        selectProject={setProjectName}
                    />
                </>)}
                <ProjectButton end= {true} />
            </div>
            <ProjectDetails
                className="text-white"
                style={{backgroundColor: "rgba(0, 0, 0, 0.5)", height:"fit-content"}}
                Theme={props.Theme}
                Project={projectsList.find( p => p.title===projectName)}
            />
        </div>
    );
}

export default Projects;