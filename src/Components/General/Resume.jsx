import React from 'react';

const Resume = props => {
    return(
        <div className={`${props.className}`} style={props.style} id={props.id}>
            <p className="text-warning h1">Resume</p>
            <script src="https://gist.github.com/Kenjilam92/8b977036b5f33ba4a559c01e5815528f.js"></script>
        </div>
    );
}
export default Resume;