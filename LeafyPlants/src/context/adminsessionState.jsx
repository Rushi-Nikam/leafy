import React, { useState, useEffect } from 'react';
import AdminSessionContext from './AdminSessionContext'; 

const AdminSessionState = ({ children }) => {
    const [adminSessionId, setAdminSessionId] = useState(() => {
        const storedAdminSessionId = sessionStorage.getItem('adminSessionId');
        return storedAdminSessionId ? parseInt(storedAdminSessionId, 10) : -1;
    });

    useEffect(() => {
        sessionStorage.setItem('adminSessionId', adminSessionId);

        const getAdminData = async () => {
            try {
                const response = await fetch('http://localhost:8080/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Admin data", data);
                setAdminSessionId(data.admin_session_id);
            } catch (error) {
                console.error("Error fetching admin data:", error);
            }
        }

        if (adminSessionId === -1) {
            getAdminData();
        }
    }, [adminSessionId]);

    return (
        <AdminSessionContext.Provider value={{ adminSessionId, setAdminSessionId }}>
            {children}
        </AdminSessionContext.Provider>
    );
};

export default AdminSessionState;
