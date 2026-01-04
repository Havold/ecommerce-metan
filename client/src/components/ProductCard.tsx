"use client";
import Image from "next/image";
import { ProductType } from "../types";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleChangeProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div className="shadow-md p-4 rounded-lg">
      {/* IMAGE */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-2/3 overflow-hidden rounded-md">
          <Image
            className="hover:scale-105 transition-transform ease-in duration-300"
            src={product.images[productType.color]}
            alt={product.name}
            fill
          />
        </div>
      </Link>
      {/* DETAIL */}
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">{product.name}</h1>
        <p className="text-[12px] text-gray-500 ">{product.shortDescription}</p>
        {/* SELECTION */}
        <div className="flex gap-6 text-xs">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-500" htmlFor="">
              Size
            </label>
            <select
              className="ring-1 rounded-md ring-gray-300 hover:ring-primary"
              name="size"
              id="size"
              onChange={(e) =>
                handleChangeProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size, index) => (
                <option className="text-[12px]" key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-500" htmlFor="">
              Color
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer rounded-full border p-0.5 ${
                    color === productType.color
                      ? "border-gray-400"
                      : "border-gray-200"
                  }`}
                  key={`${product.id}-${color}`}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      handleChangeProductType({ type: "color", value: color })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex items-center justify-between">
          <h1 className="text-md font-semibold">{product.price}$</h1>
          <button className="flex text-[12px] gap-2 shadow-md px-2 py-1 rounded-lg cursor-pointer items-center ring-1 ring-gray-200 hover:bg-gray-800 hover:text-white transition-colors ease-in duration-200">
            <ShoppingCart size={12} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
