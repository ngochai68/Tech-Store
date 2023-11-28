import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoriesState {
  selectedCategoryId: number | null;
}

const initialState: CategoriesState = {
  selectedCategoryId: null
};

const categoriesSlice = createSlice({
  name: 'categories',
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

export const { selectCategory, clearSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
