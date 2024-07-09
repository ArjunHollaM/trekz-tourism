import React from "react";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/');
    };
    return(
        <div className="topnav">
            <div className="title">
                <h1 title="Home" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                    Trekz
                </h1>
            </div>
        </div>
    );

}

export default Navbar;