import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/0130_15578793_1285138484886958_1103544731450889802_n.jpg';


const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>La Scaraband was born in 2016 and consists of Leonardo Pedrocca on guitar, Jorge Oswald on guitar and bass,
        Carolina Segui on clarinet, Ivan Garcia on percussion and Yannick Streit on drums.</p>
      <br/>
      <img src={aboutImage} className="about-image" alt="the band"/>
    </div>
  );
};

export default About;
