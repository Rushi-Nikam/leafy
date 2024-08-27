import React, { useState, useEffect } from 'react';
import SessionContext from './Session'; // Ensure the correct path

const SessionState = ({ children }) => {
  // Initialize sessionId from sessionStorage or default to -1
  const [sessionId, setSessionId] = useState(() => {
    const storedSessionId = sessionStorage.getItem('sessionId');
    return storedSessionId ? parseInt(storedSessionId, 10) : -1;
  });

  // Update sessionStorage whenever sessionId changes
  useEffect(() => {
    sessionStorage.setItem('sessionId', sessionId);
  }, [sessionId]);

  return (
    <SessionContext.Provider value={{ sessionId, setSessionId }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionState;
