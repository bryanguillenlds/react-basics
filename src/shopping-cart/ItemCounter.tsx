import { useState } from 'react';
import './ItemCounter.css';

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleDecrement = () => {
    setCount(count - 1 < 0 ? 0 : count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{ color: count > 0 ? 'black' : 'red' }}
      >
        {productName}
      </span>
      <button onClick={handleDecrement}> -1 </button>
      <span> {count} </span>
      <button onClick={handleIncrement}> +1 </button>
    </section>
  );
};
