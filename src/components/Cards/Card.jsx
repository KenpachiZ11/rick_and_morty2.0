import React from 'react';

import {
  WrapperCardSt,
  WrapperCardInfoSt,
  WrapperCardInfoNameSt,
  WrapperCardInfoStatusSt
} from './Cards.style';

export const Card = ({ data }) => {
  return (
    <WrapperCardSt>
      <img src={data.image} alt={data.name} />
      <WrapperCardInfoSt>
        <WrapperCardInfoStatusSt>{data.status}</WrapperCardInfoStatusSt>
        <WrapperCardInfoNameSt>{data.name}</WrapperCardInfoNameSt>
      </WrapperCardInfoSt>
    </WrapperCardSt>
  )
}