import React from 'react';
import './Home.css';
import Gigs from '../Gigs/Gigs';


const Home: React.FC = () => {
  return (
    <div className="home">
      <Gigs showPastGigs={false}/>

      <div className="instagram-feed">
        <div className="elfsight-app-9528aeaf-dd19-42fe-ace8-6e614897d4a7"/>
      </div>
    </div>
  );
};

export default Home;
