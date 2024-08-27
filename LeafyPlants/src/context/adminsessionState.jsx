import React, { useState } from 'react';
import AdminSessionContext from './AdminSessionContext'; 

const AdminSessionState = ({ children }) => {
    const [adminSessionId, setAdminSessionId] = useState(-1);

    return (
        <AdminSessionContext.Provider value={{ adminSessionId, setAdminSessionId }}>
            {children}
        </AdminSessionContext.Provider>
    );
};

export default AdminSessionState;



