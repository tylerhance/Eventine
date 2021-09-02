import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const EventList = ({
  events,
  title,
  organizer,
  showTitle = true,
  showUsername = true,
}) => {
  if (!events.length) {
    return <h3>No events Yet</h3>;
  }

  return (
    <div className='container'>
      <div className='jumbotron'>Events</div>
      <div className='event-container'>
      {events &&
        events.map((event) => (
          <div key={event._id} className="card">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/event/${event._id}`}
                >
                  {event.title} <br />
                  <span style={{ fontSize: '1rem' }}>
                     On {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(event.eventDate)}
        
                  </span>
                </Link>
              ) : (
                <>
            
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>@ {event.locationName}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/viewevents/${event._id}`}
            >
              Join the discussion on this event.
            </Link>
          </div>
        ))}
        </div>
    </div>
  );
};

export default EventList;
