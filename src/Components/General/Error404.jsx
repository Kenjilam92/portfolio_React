import React from "react";

const Error404 = props =>{
    return(
        <div className=" full-page d-flex text-center justify-content-center align-items-center">
            <div className="w-25">
            
            <img className=" w-100 rounded-circle"
                     src="../images/skill/react.png" 
                     alt="Kenji Lam"/>
            </div>
            &npsp;
            {/* <div className=""> */}
            <p className="h1 text-warning">
                Error 404!<br/>Page is not found
            </p>
            {/* </div> */}
        </div>
    );
}

export default Error404;