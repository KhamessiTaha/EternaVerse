import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
