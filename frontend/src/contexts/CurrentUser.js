import { useEffect, createContext, useState } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await fetch("http://localhost:5001/authentication/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const responseData = await response.text();
        if (!responseData) {
          throw new Error("Empty response");
        }

        const user = JSON.parse(responseData);
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
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
