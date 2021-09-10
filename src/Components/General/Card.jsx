import React from "react";

const Card = props => {
    return(
        <div key={props.keymap} className="d-flex flex-column align-items-center text-center p-2 ml-1 mr-1" style={{width : 75+"px"}}>
            <p>
                <img src={props.imglink} 
                 alt={props.imgalt}
                 className="rounded-circle bg-white"
                 style={{width : 75+"px"}}
                 />
            </p>
            <p>{props.children}</p>
        </div>
    );
}
export default Card;