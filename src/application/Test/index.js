// @flow
import React, { useState } from "react";
import Child from "./child";
import { useDispatch } from "react-redux";
import { addValueAsync } from "./store/async-thunk";

const Test = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>Title</div>
      <form>
        <input onChange={handleChangeValue} type="text" placeholder="Value" />
        <button type="button" onClick={() => dispatch(addValueAsync(value))}>
          Add Value
        </button>
      </form>
      <Child />
    </>
  );
};

export default Test;
