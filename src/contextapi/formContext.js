import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formDataContext, setFormDataContext] = useState(null);

  return (
    <FormContext.Provider value={{ formDataContext, setFormDataContext }}>
      {children}
    </FormContext.Provider>
  );
};
