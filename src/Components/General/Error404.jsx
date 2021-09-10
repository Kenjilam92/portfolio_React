import React from "react";

const Error404 = props =>{
    return(
        <div className="row text-center align-items-center">
            <div className="col-sm-3">
            
                <img className="w-75 rounded-circle"
                     src="../images/kenjilam92_square.jpg" 
                     alt="Kenji Lam"/>
            </div>
            <div className="col-sm-9">
              <p className="h1 text-warning">Error 404! Page is not found</p>
            </div>
        </div>
    );
}

export default Error404;