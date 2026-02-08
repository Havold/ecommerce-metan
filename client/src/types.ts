export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItem = ProductType & {
  selectedColor: string;
  selectedSize: string;
  quantity: number;
};

export type CartItems = CartItem[];
