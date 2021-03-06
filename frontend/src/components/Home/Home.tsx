import React from 'react';
import './Home.css';
import Gigs from '../Gigs/Gigs';
import titleImage from '../../assets/images/18402279_1437491599651645_3253204915988598215_o.jpg';


const Home: React.FC = () => {
  return (
    <div className="home">
      <img src={titleImage} className="home-image" alt="home"/>

      <Gigs showPastGigs={false}/>

      <h1>News</h1>

      <div className="news-content">
        <iframe
          width="560" height="315"
          src="https://www.youtube.com/embed/xvCgqfrsxNE"
          frameBorder="0"
          title="pegatrip-rad-fyah"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <br/>
        <span>Fresh from the oven! La Scaraband performing "Pegatrip" at the <a href="https://radfyah.com/">Rad Fyah Studio</a>!</span>
      </div>

      <div className="news-content video-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsuperscaras%2Fvideos%2F1760213807379421%2F&show_text=1&width=560"
          scrolling="no" frameBorder="0"
          title="recording-teaser"
          allow="encrypted-media">
        </iframe>
      </div>

      <div className="instagram-feed">
        <div className="elfsight-app-9528aeaf-dd19-42fe-ace8-6e614897d4a7"/>
      </div>
      <div className="instagram-patch"/>
    </div>
  );
};

export default Home;
