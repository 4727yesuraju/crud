import React, { useState } from 'react'
import useReadUser from '../hooks/useReadUser';

export const Read = () => {
  const [id,setId] = useState("");
    const readUser = useReadUser();

    function handleSubmit(e){
         e.preventDefault();
         readUser(id);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="id" placeholder="paste id to read emp" value={id} onChange={e=>setId(e.target.value)}/>
          <button>submit</button>
      </form>
    </div>
  )
}
