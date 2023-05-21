import React from "react";

import $ from "jquery";
const Menu = props =>{
    const hideNavbar = (e) =>{
        $("#navbarNavAltMarkup").collapse('hide');
        props.click(e);
      }
    return(
        <div className={props.className} style={props.style}>
        <nav className={"navbar navbar-expand-lg navbar-dark"} >
          <button onClick={e=>props.click("Home")} className="navbar-brand btn bg-transparent" to="/">Kenji Lam</button>
          <button className="navbar-toggler" type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNavAltMarkup" 
                  aria-controls="navbarNavAltMarkup" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {props.API.map((e,i)=>
                <button
                    key={i+e.title}
                    className={`${props.Theme.text} ${props.buttonClassName}`}
                    onClick={i=> hideNavbar(e.section)}
                    >{e.title}
                </button>
              )}
            </div>
          </div>
        </nav>
        </div>          

    );
}

export default Menu;