import React, { useEffect, useState, useCallback } from 'react';
import { useCtx } from '../context/context';

import { Cards } from '../components/Cards/Cards.jsx';

import {
  WrapperBlockSt,
} from './style/Info.style.js';

export const Info = () => {
  const { allCharacters } = useCtx();

  return (
    <WrapperBlockSt>
      <Cards allCharacters={allCharacters}/>
    </WrapperBlockSt>
  )
}