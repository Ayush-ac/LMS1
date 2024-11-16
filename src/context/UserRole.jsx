import React, { createContext, useState, useContext, useEffect } from "react";

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole('admin'); // Set to 'admin' or any other role you want to test
  }, []);

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => useContext(UserRoleContext);
