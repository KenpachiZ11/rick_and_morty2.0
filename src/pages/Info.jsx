import React, { useEffect, useState, useCallback } from 'react';
import { useCtx } from '../context/context';
import { Card } from '../components/Card/Card';

import { objectGender, objectStatus, objectSpecies, filters } from './utilites/Info.js';

import {
  WrapperBlockSt,
  WrapperBlockOptionsSt,
  WrapperGenderSt,
  WrapperStatusSt,
  WrapperSpeciesSt,
  WrapperBlockCardsSt
} from './style/Info.style.js';

export const Info = () => {
  const { allCharacters } = useCtx();

  const [filteredField, setFilteredField] = useState(filters);
  const [arrCharacters, setArrCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [сhoiceOptions, setChoiceOptions] = useState(null);

  const [uniqFieldGender, setUniqFieldGender] = useState([]);
  const [uniqFieldStatus, setUniqFieldStatus] = useState([]);
  const [uniqFieldSpecies, setUniqFieldSpecies] = useState([]);

  const [uniqFieldGenderType, setUniqFieldGenderType] = useState([]);
  const [uniqFieldStatusType, setUniqFieldStatusType] = useState([]);
  const [uniqFieldSpeciesType, setUniqFieldSpeciesType] = useState([]);

  const filterHandler = (obj) => {
    for(const [key, value] of Object.entries(obj)) {
      if(value === 'Все') {
        obj[key] = '';
      }
    }
    setFilteredField(prev => ({ ...prev, obj }));
  }

  console.log(filteredField);

  const uniqProp = (array, prop) => [...new Set(array.map(el => el[prop]))];
  const wordReplacement = (array, object) => array.map(el => object[el]);
  const renderUniqArray = (array) => array.map((el, index) => <div key={index} onClick={() => filterHandler(el)}>{el}</div>);

  const a = allCharacters.reduce((arr, current) => {
    // if(filteredField.obj === filters[current['gender']]) {
    //   console.log(current);
    // }
  }, []);

  // const filteredArray = (array, obj1, prop1, obj2) => array.reduce((arr, current) => {

  // }, []);

  const loadMoreCharacters = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prevCount => Math.min(prevCount + 8, allCharacters.length));
      setLoading(false);
    }, 1000);
  }, [allCharacters.length]);

  useEffect(() => {
    if(uniqFieldGender && uniqFieldGender.length > 0) {
      const array = wordReplacement(uniqFieldGender, objectGender);
      setUniqFieldGenderType(array);
    }
    if(uniqFieldStatus && uniqFieldStatus.length > 0) {
      const array = wordReplacement(uniqFieldStatus, objectStatus);
      setUniqFieldStatusType(array);
    }
    if(uniqFieldSpecies && uniqFieldSpecies.length > 0) {
      const array = wordReplacement(uniqFieldSpecies, objectSpecies);
      setUniqFieldSpeciesType(array);
    }
  }, [uniqFieldGender, uniqFieldStatus, uniqFieldSpecies]);

  useEffect(() => {
    if (allCharacters && allCharacters.length > 0) {
      const arrayGender = uniqProp(allCharacters, 'gender');
      const arrayStatus = uniqProp(allCharacters, 'status');
      const arraySpecies = uniqProp(allCharacters, 'species');

      setUniqFieldGender(arrayGender);
      setUniqFieldStatus(arrayStatus);
      setUniqFieldSpecies(arraySpecies);

      // setArrCharacters(allCharacters.slice(0, visibleCount));
    }
  }, [allCharacters]);

  useEffect(() => {
    if(allCharacters && allCharacters.length > 0) {
      let arr = [...allCharacters];

      // if(filteredField.obj) {
      //   // console.log(filteredField.obj)
      //   arr = filteredArray(arr, filteredField.gender, 'gender', filteredField.obj);
      //   console.log(arr)
      // }
      // console.log(filteredField.obj)

      // if(filteredField.gender) {
      //   arr = filteredArray(arr, filteredField, 'gender', filters, 'gender');
      //   console.log(arr)
      // }
      // if(filteredField.species) {
        
      // }
      // if(filteredField.status) {
        
      // }

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

  return (
    <WrapperBlockSt>
      <WrapperBlockOptionsSt>
        <WrapperGenderSt>{renderUniqArray(['Все', ...uniqFieldGenderType])}</WrapperGenderSt>
        <WrapperStatusSt>{renderUniqArray(['Все', ...uniqFieldStatusType])}</WrapperStatusSt>
        <WrapperSpeciesSt>{renderUniqArray(['Все', ...uniqFieldSpeciesType])}</WrapperSpeciesSt>
      </WrapperBlockOptionsSt>
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