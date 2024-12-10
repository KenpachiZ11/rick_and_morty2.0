import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext({});
export const useCtx = () => useContext(DataContext);

export const ProviderContext = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);

  const fetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllCharacters(prev => [...prev, ...data.results]);

      if (data.info.next) {
        fetchCharacters(data.info.next);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  return <DataContext.Provider
    value={{
      allCharacters
    }}
  >
    { children }
  </DataContext.Provider>
}