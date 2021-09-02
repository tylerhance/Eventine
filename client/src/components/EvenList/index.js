import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((event) => (
          <div key={event._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/userprofile/${event.organizer.username}`}
                >
                  {event.organizer.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this event on {event.eventDate}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this event on {event.eventDate}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{event.description}</p>
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
  );
};

export default EventList;
