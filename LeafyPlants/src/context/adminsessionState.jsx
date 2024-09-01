import React, { useState, useEffect } from 'react';
import AdminSessionContext from './AdminSessionContext'; 
import axios from 'axios';

const AdminSessionState = ({ children }) => {
    // Initialize adminSessionId from sessionStorage or default to -1
    const [adminSessionId, setAdminSessionId] = useState(() => {
        const storedAdminSessionId = sessionStorage.getItem('adminSessionId');
        return storedAdminSessionId ? parseInt(storedAdminSessionId, 10) : -1;
    });

    // Update sessionStorage whenever adminSessionId changes
    useEffect(() => {
        sessionStorage.setItem('adminSessionId', adminSessionId);

        const getAdminData = async () => {
            const api = await axios.post('http://localhost:8080/admin');
            console.log("Admin data", api?.data)
            setAdminSessionId(api?.data?.admin_session_id);

        }
        getAdminData();
    }, [adminSessionId]);


    return (
        <AdminSessionContext.Provider value={{ adminSessionId, setAdminSessionId }}>
            {children}
        </AdminSessionContext.Provider>
    );
};

export default AdminSessionState;
