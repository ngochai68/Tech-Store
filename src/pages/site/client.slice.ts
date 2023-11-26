import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
  selectedClientId: string | null;
}

const initialState: ClientState = {
  selectedClientId: null
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    selectClient: (state, action: PayloadAction<string>) => {
      state.selectedClientId = action.payload;
    },
    clearSelectedClient: (state) => {
      state.selectedClientId = null;
    }
  }
});

export const { selectClient, clearSelectedClient } = clientSlice.actions;
export default clientSlice.reducer;
