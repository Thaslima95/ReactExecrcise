import React from "react";

export const Lifecycle = () => {
  const [value, setValue] = useState();
  return (
    <>
      <button onClick={!value}></button>
    </>
  );
};
