import React,{useState} from "react";
import Card from "Components/General/Card"
import Gallery from "Components/laptop/Gallery/Gallery";

const ProjectDetails = props => {
    
    const project = props.Project;
        
    const [showDetails,setShowDetails] = useState(true);

    return (
        <div className={`${props.className} d-flex flex-column w-100 p-2`} style={props.style}>
            <nav className="btn-group align-self-start">
                <span className={`${props.Theme.btn} `} onClick={e=> setShowDetails(true)}>
                    Features
                </span>
                <span className={`${props.Theme.btn} `} onClick={e=> setShowDetails(false)}>
                    Demo Images
                </span>
            </nav>
            
            <div className="p-2 text-left">
                <>
                {showDetails?
                <>
                    <p className="h2">
                        <a className="text-warning" href={project.url}>{project.title}</a>
                    </p>
                    <ul style={{marginLeft:  (-25)+"px"}}>
                        {project.features.map((f,j)=>
                            <li key={`${j} ${project.title} fearture`} >{f}</li>
                        )}
                    </ul>
                    <p className="h5 font-weight-bold text-warning">Technologies:</p>
                    <div className="d-flex flex-wrap w-100">
                        {project.technologies.map((t,k) =>
                            <>
                                <Card keymap={`${k} ${project.title} ${t.techName}`} imglink={t.imglink} imgalt={t.imgalt}>{t.techName}</Card>
                            </>
                        )}
                    </div>
                </>
                :
                    <Gallery
                        className="d-flex flex-wrap justify-content-start"
                        itemClassName="overflow-hidden p-1 col-lg-4 col-md-6"
                        // style={}
                        itemStyle={{
                            // height: 15+"vh",
                            // objectFit: "scale-down"
                            // width: 20+"vh"
                        }}
                        data={project}
                    />
                }
                </>
 
            </div>   
        </div>
    );
}

export default ProjectDetails;