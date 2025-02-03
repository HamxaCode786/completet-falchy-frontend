import React, { createContext, useState, useEffect } from "react";

export const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(() => {
    const savedCard = localStorage.getItem("selectedCard");
    return savedCard ? JSON.parse(savedCard) : null;
  });

  useEffect(() => {
    // Log the selectedCard data whenever it changes
    

    if (selectedCard !== null) {
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
    } else {
      localStorage.removeItem("selectedCard"); // Remove if selectedCard is reset to null
    }
  }, [selectedCard]);

  return (
    <TransferContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </TransferContext.Provider>
  );
};
