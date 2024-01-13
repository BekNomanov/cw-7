interface Food  {
  id: number;
  name: string;
  price: number;
  img: string;
  count: number;
}

interface FoodItemProps {
  food: Food;
  onClick: () => void;
}

interface BoxItemProps {
  item: { product: Food; count: number };
  onRemove: (foodId: number) => void;
}
