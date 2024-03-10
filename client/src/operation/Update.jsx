import React, { useState } from 'react'
import useCreateUser from '../hooks/useCreateUser';

export default function Update() {
  const [formData,setFormData] = useState({});
  const [id,setId] = useState("");

    const createUser =  useCreateUser();
    console.log(formData);
    function handleSubmit(e){
         e.preventDefault();
         createUser(formData,id);
    }
    function handleChange(e){
        setFormData({...formData,[e.target.id] : e.target.value});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="id" onChange={e=>setId(e.target.value)} placeholder="paste id to update" value={id}/>
          <input type="text" id="empname" onChange={handleChange} placeholder="enter empname - [optional]" value={formData.empname || ""}/>
          <input type="email" id="email" onChange={handleChange} placeholder="enter email - [optional]" value={formData.email || ""}/>
          <input type="text" id="role" onChange={handleChange} placeholder="enter role - [optional]" value={formData.role || ""}/>
          <input type="number" id="salary" onChange={handleChange} placeholder="enter salary - [optional]" value={formData.salary || ""}/>
          <button>submit</button>
      </form>
    </div>
  )
}
