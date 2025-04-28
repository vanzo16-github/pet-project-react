import { createSlice } from '@reduxjs/toolkit';

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    currentGood: null
  },
  reducers: {
    setCurrentGood: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.currentGood = action.payload;
    },
  }
});

export const { setCurrentGood } = goodsSlice.actions;
export default goodsSlice.reducer;
