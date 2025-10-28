import { ItemCounter } from './shopping-cart/ItemCounter';

interface CartItem {
  productName: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  { productName: 'Nintendo Switch', quantity: 0 },
  { productName: 'Playstation 5', quantity: 0 },
  { productName: 'Xbox Series X', quantity: 0 },
];

export function BasicsApp() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map(({ productName, quantity }: CartItem) => (
        <ItemCounter key={productName} productName={productName} quantity={quantity} />
      ))}
    </div>
  );
}
