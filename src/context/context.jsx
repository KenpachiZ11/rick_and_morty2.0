import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext({});
export const useCtx = () => useContext(DataContext);

export const ProviderContext = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [arr, setArr] = useState([]);

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

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(el => setArr(el));
  }, []);

  // console.log(allCharacters)

  return <DataContext.Provider
    value={{
      arr,
      allCharacters
    }}
  >
    { children }
  </DataContext.Provider>
}


// import React, { useEffect, useState } from 'react';

// export const Info = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchCharacters = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setCharacters((prev) => [...prev, ...data.results]);
//       setLoading(false);
//       if (data.info.next) {
//         // Если есть следующая страница, получаем её
//         fetchCharacters(data.info.next);
//       }
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCharacters('https://rickandmortyapi.com/api/character');
//   }, []);

//   return (
//     <div>
//       <h1>Characters</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       <ul>
//         {characters.map((character) => (
//           <li key={character.id}>
// {character.name} - - {character.species}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };