import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, toggle: true },
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increaseBy5(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggle(state) {
        state.toggle = !state.toggle;
      },
    },
  });

  export const counterAction = counterSlice.actions;
  export default counterSlice.reducer