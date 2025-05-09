import React, { useState } from 'react';
import './GCrequests.css';

const GCrequests = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  const requests = [
    { id: 1, location: 'Sector 5', status: 'Pending', time: '10:00 AM' },
    { id: 2, location: 'Sector 9', status: 'In Progress', time: '11:30 AM' },
    { id: 3, location: 'Sector 12', status: 'Completed', time: '08:00 AM' },
    { id: 4, location: 'Sector 7', status: 'Pending', time: '01:00 PM' },
    { id: 5, location: 'Sector 15', status: 'Completed', time: '06:00 AM' },
  ];

  const statuses = ['Pending', 'In Progress', 'Completed'];
  const filteredRequests = requests.filter(req => req.status === activeTab);

  return (
    <div className="garbage-container">
      <h2>Garbage Collection Requests</h2>
      <div className="tabs">
        {statuses.map(status => (
          <button
            key={status}
            className={`tab-button ${activeTab === status ? 'active' : ''}`}
            onClick={() => setActiveTab(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="requests">
        {filteredRequests.length === 0 ? (
          <p className="no-data">No requests under "{activeTab}"</p>
        ) : (
          filteredRequests.map(req => (
            <div className="request-card" key={req.id}>
              <h4>Location: {req.location}</h4>
              <p>Time: {req.time}</p>
              <span className={`status-badge ${req.status.toLowerCase().replace(' ', '-')}`}>
                {req.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GCrequests;
