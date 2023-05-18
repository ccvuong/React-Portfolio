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
          console.log(item)

          return (
            <ProjectItem name={item.name} image={item.image} key={index}>

            </ProjectItem>
            
          );
          
        })}
        

      </div>
    </div>
  );
}


export default Projects;
