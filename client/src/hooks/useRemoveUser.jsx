import React from 'react'
import { useDataContext } from '../context/DataContext';

export default function useRemoveUser() {
    const {setData} = useDataContext();
  async function removeUser(id){
     try {
        const res = await fetch(`api/user/remove/${id}`,{
             method:"DELETE"
        });
        const data = await res.json();
        setData([{id,...data}]);
     } catch (error) {
        console.log("Error : ",error.message);
     }
  }
  return removeUser;
}
