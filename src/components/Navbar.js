import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    
    return (
        <div className='navbar'>
            {/* id checks if navbar is open, if not then it will be closed */}
            <div className='toggleButton' id={expandNavbar ? "open" : "close"}>

                {/* onClick sets if navbar is previously true then false or vice versa */}
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                    <MenuIcon /> 
                    </button>
            </div>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About </Link>
                <Link to="/resume"> Resume </Link>
            </div>
        </div>
    )
}

export default Navbar