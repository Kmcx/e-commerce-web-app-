import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visitedProducts: [],
};

const visitedSlice = createSlice({
  name: 'visited',
  initialState,
  reducers: {
    addVisitedProduct: (state, action) => {
      const exists = state.visitedProducts.find(p => p.id === action.payload.id);
      if (!exists) state.visitedProducts.push(action.payload);
    },
  },
});

export const { addVisitedProduct } = visitedSlice.actions;
export default visitedSlice.reducer;
