// redux/detailSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detail: null,
  image: null, // Yeni bir "image" alanı ekleyin
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload.detail; // "detail" alanını güncelleyin
      state.image = action.payload.image; // "image" alanını güncelleyin
    },
  },
});

export const { setDetail } = detailSlice.actions;
export default detailSlice.reducer;
