import React from 'react';
import ResumeAPI from "APIs/ResumeAPI";

const Resume = props => {
    return(
        <div className={`${props.className}`} style={props.style} id={props.id}>
            <p className="text-warning h1 mb-4">Resume</p>

            {/* <script src="https://gist.github.com/Kenjilam92/8b977036b5f33ba4a559c01e5815528f.js"></script> */}

            {
                ResumeAPI.map((ex,k) => 
                    <div key={"Resume"+k} className="text-white row">
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
                )
            }
        </div>
    );
}
export default Resume;