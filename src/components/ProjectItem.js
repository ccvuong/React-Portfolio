import React from "react";

function ProjectItem({ image, name }) {

    return (
        <div className="projectItem">

            <div style={{ backgroundImage: `url(${image})` }} className="imageCard" > </div>
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem;

