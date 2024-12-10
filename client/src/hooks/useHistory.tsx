import { useState } from 'react'

export const useHistory = ({ initialElements, session }) => {
  // const [session, setSession ] = useState(session);
  const [history, setHistory] = useState([initialElements]);
  console.log(session);

  // undo and redo function
  const undo = () => {};
  const redo = () => {};

  // state 
  const setState = () => {};
  
  return [history, setState, undo, redo];
}