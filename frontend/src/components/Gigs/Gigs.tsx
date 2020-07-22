import React from 'react';
import gigs from '../../assets/gigs.json';

interface IProps {
  showPastGigs: boolean;
}

const Gigs: React.FC<IProps> = (props: IProps) => {
  const pastGigs = gigs.filter(gig => new Date(gig.date) < new Date());
  const upcomingGigs = gigs.filter(gig => new Date(gig.date) >= new Date());

  return (
    <div className="gigs">
      <h1>Upcoming gigs</h1>
      <ul>
        {
          upcomingGigs.length > 0
            ? upcomingGigs.map((gig, idx) =>
              <li key={`gig-${idx}`}>{`${gig.date} ${gig.description}`}</li>)
            : <li>Coming soon...</li>
        }
      </ul>
      <br/>

      {(props.showPastGigs && pastGigs.length > 0) &&
      <React.Fragment>
        <h1>Past gigs</h1>
        <ul>
          {
            pastGigs.map((gig, idx) =>
              <li key={`gig-${idx}`}>{`${gig.date} ${gig.description}`}</li>)
          }
        </ul>
      </React.Fragment>}
    </div>
  );
};

export default Gigs;
