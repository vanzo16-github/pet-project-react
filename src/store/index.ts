import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './good/reducer';
import cartReducer from './cart/reducer';
import { createAPI } from '../services/api';
export const api = createAPI();


export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer
  }
});
