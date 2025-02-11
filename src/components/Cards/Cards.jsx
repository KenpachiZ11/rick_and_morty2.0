import React from 'react';

import { Card } from './Card';

import {
  WrapperCardsSt
} from './Cards.style';

export const Cards = ({ allCharacters }) => {
  return (
    <WrapperCardsSt>
      { allCharacters?.length > 0 && allCharacters.map(el => <Card key={el.id} data={el} />) }
    </WrapperCardsSt>
  )
}