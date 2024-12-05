"use client";
import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ Children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <GeneralContext.Provider value={{ loading, setLoading }}>
      {Children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
