import React from "react";
import { useSelector } from "react-redux";
import { selectStatus, selectValue } from "../store/slice";

const Child = () => {
  const value = useSelector(selectValue);
  const status = useSelector(selectStatus);

  return <div>{status === "loading" ? "loading ..." : value}</div>;
};

export default Child;
