import React, { useEffect, useState, useCallback } from 'react';
import { useCtx } from '../context/context';
import { Card } from '../components/Card/Card';

import {
  WrapperBlockSt,
  WrapperGenderSt,
  WrapperStatusSt,
  WrapperSpeciesSt,
  WrapperBlockCardsSt
} from './style/Info.style.js';

export const Info = () => {
  const { allCharacters } = useCtx();

  const [arrCharacters, setArrCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    if (allCharacters && allCharacters.length > 0) {
      setArrCharacters(allCharacters.slice(0, visibleCount));
    }
  }, [allCharacters, visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !loading) {
        loadMoreCharacters();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const loadMoreCharacters = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prevCount => Math.min(prevCount + 8, allCharacters.length));
      setLoading(false);
    }, 2000);
  }, [allCharacters.length]);

  const unityPropertyes = (arr, prop) => {
    if (arr && arr.length > 0) {
      const array = [...new Set(arr.map(el => el[prop]))];
      return <> { array?.length > 0 && array.map((el, i) => <div key={i}>{el}</div>) } </>
    }
  }

  const getGender = () => unityPropertyes(arrCharacters, 'gender');
  const getStatus = () => unityPropertyes(arrCharacters, 'status');
  const getSpecies = () => unityPropertyes(arrCharacters, 'species');

  return (
    <WrapperBlockSt>
      <WrapperGenderSt>{getGender()}</WrapperGenderSt>
      <WrapperStatusSt>{getStatus()}</WrapperStatusSt>
      <WrapperSpeciesSt>{getSpecies()}</WrapperSpeciesSt>
      <WrapperBlockCardsSt>
        {
          arrCharacters.length > 0 &&
          arrCharacters.map(el => <Card data={el} key={el.id}/>)
        }
        {loading && <div>Loading...</div>}
      </WrapperBlockCardsSt>
    </WrapperBlockSt>
  )
}
