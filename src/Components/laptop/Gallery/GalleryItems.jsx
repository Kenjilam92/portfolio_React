import React from "react";

const GalleryItems = props =>{
    const imgStyle ={
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imgLink})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxwidth: 100+"%",
        minWidth: 20+"vh",  
        height: 20+"vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 2+"vh",

    }
    return(
        <div className={`${props.className} shadow-lg rounded-sm projectButton`}
             onClick={e=>props.clicked(props.imgLink)} 
             data-toggle={props.dataToggle}
             data-target={props.dataTarget}
             key={props.keymap}>
            <div style={imgStyle} >
                <div className="projectTitle border border-light rounded-sm p-1">
                    <p className="text-center"> {props.title} </p>
                </div>
            </div>
        </div>
    );
}

export default GalleryItems;