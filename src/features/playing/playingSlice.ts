import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { change } = playingSlice.actions;

export default playingSlice.reducer;