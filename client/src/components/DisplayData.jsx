import React from 'react'
import { useDataContext } from '../context/DataContext'
import {  useGetAllData } from '../hooks/useGetAllData'


export default function DisplayData() {
    const {data,setData} = useDataContext();
     const getAllData = useGetAllData()

     console.log(data);
    return (
        <div className="display">
            <div className="opmenu">
                <h1>operation</h1>
                <div>
                    <button className="btn" onClick={getAllData}>get all data</button>
                    <button className="btn" onClick={()=>setData([])}>clear data</button>
                </div>
            </div>
            <pre className="box">
                {JSON.stringify(data,null,2)}
            </pre>
        </div>
  )
}
