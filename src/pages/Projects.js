import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';


import '../styles/Projects.css';


function Projects() {
  return (
    <div className="projects">

      <h1 className='title'>Projects</h1>

      <div className='projectList'>

        {ProjectList.map((item, index) => {


          return (
            <ProjectItem

              name={item.name}
              image={item.image}
              key={index}

              liveUrl={item.liveUrl}
              gitUrl={item.gitUrl}
              type={item.type}
            >

            </ProjectItem>

          );

        })}

      </div>

    </div>
  );
}


export default Projects;
