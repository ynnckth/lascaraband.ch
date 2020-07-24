import React from 'react';
import './Listen.css';


const Listen: React.FC = () => {
  return (
    <div className="listen">
      <h1>Listen</h1>

      <iframe
        width="560" height="315"
        src="https://www.youtube.com/embed/xvCgqfrsxNE"
        frameBorder="0"
        title="pegatrip-rad-fyah"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <br/>
      <span>La Scaraband - Pegatrip played at the <a href="https://radfyah.com/">Rad Fyah Studio</a></span>
    </div>
  );
};

export default Listen;
