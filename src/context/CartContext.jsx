import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color
      );
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id && item.color === action.payload.color
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) =>
          !(item.id === action.payload.id && item.color === action.payload.color)
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeFromCart = (id, color) => dispatch({ type: "REMOVE_ITEM", payload: { id, color } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}