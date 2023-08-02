import React from 'react'

const Products=React.memo(({name,addtoCart})=>{
  console.log(`${name} product component re-rendered`);
    return (
    <div>
        <h1>{name}</h1>
       <button type="button" onClick={()=>addtoCart()}>Add to Cart</button>
    </div>
  );
})
export default Products;
