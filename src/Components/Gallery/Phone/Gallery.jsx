import React, {useState} from "react";
import GalleryItems from "./GalleryItems";
import Modal from "Components/General/Modal";
const Gallery = props =>{
    
    const [Img,setImg]= useState("");
    const [ImgAlt,setImgAlt] =useState("");
    const [Desc,setDesc] =useState("");
    const project = props.data;
    const list = project.images;
    const getImgLink = e =>{
        const select = list.find(img => img.imglink===e);
        setImg(select.imglink);
        setImgAlt(select.imgalt);
        setDesc(select.desc);
    };

    
    const ZoomIn = {
        title: "-",
        className: "w-100 overflow-auto", 
        style: {
            minWidth: 100+"%",
            // objectFit: "scale-down"
        }
    }
    const ZoomOut = {
        title: "+",
        className: "w-100 overflow-hidden d-flex justify-content-center",
        style:{
            
            maxWidth: 100+"%",
            maxHeight: 100+"%",
            objectFit: "scale-down",
        }
        
    }

    const [Zoom,setZoom] = useState(ZoomOut);
    const clickZoom = () => {
       if (Zoom.title === "+"){
           setZoom(ZoomIn);
       
        }
        else{
            setZoom(ZoomOut);
        }

    };

    return(
        <div className={`${props.className}`} style={props.style}>
            {list.map( (e,i) =>
                <>
                    <GalleryItems
                        keymap={`${project.title}${e.imgalt}${i}`}
                        className={props.itemClassName}
                        style={props.itemStyle}
                        title={e.desc}
                        imgLink={e.imglink}
                        imgAlt={e.imgalt}
                        clicked={getImgLink}
                        dataToggle="modal" 
                        dataTarget="#showImage"
                    />
                </>
            )}
            <Modal ModalId="showImage">
                <div className="d-flex flex-column align-items-end" style={{height: 80+"%", width: 80+"%"}}>
                    <div className="w-100 d-flex justify-content-between align-items-center font-weight-bold bg-dark">
                        <div className="w-100 text-center font-weight-bold">{Desc}</div>
                        
                            <button className="btn btn-success font-weight-bold"
                                onClick={e=> clickZoom()}
                                >{Zoom.title}
                            </button>
                            

                            <button type="button " 
                                className="btn btn-danger font-weight-bold" 
                                data-dismiss="modal"
                                >&times;
                            </button>
                        
                        </div>
                    <div className={Zoom.className} style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                        <img style={Zoom.style} 
                            src={Img} 
                            alt={ImgAlt}/>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Gallery;