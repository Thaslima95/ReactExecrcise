import React from 'react'

const Child = (data) => {
  return (
    <div>
      child
      <h2>name:{data.name}</h2>
      <h2>age:{data.age}</h2>
      <h2>place:{data.place}</h2>
    </div>
  )
}
export default Child;
