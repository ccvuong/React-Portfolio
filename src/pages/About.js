import React from 'react';
import '../styles/About.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import Avator from '../assets/c vuong designs logo.png';

function About() {
  return (
    <div className='aboutPage'>
      <div className='about'>

        <div className='logo'>
          <img src={Avator} style={{ width: 300, height: 300 }} alt='logo' />
        </div>
        <div className='prompt'>

          <h2 className='intro'> Hey there, I'm Christina 😎</h2>

          <p> Lover of video games 🎮, movies 🎥, and my dogs 🐶</p>

          <p className='background'>
            A growing front end web developer with a curious mind in learning the matrix.
            Recently earned a certificate in Full Stack Developer from {' '}

            <a
              href="https://cpe.ucdavis.edu/" target="_blank" rel="noreferrer"
              id="school"
            >
              UC Davis Continuing and Professional Education
            </a>
            , where I gained experience in a variety of tools such as HTML, CSS, and JavaScript.
          </p>

          <p className='background'> With a design background,
            I provide creative input to the team and seek out effective paths
            to communicate information to users. As a designer I learned how to
            gather complex ideas and data into clear meaningful solutions to
            our product.
          </p>
          
          <p> So, the blue pill 💙 or the red pill ❤️? </p>

        </div>
      </div>

      <div className='resume'>
        <p>

          <a
            href="https://drive.google.com/file/d/1Gb-u1n1KfGSekrLrO39_LJVcXNLUGu8m/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"

            id="Resume"

          >
            <button className='resumeBtn'> See Resume </button>
          </a>

        </p>

      </div>
    </div>
  );
}

export default About;