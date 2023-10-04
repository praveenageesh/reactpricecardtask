import React from 'react';
import PriceCard from './PriceCard';

const App = () => {
  const priceCardData = [
    {
      title: 'Basic',
      price: 19.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard',
      price: 29.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium',
      price: 39.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <div className="App">
      {priceCardData.map((card, index) => (
        <PriceCard key={index} title={card.title} price={card.price} features={card.features} />
      ))}
    </div>
  );
};

export default App;
