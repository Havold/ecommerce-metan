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
        set((state: { cart: CartItems }) => {
          const productIndex = state.cart.findIndex(
            (item) =>
              item.id === product.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize,
          );
          if (productIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[productIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, product] };
          }
        }),
      removeFromCart: (product: CartItem) =>
        set((state: { cart: CartItems }) => ({
          cart: state.cart.filter(
            (currItem) =>
              !(
                currItem.id === product.id &&
                currItem.selectedColor === product.selectedColor &&
                currItem.selectedSize === product.selectedSize
              ),
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCartStore;
