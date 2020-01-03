import React from 'react';
import './Listen.css';

// TODO:
//  - embed bandcamp widget with single (as soon as released)
//  - embed facebook videos

const Listen: React.FC = () => {
  return (
    <div className="listen">
      <h1>Listen</h1>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsuperscaras%2Fvideos%2F657849404639648%2F&show_text=0&width=560"
        className="facebook-embedded-video"
        width="560" height="315" scrolling="no" frameBorder="0"
        >
      </iframe>
    </div>
  );
};

export default Listen;
