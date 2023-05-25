import React from "react";

const Menu = props =>{
    return(
        <div className={`${props.className}`} style={props.style}>
            {props.API.map((e,i)=>
                <button key={i+e.title} 
                        className={`${props.Theme.btn} ${props.buttonClassName}`}
                        id={e.id}
                        onClick={b=>props.click(e.section)}
                        > <span className={`${props.menuText}`}>{e.title}</span>
                </button>
            )}
        </div>
    );
}

export default Menu;