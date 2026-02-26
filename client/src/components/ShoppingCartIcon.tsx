"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "../store/cartStore";

const ShoppingCartIcon = () => {
  const { cart } = useCartStore();
  return (
    <Link href={"/cart"} className="relative text-gray-600 cursor-pointer">
      <ShoppingCart className="w-4 h-4" />
      <span className="absolute text-xs bg-primary w-4 h-4 rounded-full -top-3 -right-2 flex items-center justify-center ">
        {cart.reduce((total, currItem) => total + currItem.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
