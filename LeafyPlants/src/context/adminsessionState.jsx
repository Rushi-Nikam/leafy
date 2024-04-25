import React, { useState } from 'react'
import SessionContext from './Session'

const adminsessionState = ({children}) => {
    const [adminsessionId, setAdminSessionId] = useState(-1,{});
    // const [adminsessionId, adminsetSessionId] = useState(-1,{});

  return (
    <SessionContext.Provider value = {{adminsessionId, setAdminSessionId}}>
        {children}
    </SessionContext.Provider>
  )
}

export default adminsessionState;