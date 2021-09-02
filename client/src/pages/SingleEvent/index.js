import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EventList from '../../components/EvenList';

import { SINGLE_EVENT } from '../../utils/queries';

const ViewEvent = () => {
  const { eventId } = useParams();
  const { loading, data } = useQuery(SINGLE_EVENT, {
    variables: { eventId: eventId },
  });
  
  console.log(data)
  const events = data?.events || [];


  // if (loading) {
  //   return <div>Loading...</div>
  // }
  return (
    <div className="col-12 col-md-8 mb-3">
    
          <div className="">{events.title}</div>
          <div className="">{events.description}</div>
          <div className="">{events.locationName}</div>
          <div className="">{events.locationAddress}</div>
          <div className="">{events.locationZipCode}</div>
          <div className="">{events.eventDate}</div>
          <div className="">{events.eventTime}</div>
        </div>
  );
};

export default ViewEvent;



