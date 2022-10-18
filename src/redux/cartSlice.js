import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  items: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
        state.counter = state.items.length;
      }
    },

    deleteItem: (state, action) => {
      state.items.map((e, i) => {
        if (action.payload.id === e.id) {
          state.items.splice(i, 1);
          state.counter = state.items.length;
        }
      });
    },

    deleteAllItem: (state) => {
      state.items = [];
      state.counter = state.items.length;
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity >= 1) {
        state.items[itemIndex].quantity += 1;
        state.counter = state.items.length;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.counter = state.items.length;
      }
    },
  },
});

export const {
  AddToCart,
  deleteAllItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
