import React from 'react';
import './style.css';
import { useCtx } from '../context/context';

import { Card } from '../components/Card/Card';

export const Info = () => {
  const { arr } = useCtx();
  const { results } = arr;

  return (
    <div className='wrapper'>
      {
        results?.length > 0 &&
        results?.map(el => <Card data={el} key={el.id}/>)
      }
    </div>
  )
}