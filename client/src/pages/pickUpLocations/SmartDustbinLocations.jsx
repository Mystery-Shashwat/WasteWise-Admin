import React from 'react';
import './SmartDustbinLocations.css';

const SmartDustbinLocations = () => {
  const dustbinLocations = [
    { id: 1, area: 'Sector 10', installedOn: '2023-12-01' },
    { id: 2, area: 'Sector 12', installedOn: '2023-11-20' },
    { id: 3, area: 'Sector 14', installedOn: '2024-01-15' },
    { id: 4, area: 'Sector 18', installedOn: '2024-02-05' },
    { id: 5, area: 'Sector 20', installedOn: '2024-04-12' },
  ];

  return (
    <div className="smart-dustbin-container">
      <h2>Smart Dustbin Installations</h2>
      <div className="dustbin-list">
        {dustbinLocations.map(loc => (
          <div className="dustbin-card" key={loc.id}>
            <h4>{loc.area}</h4>
            <p>Installed on: {loc.installedOn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartDustbinLocations;
