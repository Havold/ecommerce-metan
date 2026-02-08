import { Trash2 } from "lucide-react";
import Image from "next/image";
import { CartItem as CartItemProps } from "../types";

const CartItem: React.FC<CartItemProps> = (cartItem) => {
  return (
    <div className="w-full h-max flex items-center gap-8 p-4 border border-gray-100 rounded-sm justify-between">
      {/* IMAGE AND DETAILS */}
      {/* <div className="relative aspect-2/3 w-1/3 h-full"> */}
      <div className="flex gap-2">
        <div className="relative w-32 h-32">
          <Image
            className="object-contain"
            src={cartItem.images[cartItem.selectedColor]}
            alt={cartItem.name}
            fill
          />
        </div>
        <div className="flex flex-col w-2/3 justify-between">
          {/* DESC */}
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-md">{cartItem.name}</h1>
            <div className="flex flex-col text-sm text-gray-500">
              <span className="flex gap-2">
                Quantity: <span>{cartItem.quantity}</span>
              </span>
              <span className="flex gap-2">
                Size: <span>{cartItem.selectedSize}</span>
              </span>
              <span className="flex gap-2">
                Color: <span>{cartItem.selectedColor}</span>
              </span>
            </div>
          </div>
          {/* PRICE */}
          <h1 className="text-md font-medium">${cartItem.price.toFixed(2)}</h1>
        </div>
      </div>
      {/* CONTENT */}

      {/* BUTTON */}
      <div className="p-3 bg-red-200 flex items-center justify-center w-fit h-fit rounded-full transition-all ease-in hover:scale-90 hover:cursor-pointer hover:bg-red-300">
        <Trash2 size={18} className="text-red-400" />
      </div>
    </div>
  );
};

export default CartItem;
