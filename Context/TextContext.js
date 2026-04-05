import React, { createContext, useState } from 'react';

// 1. Create the Context object
export const TextContext = createContext();

// 2. Create the Provider component
export const TextProvider = ({ children }) => {
  const [sharedText, setSharedText] = useState("Initial Value");

  return (
    <TextContext.Provider value={{ sharedText, setSharedText }}>
      {children}
    </TextContext.Provider>
  );
};