import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Footer: React.FC = () => {

  const scrollToTop = (): void => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  };

  return (
    <div className="footer">
      <p>© 2020 by lascaraband
        <span onClick={scrollToTop} className="scroll-up-icon"> <FontAwesomeIcon icon="caret-up"/></span>
      </p>
    </div>
  );
};

export default Footer;
