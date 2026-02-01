import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href={"/cart"} className="relative text-gray-600 cursor-pointer">
      <ShoppingCart className="w-4 h-4" />
      <span className="absolute text-xs bg-primary w-4 h-4 rounded-full -top-3 -right-2 flex items-center justify-center ">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
