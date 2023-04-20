import React from "react";
import './Savand.css'
import s1 from './Savandurgaassets/s1.jpg'
import s2 from './Savandurgaassets/s2.jpg'
import s3 from './Savandurgaassets/s3.jpg'

const Savand = () => {
    return(
        <div className="Hillcontent">
            <h1 className="hilltitle">Savandurga</h1>
            <p>Savandurga is a hill 60 km west of Bengaluru (Karnataka, India), off the Magadi road in India. It is one of the largest monolith hills in India.
            The hill rises to 1226 m above mean sea level and forms a part of the Deccan plateau. It consists of peninsular gneiss, granites, basic dykes, and laterites. 
            The Arkavathi river passes nearby through the Thippagondanahalli reservoir and towards Manchanabele dam.</p>
            <p>The Savandurga hills are frequented by pilgrims who come to visit the Savandi Veerabhadreshwara Swamy and Narasimha Swamy temple situated at the foothills.
                Rock climbers, cave explorers, and adventurers are among others who frequent the locale. 
                Nearby Manchanabele Dam is often visited by water-sports enthusiasts.</p>
            <img src={s1} alt="Pic" />
            <p>Savandurga is formed by two hills locally known as Karigudda (black hill) and Biligudda (white hill). The earliest record of the name of the hill is from 1340 AD by Hoysala Ballala III from Madabalu where it is called Savandi. 
                Another view is that the name originates from Samantadurga, attributed to a Samantharaya, a governor under Ahchutaraya at Magadi, although there is no inscription confirming this. 
                This was the secondary capital of the Magadi rulers such as Kempegowda. From 1638 to 1728, Mysore took over Savandurga, with the Dalavayi Devaraja controlling it from the palace at Nelapattana. In 1791 Lord Cornwallis captured it from Tipu Sultan's forces during the Third Anglo-Mysore War.
                 Robert Home in his Select views in Mysore (1794) shows distant views of the hill from Bangalore.
                He called it Savinadurga or the fort of death. </p>
            <img src={s2} alt="pic" /> 
            <p>It takes around 2-3hrs to reach the top. One can visit the hills anytime but not when it’s raining as the hill becomes slippery and dangerous because of its inclination.
                Take a water bottle and have a good trekking shoes. The view from top of the hill is mesmerizing. There’s a nandi maharaj temple on top which one can visit.</p>
            <img src={s3} alt="Pic" />
            <p>The steepest climb of the trek lies beyond this stop, and takes one to the next fort wall, post which it is a gradual incline. The rock has some depression here and it is quite possible that rain water wall collected here during the good old days. 
                Closer to the top, one come across some trees and dilapidated old structures which are currently used as a place to camp or cook. This is also the place where one is likely to find Oriental Honey Buzzards perched on tree-tops . At the slightest disturbance, they take to the air.
                The last leg of the trek breaks the monotony of walking on the rock with the sun blazing down; one now needs to walk under gigantic boulders. Stretches along this leg are strewn with Plumeria, and the air has the whiff of wild-flowers and resonates with bird calls. It is also a spot where one has a chance to sight the Elusive Yellow Throted Bulbul.</p>
            <h4 className="locationptr"><a href="https://goo.gl/maps/VKkR2kFCAoobVCjT8">📍Click here to find out where it is!</a></h4>
        </div>
    );

}

export default Savand;