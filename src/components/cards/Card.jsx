import React from 'react';
import './Card.css';

function Card({ image, title, subtitle }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default Card;