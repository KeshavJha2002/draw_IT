import { useState, createContext } from 'react'
import { useHistory } from '../hooks/useHistory';
import { Scale, Session } from '../types.ts';

const AppContext = createContext({});

const initialElements = [];

const AppContextProvider = ({children}) => {
  const [scale, setScale] = useState<Scale>(1);
  const [session, setSession] = useState<Session>(null);
  const [elements, setElements, undo, redo] = useHistory(
    initialElements,
    session
  );
  const onZoom = (value:string|number) => {};
  
  return(
    <AppContext.Provider 
      value={{
        scale,
        onZoom,
        undo,
        redo
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext}