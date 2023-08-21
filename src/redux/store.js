// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './detailSlice';

const store = configureStore({
  reducer: detailSlice,
});

export default store;
