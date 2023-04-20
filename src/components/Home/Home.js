import React from "react";
import './Home.css'

const Home = ({onRouteChange}) => {
    return(
        <div className="container">
        <div className="homehead">
            <h1><i>The world reveals itself to those who travel on foot</i></h1>
        </div>
        <div className="content">
            <h2>Local Trekking</h2>
            <p>Karnataka, One of the most beautiful destinations in South India is home for numerous spots for Trekking in India. The mesmerizing scenery, adventurous trekking paths will make you fall in love with the charismatic treks in Karnataka.</p>
            <p><b>Check these out</b></p>
            <a href="#dd" class="button" onClick={() => onRouteChange('dd')}>Devarayanadurga</a>
            <a href="#sd" class="button" onClick={() => onRouteChange('sd')}>Savandurga</a>
            <a href="#cd" class="button" onClick={() => onRouteChange('cd')}>Channarayana Durga</a>
            <a href="#mg" class="button" onClick={() => onRouteChange('mg')}>Madhugiri</a>
        </div>

        </div>
    );
}


export default Home;