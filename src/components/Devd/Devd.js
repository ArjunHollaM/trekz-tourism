import React from "react";
import d2 from './Devarayanadurgaassets/d1.jpg'
import d3 from './Devarayanadurgaassets/d2.jpg'
import d1 from './Devarayanadurgaassets/d3.webp'

const Devd = () => {
    return(
        <div className="Hillcontent">
            <h1 className="hilltitle">Devarayanadurga</h1>
            <p>Devarayanadurga is a temple town and hill station located in the district of Tumakuru in the state of Karnataka in India. 
                The rocky hills are surrounded by forest and the hilltops are dotted with several temples including the Yoganarasimha and the Bhoganarasimha temples and an altitude of 1204 metres.
                Devarayanadurga translates to "Devaraya's fort" in Kannada; the town got its current name after the Mysore ruler Chikka Devaraja Wodeyar captured it in one of his victories. The place is thought by many to be haunted</p>
            <p>Devarayanadurga is located 15 kilometers (9 mi) from Tumakuru city and at an altitude of 3,940 feet, and about 73 kilometres (45 mi) from Bengaluru city, the capital of Karnataka.</p>
            <img src={d1} alt="Pic" />
            <p>Devarayanadurga is steeped in mythological importance. It is said that Lord Brahma the creator of the Universe, has performed penance for many years in the name of Lord Vishnu for several thousand years. 
                Impressed by his penance, Lord Vishnu has incarnated himself as Lord Narasimha here. 
                Various mythological books describe this place as a very sacred place, as there is a pond with sacred water which is believed to run through the idol of Yoga Narasimha, which can be experienced even today as one enters the entrance of the temple premises. </p>
            <img src={d2} alt="pic" /> 
            <p>The fort or the temple is built in the Dravidian style and the temples are said to be about 2000 years old. The temple enjoyed the rich patronage of the Chola Kings which was well known for its sculptural excellence. Here two temples are built for God Narasimha, one which is at the foot of the hillock called the Bhoga Narasimha and the other temple which is built on the hillock which is called Yoga Narasimha.</p>
            <img src={d3} alt="Pic" />
            <p>The Bhoga Narasimha Temple is located at the base of the hillock of the Devarayanadurga and the deity as we all know is dedicated to Lord Narasimha.
            Another temple which is located in Devarayanadurga is the Yoga Narasimha Temple which is on the hillock. 
            Around 100 steps have to be climbed to reach the temple and the scenic beauty will definitely leave the climbers spellbound.
            There is a temple which is dedicated to Goddess Lakshmi near Devarayanadurga which is called as the “Goravanahalli Lakshmi” and is revered by many Hindus.
            </p>
            <h4 className="locationptr"><a href="https://goo.gl/maps/HfMDVo8dViLAEj1h8">📍Click here to find out where it is!</a></h4>
        </div>
    );

}

export default Devd;