import React from "react";
import c1 from './Channarayanadurgaassets/c1.jpeg'
import c2 from './Channarayanadurgaassets/c2.jpg'
import c3 from './Channarayanadurgaassets/c3.jpg'
import c4 from './Channarayanadurgaassets/c4.jpg'

const Channd = () => {
    return(
        <div className="Hillcontent">
            <h1 className="hilltitle">Channarayana Durga</h1>
            <p> Around hundred kilometers from the city of Bangalore, Channarayana Durga, a perfect trekking destination, lies in the Tumkur district of Karnataka.  
                A fort that is situated on a hill at a height of 3734 feet, the fort has witnessed to the rise and fall of several kingdoms.
                Kings who ruled Madhugiri, who were not that popular, were the ones who originally built this fort.  
                The old structures that remain intact and few of the temples that are still there in the fort reminds us of the glory it held in the past.</p>
            <img src={c1} alt="Pic" />
            <p>The fort was built in the 17th century by a feudal lord called Chikkappa Gowda, who was the ruler of Madhugiri and the places surrounding it.  
                During the Medieval times, end number of battles was fought for the possession of this fort.
                According to history, the Mysore Wodeyars and the Marathas continuously fought with each other for the place and the fort kept on being passed back and forth till the third Mysore war when the British gained control of the fort.
                Within in a short span of time, they abandoned it. </p>
            <img src={c2} alt="pic" /> 
            <p>Channarayana Durga trek can be classified as moderate. The starting point of this trail begins from the small village of Channarayana Durga situated at the foot of the hill. 
                The fort has three stages, while the lower part of the hill is covered with the steep rocky patches, the upper part consists of vegetation and a pond filled with water. This pond would have served as water source for the people in the fort. 
                There is a small temple next to the pond. During the monsoons, this initial trek would be difficult as the smooth rock would become slippery.</p>
            <img src={c3} alt="Pic" />
            <p>The second stage of the fort was damaged by treasure hunters who dug up and destroyed several structures. 
                There were few structures which were probably used for the storage of ammunition and food grains. At the peak of the fort was a small structure which might have been used as the watch tower. 
                The view from this hill is astounding with dry green shrub, villages and hillocks.</p>
            <img src={c4} alt="Pic" />
            <p>The trek to Channarayana Durga is quite interesting and there are no signboards with very few tourists visiting. It takes about half day to trek to the top and explore the fort. Visitors have to carry their own food and water. 
                Villagers can be hired as guides to explore the fort once you reach the village at the foothill.</p>
            <h4 className="locationptr"><a href="https://goo.gl/maps/mX8dHAHvpTpKipbU9">📍Click here to find out where it is!</a></h4>
        </div>
    );

}

export default Channd;