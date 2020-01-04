import React from 'react';
import './Home.css';
import Gigs from '../Gigs/Gigs';
import titleImage from '../../assets/images/18402279_1437491599651645_3253204915988598215_o.jpg';


const Home: React.FC = () => {
  return (
    <div className="home">
      <img src={titleImage} className="home-image" alt="home" />

      <Gigs showPastGigs={false}/>

      <div className="instagram-feed">
        <div className="elfsight-app-9528aeaf-dd19-42fe-ace8-6e614897d4a7"/>
      </div>
      <div className="instagram-patch"/>
    </div>
  );
};

export default Home;
