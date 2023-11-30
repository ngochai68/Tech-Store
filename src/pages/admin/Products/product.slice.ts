import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  selectedProductId: number | null;
}

const initialState: ProductsState = {
  selectedProductId: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProductId = null;
    }
  }
});

export const { selectProduct, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
