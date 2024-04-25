import React, { useState } from 'react'
import SessionContext from './Session'

const SessionState = ({children}) => {
    const [sessionId, setSessionId] = useState(-1,{});
    // const [adminsessionId, adminsetSessionId] = useState(-1,{});

  return (
    <SessionContext.Provider value = {{sessionId, setSessionId}}>
        {children}
    </SessionContext.Provider>
  )
}

export default SessionState;