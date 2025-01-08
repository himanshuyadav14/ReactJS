import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.defaultPrice
            ? action.payload.defaultPrice / 100
            : action.payload.price / 100,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
