import React from 'react';
import ProjectItem from '../components/ProjectItem';

// images for projects
import home from '../assets/home splash screen.png';
import noted from '../assets/noted splash screen.png';
import tapiTea from '../assets/TapiTea splash screen.png';
import hbv from '../assets/know HBV mockup.png';
import teamProfile from '../assets/team profile generator.png';
import weatherApp from '../assets/cv weather dashboard.png';

function Projects() {
  return (
    <div className='projects'>

      <h1>Projects</h1>
      <div className='projectList'>

        <ProjectItem name="Home" image={home} />
        <ProjectItem name="Noted" image={noted} />
        <ProjectItem name="Team Profile Generator" image={teamProfile}/>
        <ProjectItem name="Weather Dashboard" image={weatherApp}/>
        <ProjectItem name="TapiTea" image={tapiTea} />
        <ProjectItem name="HBV" image={hbv} />
        

      </div>
    </div>
  )
}

export default Projects