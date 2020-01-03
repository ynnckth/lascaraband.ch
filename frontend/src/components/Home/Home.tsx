import React from 'react';
import './Home.css';
import Gigs from '../Gigs/Gigs';


const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <h1>About</h1>
        <p>La Scaraband was born in 2016 ...</p>
        <br/>
      </div>

      <Gigs/>

      <div className="instagram-feed">
        <div className="elfsight-app-9528aeaf-dd19-42fe-ace8-6e614897d4a7"/>
      </div>
    </div>
  );
};

export default Home;
