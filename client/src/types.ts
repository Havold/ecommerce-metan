import z from "zod";

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

export const ShippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email("Invalid email address").min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits")
    .max(10, "Phone number must be between 7 and 10 digits"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;

export const PaymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card Holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Invalid card number")
    .max(16, "Invalid card number"),
  expDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration Date must be in MM/YY format",
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItems;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  clearCart: () => void;
};

export type Color = "gray" | "purple" | "green";
