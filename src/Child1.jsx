import React from "react";

const Child1 = ({ name, age, place, email }) => {
  return (
    <div>
      child1
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>Place:{place}</h2>
      {email.map((e) => (
        <h2>{e}</h2>
      ))}
    </div>
  );
};
export default Child1;
