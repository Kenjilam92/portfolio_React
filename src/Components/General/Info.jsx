import React from "react";

const Info = props => {
    return(
        <div className="col w-100 mb-5 mt-5">
          <div className="row w-100 mb-2 align-items-end border-bottom border-white text-nowrap text-sm-left text-center">
            <p className="col-sm-5 font-weight-bold">Location:</p>
            <p className="col-sm-7">Washington D.C. Metropolian Area</p>
          </div>

          <div className="row w-100 mb-2 align-items-end border-bottom border-white text-sm-left text-center">
            <p className="col-sm-5 font-weight-bold">Email:</p>
            <p className="col-sm-7">kenji.lam.92@gmail.com</p>
          </div>

          <div className="row w-100 mb-2 align-items-end border-bottom border-white text-sm-left text-center">
            <p className="col-sm-5 font-weight-bold">Phone:</p>
            <p className="col-sm-7">703-622-0116</p>
          </div>

          <div className="row w-100 mb-2 align-items-end border-bottom border-white text-sm-left text-center">
            <p className="col-sm-5 font-weight-bold">Career Status:</p>
            <p className="col-sm-7">Freelancer</p>
          </div>
        </div>
    );
}

export default Info