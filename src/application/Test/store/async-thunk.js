import { createAsyncThunk } from "@reduxjs/toolkit";

// API example, API in project must define in folder api
const fetchValue = (value = "") => {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: value }), 2000)
  );
};
// ---------------------------------

export const addValueAsync = createAsyncThunk(
  "test/fetchValue",
  async value => {
    const response = await fetchValue(value);
    return response.data;
  }
);
