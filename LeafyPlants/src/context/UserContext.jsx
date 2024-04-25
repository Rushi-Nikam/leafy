// UserContext.js
import {useContext,   useState } from 'react';
import UsersContext from './UsersContext';

 export const useUser = () => useContext(UsersContext);

 const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserContext;
