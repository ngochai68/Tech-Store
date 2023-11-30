import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoriesState {
  selectedCategoryId: number | null;
  isCategoryFormModalOpen: boolean;
  modalCategoryFormAction: 'create' | 'edit' | null;
}

const initialState: CategoriesState = {
  selectedCategoryId: null,
  isCategoryFormModalOpen: false,
  modalCategoryFormAction: null
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
    },
    openCategoryFormModal: (state, action: PayloadAction<'create' | 'edit'>) => {
      state.isCategoryFormModalOpen = true;
      state.modalCategoryFormAction = action.payload;
    },
    closeCategoryFormModal: (state) => {
      state.isCategoryFormModalOpen = false;
      state.modalCategoryFormAction = null;
    },
    setEditingCategoryFormModal: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    }
  }
});

export const {
  selectCategory,
  clearSelectedCategory,
  openCategoryFormModal,
  closeCategoryFormModal,
  setEditingCategoryFormModal
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
