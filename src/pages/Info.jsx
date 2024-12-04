import React, { useEffect, useState } from 'react';
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
  const { arr, allCharacters } = useCtx();
  const { info, results } = arr;

  const [arrCharacters, setArrCharacters] = useState([]);
  
  useEffect(() => {
    if(allCharacters && allCharacters.length > 0) {
      if(info.count === allCharacters.length) {
        setArrCharacters(allCharacters);
      }
    }
  }, [allCharacters]);

  const unityPropertyes = (arr, prop) => {
    if(arr && arr.length > 0) {
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
          allCharacters?.length > 0 &&
          allCharacters?.map(el => <Card data={el} key={el.id}/>)
        }
      </WrapperBlockCardsSt>
    </WrapperBlockSt>
  )
}