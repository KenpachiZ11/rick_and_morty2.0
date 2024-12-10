import React from 'react';
import './Card.style.js';
import { Link } from 'react-router-dom';

import {
  WrapperBlockSt,
  WrapperBlockNamesSt
} from './Card.style.js';

export const Card = ({ data }) => {
  const { id, name, image } = data;

  return (
    <Link to={`/info/${id}`}>
      <WrapperBlockSt>
        <WrapperBlockNamesSt>{name}</WrapperBlockNamesSt>
          <img src={image} alt={name}/>
      </WrapperBlockSt>
    </Link>
  )
}