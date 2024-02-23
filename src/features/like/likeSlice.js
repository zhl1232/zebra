import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    liked: (state) => {
      state.value = !state.value
    },
  },
});

export const { liked } = likeSlice.actions;

export default likeSlice.reducer;