import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroesThunk, selectHeroes, selectLoading, selectError } from '../slice/heroesSlice.js';

import { Cards } from '../components/Cards/Cards.jsx';

import {
  WrapperBlockSt,
} from './style/Info.style.js';


export const Heroes = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(selectHeroes);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMoreHeroes = () => setVisibleCount((prevCount) => prevCount + 12);

  useEffect(() => {
    dispatch(fetchHeroesThunk());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <WrapperBlockSt>
      <Cards allCharacters={heroes.slice(0, visibleCount)} />
      {visibleCount < heroes.length && (
        <button onClick={loadMoreHeroes}>Загрузить</button>
      )}
    </WrapperBlockSt>
  )
}