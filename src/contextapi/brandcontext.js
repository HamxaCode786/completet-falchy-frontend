import React, { createContext, useState, useContext } from "react";

// Create a Context for the selected brand
const BrandContext = createContext();

// Create a Provider component
export const BrandProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const selectBrand = (brandName) => {
    setSelectedBrand(brandName);
  };

  const resetBrand = () => {
    setSelectedBrand(null);  // Reset the selected brand to its initial value (null)
  };

  return (
    <BrandContext.Provider value={{ selectedBrand, selectBrand, resetBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

// Custom hook to use the Brand context
export const useBrand = () => {
  return useContext(BrandContext);
};
