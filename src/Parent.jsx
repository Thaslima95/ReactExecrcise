import React from 'react';
import Child  from './Child';
import Child1 from './Child1';


 const Parent = () => {
  return (
    <div>
        <Child name={"Thaslima"} age={"28"} place={"Mannai"}/>
        <Child1 name={"Aafiya"} age={"1"} place={"Mannai"} email={["abc@gmail.com","b@e.com","c@a.com"]}/>
    </div>
  )
}
export default Parent;