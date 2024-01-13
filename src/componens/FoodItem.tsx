import React from 'react';


const FoodItem: React.FC<FoodItemProps> = ({ food, onClick }) => (
  <div className="item" onClick={onClick}>
    <img src={food.img} style={{width:'100px', height:'100px'}} alt='.' />
    <p className='name'>{food.name}</p>
    <span className='price'>Price: {food.price} сом</span>
  </div>
);

export default FoodItem;