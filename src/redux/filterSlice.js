import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
