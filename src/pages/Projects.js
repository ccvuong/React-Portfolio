import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';


import '../styles/Projects.css';


function Projects() {
  return (
    <div className="projects">

      <h1>Projects</h1>

      <div className='projectList'>
        {ProjectList.map((project) => {
          return (
            // need to fix image error!
            <ProjectItem name ={project.name}
            image={project.name}/>
          );
        })}

      </div>
    </div>
  )
}

export default Projects