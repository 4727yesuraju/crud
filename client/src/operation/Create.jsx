import React, { useState } from 'react'
import useCreateUser from '../hooks/useCreateUser';
import { useGetAllData } from '../hooks/useGetAllData';
import { useDataContext } from '../context/DataContext';

export default function Create() {
    const [formData,setFormData] = useState({});
    const {setData} = useDataContext();

    const createUser =  useCreateUser();
    const getAllData = useGetAllData();
    console.log(formData);
    function handleSubmit(e){
         e.preventDefault();
         createUser(formData);
    }
    function handleChange(e){
        setFormData({...formData,[e.target.id] : e.target.value});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="username" onChange={handleChange} placeholder="enter username" value={formData.username || ""}/>
          <input type="text" id="empname" onChange={handleChange} placeholder="enter empname" value={formData.empname || ""}/>
          <input type="email" id="email" onChange={handleChange} placeholder="enter email" value={formData.email || ""}/>
          <input type="text" id="role" onChange={handleChange} placeholder="enter role" value={formData.role || ""}/>
          <input type="number" id="salary" onChange={handleChange} placeholder="enter salary" value={formData.salary || ""}/>
          <button>submit</button>
      </form>
    </div>
  )
}
