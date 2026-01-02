"use client";
import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Lightbulb,
  Shirt,
  ShoppingBasket,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket size={16} className="text-gray-500" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt size={16} className="text-gray-500" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints size={16} className="text-gray-500" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses size={16} className="text-gray-500" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase size={16} className="text-gray-500" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Lightbulb size={16} className="text-gray-500" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt size={16} className="text-gray-500" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand size={16} className="text-gray-500" />,
    slug: "gloves",
  },
];

const Category = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const selectedCategory = searchParams.get("category");
  return (
    <div className="column columns-2 sm:columns-3 lg:columns-4 xl:columns-8 bg-gray-200 rounded-lg mb-8 overflow-hidden p-1">
      {categories.map((category, index) => (
        <div
          key={category.name}
          className={`flex items-center justify-center gap-2 cursor-pointer p-2 rounded-lg text-sm  ${
            selectedCategory === category.slug ? "bg-white" : "text-gray-500"
          }`}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
