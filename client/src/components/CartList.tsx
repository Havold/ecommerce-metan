import { CartItems } from "../types";
import CartItem from "./CartItem";

const CartList = ({ cartItems }: { cartItems: CartItems }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartList;
