// ScrollContext.js
import React, { createContext, useContext, useRef } from "react";

// Create the context
const ScrollContext = createContext();

// Create a provider for the context
export const ScrollProvider = ({ children }) => {
  const servicesRef = useRef(null); // Ref to the services section

  // Scroll to the services section
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToServices, servicesRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the context
export const useScroll = () => useContext(ScrollContext);
