import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryValue: 'all',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
      console.log(state.categoryValue);
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;