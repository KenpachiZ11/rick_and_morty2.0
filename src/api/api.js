export const fetchHeroes = async (page = 1) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching heroes', error);
    throw error;
  }
};