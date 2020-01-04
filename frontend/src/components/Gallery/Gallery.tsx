import React from 'react';
import './Gallery.css';


const Gallery: React.FC = () => {

  const importAll = (r: any): string[] => {
    return r.keys().map(r);
  };

  // @ts-ignore
  const thumbnails = importAll(require.context('../../assets/images/gallery/thumbs', false, /\.(png|jpe?g|svg)$/));
  // @ts-ignore
  const images = importAll(require.context('../../assets/images/gallery/original', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery">
      <h1>Gallery</h1>

      <div className="gallery-thumbnails">
        {thumbnails.map((thumb, idx) =>
          <div key={idx} className="thumb">
            <a href={images[idx]} data-lightbox="mygallery">
              <img src={thumb} alt="image"/>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
