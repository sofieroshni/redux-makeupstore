import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartSlice.jsx';
// import userReducer from './userSlice';
import productsReducer from '../Features/ProductsSlice.jsx';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;