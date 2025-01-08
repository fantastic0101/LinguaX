import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    index: 0,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = navigationSlice.actions;
export default navigationSlice.reducer;