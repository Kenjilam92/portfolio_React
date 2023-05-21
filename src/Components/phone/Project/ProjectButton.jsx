import React from "react";

const ProjectButton = props =>{
    
    const selectProject = () =>{
    //     // props.showDetails(props.title);
        props.selectProject(props.title);
    }
    
    const theme ={
        primary: "3,123,225",
        secondary: "108,117,125",
        success: "39,167,69",
        danger: "220,53,69",
        warning: "225,193,7",
        info: "23,162,184",
        light: "248,249,250",
        dark: "52,58,64",
        white: "255,255,255"
    }
    

    const background = {
        backgroundColor: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(${theme.dark}, 0.8)), url("${props.logo}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 20+"vw",
        width: 20+"vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 2+"vw",
    }
    const end = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(${theme.dark}, 0.8)), url('images/project/more.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 20+"vw",
        width: 20+"vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 2+"vh"
    };
    return(
        <>
        {props.end?
        <div key={props.keymap} className={`${props.className} shadow-lg rounded-sm m-2 projectButton`} 
            style={end}
        >   
            <div className="projectTitle rounded-sm">
                <img className="w-100 p-100" src="/images/project/comingsoon.jpg" alt="coming soon"/>
            </div>
        </div>
        :
        <div key={props.key} className={`${props.className} shadow-lg rounded-sm m-2 projectButton`} 
            style={background}
            onClick={e=> selectProject()}
        >
            <div className="projectTitle border border-light rounded-sm p-1">
                <p className="text-center"> {props.title} </p>
            </div>
        </div>
        }
        </>
    );
}

export default ProjectButton; 