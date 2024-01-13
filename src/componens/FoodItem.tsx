import React from 'react';

const FoodItem: React.FC<FoodItemProps> = ({ food, onClick }) => (
  <div className="item" onClick={onClick}>
    <p>{food.name}</p>
    <p>Price: {food.price} сом</p>
  </div>
);

export default FoodItem;