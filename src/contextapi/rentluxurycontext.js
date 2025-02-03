import React, { createContext, useState, useEffect } from "react";

// Create the context
export const SelectedCardContext = createContext();

const SelectedCardProvider = ({ children }) => {
  // Retrieve the selected card from localStorage on component mount
  const [selectedCard, setSelectedCard] = useState(() => {
    const storedCard = localStorage.getItem("selectedCard");
    return storedCard ? JSON.parse(storedCard) : null; // Parse and return stored card or null if not found
  });

  // Update localStorage whenever the selectedCard changes
  useEffect(() => {
    if (selectedCard) {
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard)); // Store selected card in localStorage
    } else {
      localStorage.removeItem("selectedCard"); // Remove from localStorage if selectedCard is null
    }
  }, [selectedCard]);

  return (
    <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </SelectedCardContext.Provider>
  );
};

export default SelectedCardProvider;
