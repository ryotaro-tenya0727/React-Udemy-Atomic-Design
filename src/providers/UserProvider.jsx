import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const contextName = { name: "ほにたん" };
  return (
    <UserContext.Provider value={contextName}>{children}</UserContext.Provider>
  );
};
