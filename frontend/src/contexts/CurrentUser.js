import React, { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    window.setCurrentUser = setCurrentUser;
    const getLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:5001/authentication/profile', {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const user = await response.json();
        setCurrentUser(user);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    getLoggedInUser();
  }, []);


  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;
