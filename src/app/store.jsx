import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartSlice';
// import userReducer from './userSlice';
import productsReducer from '../Features/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;