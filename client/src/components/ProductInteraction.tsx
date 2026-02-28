"use client";
import { Plus, ShoppingCart } from "lucide-react";
import { ProductType } from "../types";
import Button from "./Button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCartStore();
  const [productType, setProductType] = useState({
    size: selectedSize,
    color: selectedColor,
  });
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuality = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleChangeType = (type: "size" | "color", value: string) => {
    setProductType({ ...productType, [type]: value });
    const params = new URLSearchParams(searchParams);
    params.set(type, value);
    router.push(`/products/${product.id}?${params}`, { scroll: false });
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor: productType.color,
      selectedSize: productType.size,
      quantity: quantity,
    });
    toast.success("Add product successfully!");
  };
  return (
    <>
      {/* SIZE */}
      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-500">Size</label>
        <div className="flex gap-4">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`text-xs p-0.5 ring-1 ${productType.size === size ? `ring-secondary-bg` : `ring-gray-300`}`}
            >
              <div
                onClick={() => handleChangeType("size", size)}
                className={`w-8 h-8 flex items-center justify-center cursor-pointer ${productType.size === size ? `bg-secondary-bg text-white` : ``}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-500">Color</label>
        <div className="flex gap-4">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`ring-1 ${productType.color === color ? `ring-secondary-bg` : `ring-gray-300`} p-0.5`}
            >
              <div
                onClick={() => handleChangeType("color", color)}
                className="w-8 h-8 cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2">
        <label htmlFor="quantity" className="text-xs text-gray-500">
          Quantity
        </label>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => handleChangeQuality("decrease")}
            className="flex items-center justify-center w-6 h-6 text-lg ring ring-gray-400 cursor-pointer"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            className="w-4 text-center"
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setQuantity(1);
                return;
              }
              const numberValue = parseInt(value);
              if (!isNaN(numberValue) && numberValue >= 1) {
                setQuantity(numberValue);
              } else {
                setQuantity(1);
              }
            }}
          />
          <button
            onClick={() => handleChangeQuality("increase")}
            className="flex items-center justify-center w-6 h-6 text-lg ring ring-gray-400 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex flex-col gap-4">
        <Button onClick={handleAddToCart}>
          <Plus size={14} />
          Add to Cart
        </Button>
        <Button
          className="ring-1 ring-secondary-bg"
          backgroundColor="white"
          textColor="secondary-bg"
        >
          <ShoppingCart size={14} /> Buy this Item
        </Button>
      </div>
    </>
  );
};

export default ProductInteraction;
