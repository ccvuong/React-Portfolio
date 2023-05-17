import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {

    const locate = useNavigate();
    return (
        <div className="projectItem"
            onClick={() => {
                locate("/project/" + id);
            }}>

            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" > </div>
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem;