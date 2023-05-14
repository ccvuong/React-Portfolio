import React from 'react';

// social media links
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <GitHubIcon />
                <LinkedInIcon />
                <EmailIcon />
            </div>
            <p> &copy; 2023 Christina Vuong </p>
        </div>
    );
}

export default Footer