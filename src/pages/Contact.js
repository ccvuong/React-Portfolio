import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>

      <div className='contactInfo'>
        <h2> Let's Chat! ☕</h2>

        <p className='summary'>
          Thank you for taking the time to look at my portfolio 🤩
        </p>

        <p className='contactMe'>
          If you'd like to reach me, send me an email at{' '}
          <a
            href="mailto:vuongchristina14@gmail.com" target="_blank" rel="noreferrer"
            id="email"
          >
            vuongchristina14@gmail.com
          </a>
          {' '} or shoot me a message on{' '}
          <a
            href="https://www.linkedin.com/in/chrisvuongg/" target="_blank" rel="noreferrer"
            id="LinkedIn"

          >
            LinkedIn.
          </a>
        </p>
      </div>

    </div>
  )
}

export default Contact