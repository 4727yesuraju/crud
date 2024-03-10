import React, { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export function useDataContext(){
  return useContext(DataContext);

}
export  function DataContextProvider({children}) {
  const [data,setData] = useState();
  return (
    <DataContext.Provider value={{data,setData}}>{children}</DataContext.Provider>
  )
}
