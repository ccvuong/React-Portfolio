import React from "react";

function ProjectItem({ image, name, liveUrl, gitUrl, type }) {

    return (
        <div className="projectItem">

            <div style={{ backgroundImage: `url("${image}")` }} className="imageCard" >



                <div className="linkBtns">
                    <h1 className="projectCardName">{name}</h1>
                    {/* <p className="type">{type}</p> */}

                    <a
                        href={liveUrl}
                        target="_blank" 
                        rel="noreferrer"
                        className="linkInfo"
                    >
                        <button className="linkInfoBtn">Live</button>
                    </a>

                    <a
                        href={gitUrl}
                        target="_blank" 
                        rel="noreferrer"
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

