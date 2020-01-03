import React from 'react';
import gigs from '../../assets/gigs.json';


const Gigs: React.FC = () => {
  return (
    <div className="gigs">
      <h1>Upcoming gigs</h1>
      <ul>
        {
          gigs.length > 0
          ? gigs
              .filter(gig => new Date(gig.date) >= new Date())
              .map((gig, idx) => <li key={`gig-${idx}`}>{`${gig.date} ${gig.description}`}</li>)
          : <li>Coming soon...</li>
        }
      </ul>
    </div>
  );
};

export default Gigs;
