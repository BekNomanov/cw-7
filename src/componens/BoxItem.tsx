import React from 'react';

const BoxItem: React.FC<BoxItemProps> = ({item, onRemove}) => (
  <div className="box-item" key={item.product.id}>
    <p>{item.product.name}</p>
    <p className="p">Count: {item.count}</p>
    <button onClick={() => onRemove(item.product.id)}>Удалить</button>
  </div>
);

export default BoxItem;