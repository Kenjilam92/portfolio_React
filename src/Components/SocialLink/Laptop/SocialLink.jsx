import React from "react";

const SocialLink = props =>{
    const SocialList=[
        {
            image: "/images/Facebook_2.png",
            alt: "Facebook",
            url: "https://www.facebook.com/Kenjil.lam"
        },
        {
            url: "https://www.instagram.com/kenji_lam1992",
            image: "/images/Instagram_2.png",
            alt: "instagram"
        },
        {
            url: "https://www.Linkedin.com/in/kenjilam92/",
            image: "/images/Linkedin_2.png",
            alt: "LinkedIn"
        },
        {
            url: "https://github.com/Kenjilam92",
            image: "/images/Github_2.png",
            alt: "github"
        },
        {
            url: "https://twitter.com/kenjilam92",
            image: "/images/Twitter_2.png",
            alt: "twitter"
        }
    ];
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