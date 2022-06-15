import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
    name: "Authentication",
    initialState: { authentication: false },
    reducers: {
      login(state) {
        state.authentication = true;
      },
      logout(state) {
        state.authentication = false;
      },
    },
  });
  export const authAction=authslice.actions
  export default authslice.reducer