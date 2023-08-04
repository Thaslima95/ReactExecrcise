import React from 'react';
import ComponentB from './ComponentB';

export const UserContext=React.createContext()
export const EmailContext=React.createContext()

export default function ComponentA() {
    
  return (
    <div>
        <UserContext.Provider value={'Thaslima'}>
            <EmailContext.Provider value={'abc@gmail.com'}>
        <ComponentB/>
        </EmailContext.Provider>
        </UserContext.Provider>
    </div>
  )
}
