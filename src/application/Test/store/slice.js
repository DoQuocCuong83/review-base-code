import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reducerRegistry from "../../../store/reducer-registry";

// API example, API in project must define in folder api
const fetchValue = (value = "") => {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: value }), 2000)
  );
};
// ---------------------------------

const initialState = {
  value: "",
  status: "success"
};

export const addValueAsync = createAsyncThunk(
  "test/fetchValue",
  async value => {
    const response = await fetchValue(value);
    return response.data;
  }
);

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
