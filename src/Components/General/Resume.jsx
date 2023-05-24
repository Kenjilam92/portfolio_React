import React, { useEffect, useState } from 'react';

const Resume = props => {
    const [ResumeAPI, setResumeAPI] =useState([])
    
    const getData =() => {
        fetch("/json/ResumeAPI.json", {
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json"
            },
        })
        .then ( res => res.json() )
        .then ( json => setResumeAPI(json))
    }
    useEffect( () => getData() , [] );

    return(
        <div className={`${props.className}`} style={props.style} id={props.id}>
            <p className="text-warning h1 mb-4">Resume</p>

            {/* <script src="https://gist.github.com/Kenjilam92/8b977036b5f33ba4a559c01e5815528f.js"></script> */}

            {ResumeAPI.map((ex,k) => 
                <div key={"Resume"+k} className="text-white row laptop">
                  <div className={`col-3 w-fit text-right text-warning`}>
                  {/* text-${ex.type==="education"?"info":"warning"} */}
                      <b>{ex.period}</b>
                  </div>
                  <p>
                      &#x25cf;
                  </p>
                  <div className="col">
                      <b >
                          <a href={ex.url} className={`text-warning`}>
                              {ex.organization} 
                          </a>
                      </b>
                      <ul>
                          {ex.bulletPoints.map((bP,key) => 
                              <li key={ex.period+"bP"+key}>
                                  {bP}  
                              </li>
                          )}
                      </ul>
                  </div>
                </div>
            )}
            {ResumeAPI.map((ex,k) => 
                <div key={"Resume"+k} className="text-white row phone">
                  <div className={`col w-fit`}>
                  {/* text-${ex.type==="education"?"info":"warning"} */}
                      <p> &#x25cf;
                        <b className="text-warning">{ex.period}</b>
                      </p>
                      <div className="col">
                          <b><a href={ex.url} className={`text-warning`}>
                            {ex.organization} 
                          </a></b>
                          <ul>{ex.bulletPoints.map((bP,key) => 
                                  <li key={ex.period+"bP"+key}>
                                      {bP}  
                                  </li>
                          )}</ul>
                      </div>
                  </div>
                </div>
            )}
        </div>
    );
}
export default Resume;