import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  selectedProductId: number | null;
  isProductDrawerOpen: boolean;
  drawerProductFormAction: 'create' | 'edit' | null;
}

const initialState: ProductsState = {
  selectedProductId: null,
  isProductDrawerOpen: false,
  drawerProductFormAction: null
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
    },
    openProductDrawer: (state, action: PayloadAction<'create' | 'edit'>) => {
      state.isProductDrawerOpen = true;
      state.drawerProductFormAction = action.payload;
    },
    closeProductDrawer: (state) => {
      state.isProductDrawerOpen = false;
      state.drawerProductFormAction = null;
      state.selectedProductId = null;
    },
    setEditingProduct: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
      state.drawerProductFormAction = 'edit';
    }
  }
});

export const { selectProduct, clearSelectedProduct, openProductDrawer, closeProductDrawer, setEditingProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
