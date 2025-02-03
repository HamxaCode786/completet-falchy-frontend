import React, { createContext, useState, useContext } from 'react';

// Create a new context
const CardContext = createContext();

// Create a provider for the CardContext
export const CardProvider = ({ children }) => {
  const [cardId, setCardId] = useState(null);

  return (
    <CardContext.Provider value={{ cardId, setCardId }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the CardContext
export const useCard = () => useContext(CardContext);
