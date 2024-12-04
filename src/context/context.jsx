import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext({});
export const useCtx = () => useContext(DataContext);

export const ProviderContext = ({ children }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(el => setArr(el));
  }, []);

  return <DataContext.Provider
    value={{
      arr,
    }}
  >
    { children }
  </DataContext.Provider>
}
