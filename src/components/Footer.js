import React from 'react';

// social media links
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <Link to="https://github.com/ccvuong"> <GitHubIcon /> </Link>
                <Link to="https://www.linkedin.com/in/chrisvuongg/"> <LinkedInIcon/> </Link>
                <Link to="mailto:vuongchristina14@gmail.com"> <EmailIcon /> </Link>
            </div>
            <p> &copy; 2023 All Rights Reserved </p>
            <p> Made with 💖 by Christina Vuong 😎 </p>
        </div>
    );
}

export default Footer