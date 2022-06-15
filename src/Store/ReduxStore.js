import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: { counter: counterReducer, auth:authReducer },
});
export default store;

//redux dispatchmethed
// const counterData = (state = { counter: 0,toggle:true }, action) => {
//   if (action.type === "Increment") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "Decrement") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "IncreaseBy5") {
//     return {
//       counter: state.counter +action.amount,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "Toggle") {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle,
//     };
//   }
//   return state;
// };
// const store = legacy_createStore(counterData);
