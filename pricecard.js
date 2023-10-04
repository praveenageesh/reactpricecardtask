import React from 'react';
import './PriceCard.css'; // You can style your PriceCard in PriceCard.css

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="price-title">{title}</h2>
      <div className="price">${price}</div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default PriceCard;
