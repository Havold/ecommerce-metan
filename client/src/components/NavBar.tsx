import Link from "next/link";

import Input from "./Input";
import { Bell, House } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 py-4  ">
      {/* LEFT */}
      <Link href="/">
        <h1 className="text-3xl text-primary font-semibold tracking-wider">
          METAN
        </h1>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Input />
        <House className="w-4 h-4 text-gray-600" />
        <Bell className="w-4 h-4 text-gray-600" />
        {/* <ShoppingCart className="w-4 h-4 text-gray-500" /> */}
        <ShoppingCartIcon />
        <Link className="text-sm" href="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
