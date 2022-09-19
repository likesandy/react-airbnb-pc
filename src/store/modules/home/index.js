import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
  },
});

export default home.reducer;
