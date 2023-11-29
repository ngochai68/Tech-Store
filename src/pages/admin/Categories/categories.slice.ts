import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoriesState {
  selectedCategoryId: number | null;
  isModalOpen: boolean;
  modalAction: 'create' | 'edit' | null;
}

const initialState: CategoriesState = {
  selectedCategoryId: null,
  isModalOpen: false,
  modalAction: null
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
    openModal: (state, action: PayloadAction<'create' | 'edit'>) => {
      state.isModalOpen = true;
      state.modalAction = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalAction = null;
    },
    setEditingCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    }
  }
});

export const { selectCategory, clearSelectedCategory, openModal, closeModal, setEditingCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
