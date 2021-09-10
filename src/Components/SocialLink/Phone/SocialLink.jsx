import React from "react";
import SocialList from 'APIs/SocialContactsAPI';

const SocialLink = props =>{
    return(
        <div className={`${props.className}`} style={props.style}>
            {SocialList.map( (e,i) =>
                <a href={e.url}>
                    <img className={`${props.logoClassName}`} style={props.logoStyle} src={e.image} alt={e.alt}/>
                </a>
            )}
        </div>
    );
}

export default SocialLink;