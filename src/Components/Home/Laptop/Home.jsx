import React from 'react';
const Home = props => {
    return(
        <div className={`${props.className}`}style={props.style} id={props.id}>
            <h1 style={props.nameStyle}>Kenji Lam</h1>
            <p style={props.titleStyle}>Digital Marketing Specialist </p>
            <button className={`${props.Theme.btn}`} onClick={e=>props.click("AboutMe")}>
                About me
            </button>
        </div>
    );
}

export default Home;
