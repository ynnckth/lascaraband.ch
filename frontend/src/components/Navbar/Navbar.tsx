import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div>
        <a href="#/">Home</a>
        <a href="#/listen">Listen</a>
        <a href="#/gigs">Gigs</a>
        <a href="#/gallery">Gallery</a>
        <a href="#/about">About</a>
        <a href="#/booking">Booking</a>
      </div>
      <div>
        <a href="https://www.facebook.com/superscaras">
          <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
