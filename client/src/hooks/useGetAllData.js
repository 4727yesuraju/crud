import React from 'react'
import { useDataContext } from "../context/DataContext";


export const useGetAllData = () => {

    const {setData} = useDataContext();
    
    async function getAllData(){
        try {
            const data = await fetch('/api/user/readall');
            const res = await data.json();
            setData(res.emps);
        } catch (error) {
            console.log(error.message);
        }
    }
  return getAllData
}
