import React, { createContext, useState, useEffect } from "react";

export const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [selectedCard, setSelectedCard] = useState(() => {
    // Check if 'selectedCard' exists in localStorage and parse it; otherwise, default to null
    const savedCard = localStorage.getItem("selectedCard");
    return savedCard ? JSON.parse(savedCard) : null;
  });

  useEffect(() => {
    // Whenever selectedCard changes, update it in localStorage
    if (selectedCard !== null) {
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
    } else {
      localStorage.removeItem("selectedCard"); // Remove if selectedCard is reset to null
    }
  }, [selectedCard]); // This effect runs whenever selectedCard changes

  return (
    <TransferContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </TransferContext.Provider>
  );
};
