import React from 'react';
const Home = props => {
    return(
        <div className={`${props.className}`}style={props.style} id={props.id}>
            <h1>Kenji Lam</h1>
            <p>Digital Marketing Specialist </p>
            <button className={`${props.Theme.btn}`} onClick={e=>props.click("AboutMe")}>
                About me
            </button>
        </div>
    );
}

export default Home;
