import React, { useEffect, useState } from 'react';
import {
  joinUniverse,
  leaveUniverse,
  listenToUniverseUpdates,
} from '../services/websocket';

const UniverseViewer = ({ universeId }) => {
  const [universeData, setUniverseData] = useState(null);

  useEffect(() => {
    // Join the universe room
    joinUniverse(universeId);

    // Listen for updates
    listenToUniverseUpdates((data) => {
      console.log('Universe update received:', data);
      setUniverseData(data); // Update the state
    });

    // Cleanup when the component unmounts
    return () => {
      leaveUniverse(universeId);
    };
  }, [universeId]);

  return (
    <div>
      <h1>Universe Viewer</h1>
      <p>Universe ID: {universeId}</p>
      <p>{universeData ? JSON.stringify(universeData) : 'Loading...'}</p>
    </div>
  );
};

export default UniverseViewer;
