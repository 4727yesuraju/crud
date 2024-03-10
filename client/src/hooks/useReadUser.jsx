import React from 'react'
import { useDataContext } from '../context/DataContext';

export default function useReadUser() {
    const {setData} = useDataContext();
  async function readUser(id){
     try {
        const res = await fetch(`api/user/read/${id}`);
        const data = await res.json();
        setData([{...data}]);
     } catch (error) {
        console.log("Error : ",error.message);
     }
  }
  return readUser;
}
