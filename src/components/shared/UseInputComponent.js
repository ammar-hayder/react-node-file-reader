import React, { useState } from "react";

function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      className="form-control"
    />
  );
  return [value, input];
}

export default useInput;