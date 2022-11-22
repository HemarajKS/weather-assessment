import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: {},
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    currentSearch: (state: any, action: any) => {
      state.search = action.payload;
    },
  },
});

export const { currentSearch } = searchSlice.actions;

export default searchSlice;
