import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="container">
        <div className="homehead">
            <h1><i>The world reveals itself to those who travel on foot</i></h1>
        </div>
        <div className="content">
            <h2>Local Trekking</h2>
            <p>Karnataka, One State Many Worlds, One of the most beautiful destinations in South India is home for numerous spots for Trekking in India. The mesmerizing scenery, adventurous trekking paths will make you fall in love with the charismatic treks in Karnataka.</p>
            <p><b>Check these out</b></p>
            <Link to="/dd" className="button">Devarayanadurga</Link>
            <Link to="/sd" className="button">Savandurga</Link>
            <Link to="/cd" className="button">Channarayana Durga</Link>
            <Link to="/mg" className="button">Madhugiri</Link>
        </div>

        </div>
    );
}


export default Home;