import { createSlice } from "@reduxjs/toolkit";
import reducerRegistry from "../../../store/reducer-registry";
import { addValueAsync } from "./async-thunk";

const initialState = {
  value: "",
  status: "success"
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addValueAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(addValueAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload;
      });
  }
});

reducerRegistry.register("test", testSlice.reducer);

export const selectValue = state => state.test.value;
export const selectStatus = state => state.test.status;
