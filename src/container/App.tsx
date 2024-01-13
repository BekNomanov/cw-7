import React, {useState} from 'react';
import FoodsData from './FoodCards';
import FoodItem from '../componens/FoodItem';
import BoxItem from '../componens/BoxItem';

const FoodsComponent: React.FC = () => {
  const [state, setState] = useState({
    foods: FoodsData,
    selectedProduct: null as Food | null,
    boxItems: [] as { product: Food; count: number }[],
  });

  const handleItemClick = (foodId: number) => {
    const selected = state.foods.find((food) => food.id === foodId);
    if (selected) {
      const existingItem = state.boxItems.find((item) => item.product.id === foodId);

      if (existingItem) {
        setState((prevState) => ({
          ...prevState,
          boxItems: prevState.boxItems.map((item) =>
            item.product.id === foodId
              ? {...item, count: item.count + 1}
              : item
          ),
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          boxItems: [...prevState.boxItems, {product: selected, count: 1}],
        }));
      }
    }
  };

  const handleRemoveFromBoxes = (foodId: number) => {
    setState((prevState) => ({
      ...prevState,
      boxItems: prevState.boxItems.filter((item) => item.product.id !== foodId),
    }));
  };

  const getTotal = () => {
    return state.boxItems.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );
  };

  return (
    <div className="container">
      <div className="card">
        {state.foods.map((food) => (
          <FoodItem key={food.id} food={food} onClick={() => handleItemClick(food.id)}/>
        ))}
      </div>
      <div className="boxes">
        <p>Заказы:</p>
        {state.boxItems.map((item) => (
          <BoxItem key={item.product.id} item={item} onRemove={handleRemoveFromBoxes}/>
        ))}
        <hr/>
        <p>Общая сумма: {getTotal()} сом</p>
      </div>
    </div>
  );
};

export default FoodsComponent;