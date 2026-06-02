import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    boughtItems: [],
    cartItems: [],
    userMoney: 500,
  },
  reducers: {
    Add: (state, action) => {
      const existingProduct = state.cartItems.find(
        (p) => p.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
    },
    Increase: (state, action) => {
      const product = state.cartItems.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    Decrease: (state, action) => {
      const product = state.cartItems.find((p) => p.id === action.payload);
      if (product) {
        product.quantity -= 1;
      }
      state.cartItems = state.cartItems.filter((p) => p.quantity > 0);
    },
    // checkout: (state, action) => {
    // state.boughtItems.push({ ...state.cartItems });
    // // state.boughtItems = [...state.cartItems];
    // state.cartItems = [];
    // //  console.log(state.boughtItems);
    // },
    checkout: (state) => {
  state.boughtItems = [...state.cartItems];
  state.cartItems = [];
},
  },
});
export const totalItem = (boughtItems) =>{
  return boughtItems.reduce((total, product) => product.quantity * product.price,0)
}

export const totalPrice = (cartItems) => {
  return cartItems.reduce((total, product) => total + product.quantity * product.price, 0);
};export const { Add, removeProduct, Increase, Decrease, checkout, userMoney,  } = cartSlice.actions;
export default cartSlice.reducer;


export const balance = (state) => {
  return (
    state.userMoney - totalPrice(state.boughtItems)
  )};
