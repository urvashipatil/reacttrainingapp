import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [state, setState] = useState({ cart: [] });
  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};
