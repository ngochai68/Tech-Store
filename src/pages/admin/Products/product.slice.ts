import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  selectedCategoryId: number | null;
}

const initialState: ProductsState = {
  selectedCategoryId: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategoryId = null;
    }
  }
});

export const { selectCategory, clearSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;
