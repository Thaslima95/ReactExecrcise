import React from 'react';
import { useContext } from 'react';
import { UserContext,EmailContext } from './useContext';

export default function ComponentC() {

    const username=useContext(UserContext)
    const email=useContext(EmailContext)
  return (
    <div style={{color:"white"}}>Username:{username}
    <div style={{color:"white"}}>Email:{email}</div>
    </div>
  )
}
