import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
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

        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span> ReactJS, HTML, CSS, Material UI</span>
          </li>

          <li className='item'>
            <h2>Backend</h2>
            <span> NodeJS, ExpressJS, MySql</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span> JavaScript </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home