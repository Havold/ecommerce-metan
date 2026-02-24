import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CartItem,
  CartItems,
  CartStoreActionsType,
  CartStoreStateType,
} from "../types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product: CartItem) =>
        set((state: { cart: CartItems }) => ({
          cart: [...state.cart, product],
        })),
      removeFromCart: (product: CartItem) =>
        set((state: { cart: CartItems }) => ({
          cart: state.cart.filter((currItem) => currItem.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCartStore;
