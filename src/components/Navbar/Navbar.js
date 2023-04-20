import React from "react";
import './Navbar.css'
const Navbar = ({onRouteChange}) => {
    return(
        <div className="topnav">
            <div className="title"><h1  title="Home" onClick={() => onRouteChange('home')}>Trekz</h1></div>
        </div>
    );

}

export default Navbar;