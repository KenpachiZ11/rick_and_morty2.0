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

  const renderAllCharacters = (array) => array?.length > 0 && array.map(el => <Card data={el} key={el.id}/>);

  return (
    <WrapperBlockSt>
      <WrapperBlockOptionsSt>
        {/* <WrapperGenderSt>{selectOpt(['Все', ...uniqFieldGender])}</WrapperGenderSt>
        <WrapperStatusSt>{selectOpt(['Все', ...uniqFieldStatus])}</WrapperStatusSt>
        <WrapperSpeciesSt>{selectOpt(['Все', ...uniqFieldSpecies])}</WrapperSpeciesSt> */}
      </WrapperBlockOptionsSt>
      <WrapperBlockCardsSt>{renderAllCharacters(allCharacters)}</WrapperBlockCardsSt>
    </WrapperBlockSt>
  )
}