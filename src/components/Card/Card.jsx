import React from 'react';
import './Card.style.css';
import { Link } from 'react-router-dom';

export const Card = ({ data }) => {
  const { id, name, image } = data;

  return (
    <Link to={`/info/${id}`}>
      <div className='wrapper-img'>
        <span>{name}</span>
        <img src={image} alt={name}/>
      </div>
    </Link>
  )
}