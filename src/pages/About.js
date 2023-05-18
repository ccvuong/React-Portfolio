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

        <h2> Hey there, I'm Christina 😎</h2>

        <div className='prompt'>

          <p>
            A growing developer with a curious mind in learning the matrix.
          </p>

          <p> So, the blue pill 💙 or the red pill ❤️? </p>

        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>


        <VerticalTimeline lineColor='#202020'>

          <VerticalTimelineElement className='vertical-timeline-element--frontEnd'

            iconStyle={{ background: "#23b2ed", color: "#fff" }}
            icon={< AspectRatioIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              🌈 Frontend
            </h3>
            <p className='info'>
              ReactJS, HTML, CSS, Material UI
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--backEnd'

            iconStyle={{ background: "#23b2ed", color: "#fff" }}
            icon={< SaveIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              💾 Backend
            </h3>
            <p className='info'>
              NodeJS, ExpressJS, MySql
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--languages'

            iconStyle={{ background: "#23b2ed", color: "#fff" }}
            icon={< LocalLibraryIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              ✍ Languages
            </h3>
            <p className='info'>
              JavaScript
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>


    </div>
  );
}

export default About;