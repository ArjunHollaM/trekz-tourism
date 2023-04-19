import React from "react";
import m1 from './Madhugiriassets/m1.jpg';
import m2 from './Madhugiriassets/m2.jpeg';
import m3 from './Madhugiriassets/m3.jpeg';
import m4 from './Madhugiriassets/m4.jpg';

const Madhugiri = () => {
    return(
        <div className="Hillcontent">
            <h1 className="hilltitle">Madhugiri</h1>
            <p>Madhugiri Fort lies in Madhugiri which is in the Tumkur district in the State of Karnataka. 
                Madhugiri is a single hill and the second largest monolith in entire Asia. 
                The small town is at a distance of 100 kms from Bangalore and is famous for its fort and temples. 
                Many tourists visit Madhugiri to visit the fort, which is famous for its architecture and was built by the Vijayanagar Dynasty. 
                The fort is perched on a steep slope of the hill.</p>
            <img src={m1} alt="Pic" />
            <p>Madhugiri Fort was built by Raja Hire Gowda of the Vijayanagara empire some time in the 15th century. But back then, its ramparts were a simple work of mud and stone. 
                In 1678 it was captured by Devaraja, the Dalavayi or chief military commander of Mysore, though upgrades to its structure were made much later.
                The walled fortress of Madhugiri hill is a work of cyclopean masonry with granite stones set in lime mortar. There are three entrances, named Antarala-bagilu, Diddi-bagilu and the Mysore gate respectively. 
                Sharing a wall with the structure is a Jain temple and a little away one can spot the ruins of a Gopalakrishna temple.</p>
            <img src={m2} alt="Pic" />
            <p>The ruins of Madhugiri Fort lies atop the steep hill of height 3950 ft, approximately and is quite an adventurous trek. 
                It takes about 2 hours from Bangalore to reach Madhugiri and can be reached by car or by bus. The nearest railway station is Tumkur which is 40 km away from Bangalore. 
                It would be ideal to start early and reach early to the base of the fort to avoid harsh sun unless it is raining. 
                But then the trek is not recommended during the rainy season for its extra slippery hill and it can be dangerous.</p>
            <img src={m3} alt="pic" /> 
            <p>Even halfway up the hill, one can catch a glimpse of the stunning views that surround Madhugiri. 
                Rows upon rows of rural houses populate the villages at the base with a palisade of tiny hills running around them.
            </p>
            <img src={m4} alt="Pic" />
            <p>There was a time when the stone walls of the mighty fort were considered impregnable. 
                Even today, the undisturbed detail of its masonry bears testimony to the truth of that claim.
                With the scorching sun and the slippery climb, the ascent to the hilltop will be challenging to say the least. 
                But try it for yourself, and maybe by the end, you’ll feel the power its rulers might have felt overlooking the world below.</p>
        </div>
    );

}

export default Madhugiri;