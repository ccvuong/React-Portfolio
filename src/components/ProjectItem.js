import React from "react";
import '../styles/ProjectCard.css'

function ProjectItem({ image, name, liveUrl, gitUrl }) {

    return (
        <div className="projectItem">

            <div style={{ backgroundImage: `url("${image}")` }} className="imageCard" >

                <div className="linkBtns">
                    <a
                        href={liveUrl}
                        className="linkInfo"
                    >
                        <button className="linkInfoBtn">Live</button>
                    </a>

                    <a
                        href={gitUrl}
                        className="linkInfo"
                    >
                        <button className="linkInfoBtn">Repo</button>
                    </a>

                </div>
            </div>

        </div>


    );


}

export default ProjectItem;

